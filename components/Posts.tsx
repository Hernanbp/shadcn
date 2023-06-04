import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

const Posts = () => {
  const posts = getSortedPostsData()

  return (
    <div>
      <h3 className="text-3xl mb-4 font-semibold tracking-tight scroll-m-20">
        Blog
      </h3>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Posts
