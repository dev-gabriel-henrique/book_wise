import { prisma } from '@/lib/prisma'
import { setCookie } from 'nookies'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, id } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (userExists) {
    return res.status(400).json({ message: 'User already exists.' })
  }

  const user = await prisma.user.create({
    data: { name },
  })

  setCookie({ res }, '@bookwise:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return res.status(201).json(user)
}
