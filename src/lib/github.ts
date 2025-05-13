import { prisma } from "./prisma";
import dayjs from "dayjs";
import { Octokit } from "@octokit/rest";

export async function getGithubOAuthToken(userId: string) {
  const account = await prisma.account.findFirstOrThrow({
    where: {
      provider: "github",
      user_id: userId,
    },
  });

  if (!account.access_token) {
    throw new Error("GitHub access token not found.");
  }

  const octokit = new Octokit({
    auth: account.access_token,
  });

  try {
    await octokit.rest.users.getAuthenticated();
  } catch (error) {
    console.error("GitHub token is invalid or revoked:", error);
    throw new Error(
      "GitHub token inválido. O usuário precisa fazer login novamente."
    );
  }

  return octokit;
}
