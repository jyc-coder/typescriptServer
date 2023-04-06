import { useState } from 'react'
import { useQuery } from 'react-query'
import { refresh, verify } from '../apis/services/auth'
import { getCookie, setCookie } from '../utils/cookies'

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

    // 액세스 토큰이 없을 때만
    // 가능하다면, refresh token의 존재 여부를 쿠키 혹은 redux 상태로 관리하면서 함께 써주는 것이 좋다.
    const refreshResult = useQuery(['auth', 'refresth'], refresh, {
        onSuccess: (data) => {
            setCookie('accessToken', data.accessToken, { path: '/', maxAge: data.exp - data.iat })
            setIsAuthenticated('SUCCESS')
        },
        onError: () => {
            setIsAuthenticated('FAILED')
        },
        retry: 0,
        enabled: !getCookie('accessToken'),
    })
    return isAuthenticated
}

export default verifyToken
