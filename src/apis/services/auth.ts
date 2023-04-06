import { AuthResponse, LoginRequest, RegisterRequest, UserPayload } from '../../interfaces/auth'
import { axiosInstance } from '../axios'

export const login = async (user: LoginRequest) => {
    try {
        const { data } = await axiosInstance.post<AuthResponse>('/api/auth/login', user)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const register = async (user: RegisterRequest) => {
    try {
        const { data } = await axiosInstance.post<AuthResponse>('/api/auth/register', user)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const verify = async () => {
    try {
        const { data } = await axiosInstance.get<UserPayload>('/api/auth/verify')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const refresh = async () => {
    const { data } = await axiosInstance.get<AuthResponse>('/api/auth/refresh')
    return data
}
