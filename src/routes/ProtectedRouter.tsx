import React, { useEffect } from 'react'
import verifyToken from '../hooks/verifyToken'
import { getCookie } from '../utils/cookies'
import { Outlet, useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'

export default function ProtectedRouter() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const token = getCookie('accessToken')
    const isAuthenticated = verifyToken()

    useEffect(() => {
        if (isAuthenticated === 'FAILED') {
            queryClient.clear() // 캐시 삭제
            // 유효하지 않은 access token 이라면 removeCookie 로 삭제 필요
            // 다만 refresh token (httponly cookie) 삭제는 서버쪽에서 해야한다.

            // 이제 토큰이 있든 없든 isAuthenticated 는 값이 set 되므로 token 은 조건문에 제외
            alert('로그인이 필요합니다')
            navigate('/login')
        }
    }, [isAuthenticated])

    // 토큰이 없다면 verifyToken 이 작동할 때까지 잠시 컴포넌트를 숨김
    // 토큰이 있으면 verifyToken 작동 전이라도 일단 컴포넌트를 보여주되
    // 만약 그게 잘못된 녀석이라면, 백엔드에 요청을 못보내기에 컨텐츠를 볼수는 없다.
    if (!token && isAuthenticated !== 'SUCCESS') return <>로딩 중</>
    return <Outlet />
}
