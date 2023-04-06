import React from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../apis/services/post'
import PostForm from '../components/posts/PostForm'

function PostCreatePage() {
    const navigate = useNavigate()
    const { mutate } = useMutation(createPost, {
        onSuccess: () => {
            navigate('/posts')
        },
        onError: (err) => {
            console.log(err)
        },
    })
    return <PostForm mutate={mutate} />
}

export default PostCreatePage
