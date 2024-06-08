'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {
  const [posts, setPosts] = useState([])

  const { data: session } = useSession()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`api/users/${session?.user?.id}/posts`)
      const data = await res.json()

      setPosts(data)
    }

    if (session?.user?.id) fetchPosts()
  }, [])

  function handleEdit() {}

  async function handleDelete() {}

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
