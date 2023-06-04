import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"

type Props = {
  post: Post
}

const ListItem = ({ post }: Props) => {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className="m-0 list-none">
      <Link
        href={`/posts/${id}`}
        className="font-medium text-primary underline underline-offset-4"
      >
        {title}
      </Link>
      <br />
      <p
        className="
        text-gray-500
        text-sm
      "
      >
        {formattedDate}
      </p>
    </li>
  )
}

export default ListItem
