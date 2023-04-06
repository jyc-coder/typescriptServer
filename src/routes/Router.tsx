import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import PostCreatePage from '../pages/PostCreatePage'
import PostsPage from '../pages/PostsPage'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/post/new" element={<PostCreatePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
