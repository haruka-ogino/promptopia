'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'
import Prompt, { IPrompt, Post } from '@models/prompt'

interface Params {
  data: Post[]
  handleTagClick: () => void
}

const PromptCardList = ({ data, handleTagClick }: Params) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [posts, setPosts] = useState<IPrompt[]>([])

  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('api/prompt')
      const data = await res.json()

      setPosts(data)
    }
    fetchPosts()
  }, [])

  function filterPrompts(search) {
    const regex = new RegExp(search, 'i')
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    )
  }

  // function handleSearchChange(e) {
  //   clearTimeout(searchTimeout)
  //   setSearchText(e.target.value)

  //   // debounce method
  //   setSearchTimeout(
  //     setTimeout(() => {
  //       const searchResult = filterPrompts(e.target.value)
  //       setSearchedResults(searchResult)
  //     }, 500)
  //   )
  // }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          // onChange={handleSearchChange}
          className="search_input peer"
          required
        />
      </form>

      {/* component below will only be used inside this component so it can be created here */}
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
