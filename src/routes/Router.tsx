import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import PostCreatePage from '../pages/PostCreatePage'
import PostsPage from '../pages/PostsPage'
import ProtectedRouter from './ProtectedRouter'
import { Link } from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/posts">포스트</Link> | <Link to="/posts/new">새 글</Link>
            </nav>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRouter />}>
                    <Route path="/posts" element={<PostsPage />} />

                    <Route path="/post/new" element={<PostCreatePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
