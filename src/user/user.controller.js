import express from 'express'
import { getUsers } from './user.service.js'

export const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
  try {

    // Get request query
    const page = parseInt(req.query.page) || 0
    const limit = req.query.limit ? parseInt(req.query.limit) : undefined
    const search = req.query.search || ""

    const users = await getUsers(page, limit, search)
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json(error)
  }
})