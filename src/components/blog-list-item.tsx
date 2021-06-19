/** @jsx jsx */
import * as React from "react"
import { jsx, Link as TLink, Box } from "theme-ui"
import { Link } from "gatsby"
import ItemTags from "./item-tags"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4}>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
      {post.title}
    </TLink>
    <br/>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [1, 1, 2], color: `secondary` }}>
      <time>{post.date}</time>
        {post.tags && showTags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
    </TLink>
    <br/>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [1, 1, 1], color: `text` }}>
      {post.description}
    </TLink>
  </Box>
)

export default BlogListItem
