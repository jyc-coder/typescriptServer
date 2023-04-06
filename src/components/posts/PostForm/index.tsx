import React, { useState } from 'react'
import { Post, PostRequest } from '../../../interfaces/post'
import { AxiosError } from 'axios'
import { UseMutateFunction } from 'react-query'

interface PostFormProps {
    mutate: UseMutateFunction<Post, AxiosError, PostRequest>
}

function PostForm({ mutate }: PostFormProps) {
    const [userInput, setUserInput] = useState<PostRequest>({ title: '', body: '' })
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserInput({ ...userInput, [name]: value })
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(userInput)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="title" value={userInput.title} onChange={onChange} />
            <input type="text" name="body" value={userInput.body} onChange={onChange} />
            <button type="submit">작성하기</button>
        </form>
    )
}

export default PostForm
