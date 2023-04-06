import React from 'react'
import { Post } from '../../../interfaces/post'

interface PostListProps {
    posts: Post[]
}

function PostList({ posts }: PostListProps) {
    return (
        <>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>작성자: {post.userId}</p>
                </div>
            ))}
        </>
    )
}

export default PostList
