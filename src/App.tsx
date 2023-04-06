import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })
    return <QueryClientProvider client={queryClient}></QueryClientProvider>
}

export default App
