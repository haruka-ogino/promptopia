import { IPrompt } from '@models/prompt'
import PromptCard from './PromptCard'

interface Params {
  name: string
  desc: string
  data: IPrompt[]
  handleEdit: (post: IPrompt) => void
  handleDelete: (post: IPrompt) => Promise<void>
}

const Profile = ({ name, desc, data, handleEdit, handleDelete }: Params) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id.toString()}
            post={post}
            handleTagClick={}
            handleEdit={() => handleEdit(post)}
            handleDelete={() => handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile
