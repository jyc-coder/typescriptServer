import React, { useEffect } from 'react'
import verifyToken from '../hooks/verifyToken'
import { getCookie } from '../utils/cookies'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProtectedRouter() {
    const navigate = useNavigate()
    const token = getCookie('accessToken')
    const isAuthenticated = verifyToken()

    useEffect(() => {
        if (isAuthenticated === 'FAILED') {
            //토큰이 없거나, 인증 실패 시 로그인 페이지로
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
