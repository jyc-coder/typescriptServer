import { useState } from 'react'
import { useQuery } from 'react-query'
import { verify } from '../apis/services/auth'
import { getCookie } from '../utils/cookies'

type authType = 'PENDING' | 'SUCCESS' | 'FAILED'

function verifyToken() {
    const [isAuthenticated, setIsAuthenticated] = useState<authType>('PENDING')
    const verifyResult = useQuery(['auth', 'verify'], verify, {
        onSuccess: () => {
            setIsAuthenticated('SUCCESS')
        },
        onError: () => {
            setIsAuthenticated('FAILED')
        },
        retry: 0,
        enabled: !!getCookie('accessToken'), // 토큰이 있을 때만 verify
    }) // 쿠키가 없으면 undefined라서, boolean 타입으로 변환하기 위해서 !!를 사용한다.

    return isAuthenticated
}

export default verifyToken
