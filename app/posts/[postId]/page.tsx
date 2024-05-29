// pages/[postId].tsx
import { useRouter } from 'next/router'

const page = () => {
  const router = useRouter()
  const { postId } = router.query
  return <>{postId}</>
}

export default page
