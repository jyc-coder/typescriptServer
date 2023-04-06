import React, { useEffect } from 'react'
import verifyToken from '../hooks/verifyToken'
import { getCookie } from '../utils/cookies'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProtectedRouter() {
    const isAuthenticated = verifyToken()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated === 'FAILED') {
            //토큰이 없거나, 인증 실패 시 로그인 페이지로
            alert('로그인이 필요합니다')
            navigate('/login')
        }
    }, [isAuthenticated])

    return <Outlet />
}
