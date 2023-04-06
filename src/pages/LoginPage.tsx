import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { login } from '../apis/services/auth'
import { setCookie } from '../utils/cookies'
import { AxiosError } from 'axios'
import LoginForm from '../components/login/LoginForm'

function LoginPage() {
    const navigate = useNavigate()
    const { mutate } = useMutation(login, {
        onSuccess: (data) => {
            setCookie('accessToken', data.accessToken, { path: '/', maxAge: data.exp - data.iat })
            navigate('./posts') //
        },
        onError: (err: AxiosError) => {
            console.log(err)
        },
    })
    return <LoginForm mutate={mutate} />
}

export default LoginPage
