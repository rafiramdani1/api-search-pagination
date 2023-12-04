import { prisma } from "../db/index.js"

export const findAllUsers = async (page, limit, search) => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        { username: { contains: search } },
        { email: { contains: search } }
      ],
    },
    take: limit,
    skip: limit ? page * limit : undefined,
    orderBy: {
      id: 'desc'
    }
  })

  const totalRows = await prisma.user.count({
    where: {
      OR: [
        { username: { contains: search } },
        { email: { contains: search } }
      ]
    }
  })

  const totalPage = limit ? Math.ceil(totalRows / limit) : 1

  return {
    results: users,
    page,
    limit: limit || totalRows,
    totalRows,
    totalPage
  }
}

