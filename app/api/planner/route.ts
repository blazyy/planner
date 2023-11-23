import { MongoClient, ServerApiVersion } from 'mongodb'

const client = new MongoClient(`${process.env.NEXT_PUBLIC_MONGO_URI}`, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export async function GET() {
  try {
    await client.connect()
    const db = client.db('planner')
    const res = await db.collection('planner').findOne(
      { username: 'user1' },
      {
        projection: { boardOrder: 1, boards: 1, columns: 1, categories: 1, taskCards: 1, subTasks: 1, _id: 0 },
      }
    )

    return Response.json(res)
  } catch (error) {
    console.error('MongoDB Error:', error)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  } finally {
    await client.close()
  }
}
