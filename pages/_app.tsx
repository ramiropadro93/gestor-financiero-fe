import Navbar from '@/components/Navbar';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import { UserContextProvider } from '@/context/userContext';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <UserContextProvider>
                <Navbar />
                <Component {...pageProps} />
            </UserContextProvider>
        </>
    );
}

export default App;
