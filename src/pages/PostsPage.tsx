import React from 'react'
import { useQuery } from 'react-query'
import PostList from '../components/posts/PostList'
import { getPosts } from '../apis/services/post'

function PostsPage() {
    const { data: posts, isLoading, error } = useQuery('posts', getPosts)

    if (isLoading) return <div>로딩중...</div>
    if (error || !posts) return <div>에러가 발생했습니다.</div>
    return <PostList posts={posts} />
}

export default PostsPage
