// 어떤 타입의 응답 데이터가 오는지를 쿼리 함수에서 지정해준다.

import { Post, PostRequest } from '../../interfaces/post'
import { axiosInstance } from '../axios'

export const getPosts = async () => {
    try {
        const { data } = await axiosInstance.get<Post[]>('/api/posts')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async (post: PostRequest) => {
    try {
        const { data } = await axiosInstance.post<Post>('/api/posts', post)
        return data
    } catch (error) {
        console.log(error)
    }
}
