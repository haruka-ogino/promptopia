'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'
import { Post } from '@models/prompt'

const MyProfile = () => {
  const router = useRouter()

  const [posts, setPosts] = useState<Post[]>([])

  const { data: session } = useSession()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`api/users/${session?.user?.id}/posts`)
      const data = await res.json()

      setPosts(data)
    }

    if (session?.user?.id) fetchPosts()
  }, [])

  function handleEdit(post: Post) {
    router.push(`/update-prompt?id=${post._id}`)
  }

  async function handleDelete(post: Post) {
    const hasConfirmed = confirm('Are you sure you want to delete this prompt?')

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE',
        })

        const filteredPosts = posts.filter((p) => p._id !== post._id)

        setPosts(filteredPosts)
      } catch (error) {}
    }
  }

  return (
    <Profile
      name="My"
      desc="Welcome yo your personalised profile page"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile
