'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'

const Feed = () => {
  const [searchText, setSearchText] = useState('')

  function handleSearchChange(e) {}

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
      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
