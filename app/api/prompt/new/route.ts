import { connectToDB } from '@utils/database'

export const POST = async (req: Request) => {
  const { userId, prompt, tag } = await req.json()

  try {
    await connectToDB()
  } catch (error) {}
}
