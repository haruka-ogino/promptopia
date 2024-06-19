// 'use client'

// import { ChangeEvent, useState, useEffect, Suspense } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'

// import Form from '@components/Form'

// function UpdatePrompt() {
//   const router = useRouter()
//   const [submitting, setSubmitting] = useState(false)

//   const [post, setPost] = useState({
//     prompt: '',
//     tag: '',
//   })

//   const searchParams = useSearchParams()
//   const promptId = searchParams.get('id')

//   useEffect(() => {
//     const getPromptDetails = async () => {
//       try {
//         const res = await fetch(`/api/prompt/${promptId}`)
//         if (res.ok) {
//           const data = await res.json()
//           setPost({ prompt: data.prompt, tag: data.tag })
//         } else {
//           throw new Error('Failed to fetch prompt details')
//         }
//       } catch (error) {
//         console.error('Error fetching prompt details:', error)
//       }
//     }

//     if (promptId) getPromptDetails()
//   }, [promptId])

//   async function updatePrompt(e: ChangeEvent<HTMLTextAreaElement>) {
//     e.preventDefault()
//     setSubmitting(true)

//     if (!promptId) return alert('Prompt ID not found')

//     try {
//       const res = await fetch(`/api/prompt/${promptId}`, {
//         method: 'PATCH',
//         body: JSON.stringify({
//           prompt: post.prompt,
//           tag: post.tag,
//         }),
//       })

//       if (res.ok) {
//         router.push('/')
//       }
//     } catch (error) {
//       console.log(error)
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Form
//         type="Edit"
//         post={post}
//         setPost={setPost}
//         submitting={submitting}
//         handleSubmit={updatePrompt}
//       />
//     </Suspense>
//   )
// }

// export default UpdatePrompt

import { ChangeEvent, useState } from 'react'
import Form from '@components/Form'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

interface UpdatePromptProps {
  initialPost: {
    prompt: string
    tag: string
  }
}

function UpdatePrompt({ initialPost }: UpdatePromptProps) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState(initialPost)

  async function updatePrompt(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch(`/api/prompt/${router.query.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      })

      if (res.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export const getServerSideProps: GetServerSideProps<UpdatePromptProps> = async (
  context
) => {
  const { id } = context.query

  try {
    const res = await fetch(`/api/prompt/${id}`)
    if (res.ok) {
      const data = await res.json()
      return {
        props: {
          initialPost: {
            prompt: data.prompt,
            tag: data.tag,
          },
        },
      }
    } else {
      throw new Error('Failed to fetch prompt details')
    }
  } catch (error) {
    console.error('Error fetching prompt details:', error)
    return {
      notFound: true,
    }
  }
}

export default UpdatePrompt
