import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { Adapter } from "next-auth/adapters";
import { destroyCookie, parseCookies } from "nookies";
import { prisma } from "../prisma";

export function PrismaAdapter(
  req: NextApiRequest | NextPageContext["req"],
  res: NextApiResponse | NextPageContext["res"]
): Adapter {
  return {
    async createUser(user: { name: string; avatar_url: string }) {
      const { "@bookwise:userId": userIdOnCookies } = parseCookies({ req });

      if (!userIdOnCookies) {
        throw new Error("User id not found on cookies");
      }

      const prismaUser = await prisma.user.update({
        where: {
          id: userIdOnCookies,
        },

        data: {
          name: user.name,
          avatar_url: user.avatar_url,
        },
      });

      destroyCookie({ res }, "@bookwise:userId", {
        path: "/",
      });

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        avatar_url: prismaUser.avatar_url,
        emailVerified: null,
      };
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) return null;

      return {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url!,
        emailVerified: null,
        email: "",
        username: "",
      };
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      });

      if (!account) return null;

      const { user } = account;

      return {
        id: user.id,
        name: user.name,
        email: "",
        avatar_url: user.avatar_url!,
        username: "",
        emailVerified: null,
      };
    },

    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id!,
        },
        data: {
          name: user.name,
          avatar_url: user.avatar_url,
        },
      });

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: "",
        avatar_url: prismaUser.avatar_url!,
        username: "",
        emailVerified: null,
      };
    },

    async linkAccount(account: {
      userId: string;
      type: string;
      provider: string;
      providerAccountId: string;
      refresh_token?: string;
      access_token?: string;
      expires_at?: number;
      token_type?: string;
      scope?: string;
      id_token?: string;
      session_state?: string;
    }) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      });
    },

    async createSession({ sessionToken, expires, userId }) {
      await prisma.session.create({
        data: {
          user_id: userId,
          expires,
          session_token: sessionToken,
        },
      });

      return {
        userId,
        sessionToken,
        expires,
      };
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      });

      if (!prismaSession) return null;

      const { user, ...session } = prismaSession;

      return {
        session: {
          userId: session.user_id,
          expires: session.expires,
          sessionToken: session.session_token,
        },
        user: {
          id: user.id,
          name: user.name,
          email: "",
          avatar_url: user.avatar_url!,
          username: "",
          emailVerified: null,
        },
      };
    },

    async updateSession({ sessionToken, userId, expires }) {
      const prismaSession = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      });

      return {
        sessionToken: prismaSession.session_token,
        userId: prismaSession.user_id,
        expires: prismaSession.expires,
      };
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      });
    },
  };
}
