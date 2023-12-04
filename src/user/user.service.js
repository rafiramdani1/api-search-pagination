import { findAllUsers } from "./user.repository.js"


export const getUsers = async (page, limit, search) => {
  const users = await findAllUsers(page, limit, search)
  return users
}