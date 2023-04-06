import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import Router from './routes/Router'

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    )
}

export default App
