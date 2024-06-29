import express from 'express'
import db from '../../db/conn.mjs'

const router = express.Router()

// Get all planner data for given user
router.get('/planner', async (req, res) => {
  try {
    const userId = req.auth.userId
    const user = await db.collection('planner').findOne({ clerkUserId: userId })
    if (!user) {
      const newUser = {
        clerkUserId: userId,
        boardOrder: [],
        boards: {},
        columns: {},
        categories: {},
        taskCards: {},
        subTasks: {},
      }
      await db.collection('planner').insertOne(newUser)
    }

    const results = await db
      .collection('planner')
      .aggregate([
        { $match: { clerkUserId: userId } },
        { $project: { boardOrder: 1, boards: 1, columns: 1, categories: 1, taskCards: 1, subTasks: 1, _id: 0 } },
        { $limit: 1 },
      ])
      .toArray()

    res.send(results[0]).status(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

export default router
