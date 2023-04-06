import React, { useState } from 'react'
import { UseMutateFunction } from 'react-query'
import { AxiosError } from 'axios'
import { LoginRequest, AuthResponse } from '../../../interfaces/auth'
interface LoginFormProps {
    mutate: UseMutateFunction<AuthResponse, AxiosError, LoginRequest>
}
function LoginForm({ mutate }: LoginFormProps) {
    const [userInput, setUserInput] = useState<LoginRequest>({ username: '', password: '' })
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
            <input type="text" name="username" value={userInput.username} onChange={onChange} />
            <input type="password" name="password" value={userInput.password} onChange={onChange} />
            <button type="submit">로그인</button>
        </form>
    )
}

export default LoginForm
