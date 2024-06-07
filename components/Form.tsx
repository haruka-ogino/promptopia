import { Dispatch, SetStateAction } from 'react'

interface Params {
  type: string
  post: Post
  setPost: Dispatch<SetStateAction<Post>>
  submitting: boolean
  handleSubmit: (e: any) => Promise<void>
}

interface Post {
  prompt: string
  tag: string
}

const Form = ({ type, post, setPost, submitting, handleSubmit }: Params) => {
  return <section className="w-full flex-center flex-col"></section>
}

export default Form
