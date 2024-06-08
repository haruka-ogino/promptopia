'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'
import Prompt from '@models/prompt'

const PromptCardList = ({ data: Prompt[], handleTagClick }) => {}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  function handleSearchChange(e) {}

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('api/prompt')
      const data = await res.json()

      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      {/* component below will only be used inside this component so it can be created here */}
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
