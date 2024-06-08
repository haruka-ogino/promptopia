import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export const Get = async (req: Request, { params }: Params) => {
  try {
    await connectToDB()

    const prompt = await Prompt.findById(params.id).populate('creator')

    if (!prompt) return new Response('Prompt not found', { status: 404 })

    return new Response(JSON.stringify(prompt), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch prompt', { status: 500 })
  }
}
