import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Posts from "@/components/Posts"

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  const posts = getSortedPostsData()

  const { id } = params

  const post = posts.find((post) => post.id === id)

  if (!post) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: post.title,
  }
}

const Post = async ({ params }: { params: { id: string } }) => {
  const posts = getSortedPostsData()

  const { id } = params

  if (!posts.find((post) => post.id === id)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(id)

  const pubDate = getFormattedDate(date)

  return (
    <div className="flex justify-center">
      <main className="flex mt-10 max-w-[80%]">
        <div className="h-full max-w-[40%]">
          <Posts />
        </div>
        <div className="pl-8 border-l ml-6">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {title}
          </h2>
          <p className="mt-0 text-muted-foreground">{pubDate}</p>
          <article className="mt-4">
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p className="mt-4 ">
              <Link href="/" className="flex underline items-center">
                <ArrowLeft size="1.25rem" /> Volver al inicio
              </Link>
            </p>
          </article>
        </div>
      </main>
    </div>
  )
}

export default Post
