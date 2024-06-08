import PromptCard from './PromptCard'

interface Params {
  name: string
  desc: string
  data: []
  handleEdit: () => void
  handleDelete: Promise<() => void>
}

const Profile = ({ name, desc, data, handleEdit, handleDelete }: Params) => {
  return (
    <section className="w-full">
      <h1>{name} Profile</h1>
    </section>
  )
}

export default Profile
