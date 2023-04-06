export interface LoginRequest {
    username: string
    password: string
}

export interface RegisterRequest extends LoginRequest {
    email: string
}

export interface UserPayload {
    id: number
    username: string
    email: string
}

export interface AuthResponse extends UserPayload {
    iat: number
    exp: number
    accessToken: string
}

//프론트에서 따로 관리하고자 하는 유저 데이터 타입이 있다면, 타입을 추가해주시면 됩니다.
