import {LanguageProvider} from './contexts/LanguageContext';
import {ThemeProvider} from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import HomeScreen from './pages/HomeScreen';
import Scripts from './pages/Scripts';
import {Routes, Route} from 'react-router-dom';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <LanguageProvider>
                    <div
                        className="bg-theme-bg-primary text-theme-text-primary overflow-x-hidden min-h-screen transition-colors duration-300">
                        <Navbar/>
                        <Routes>
                            <Route path="/" element={<HomeScreen/>}/>
                            <Route path="/scripts" element={<Scripts/>}/>
                        </Routes>
                        <Footer/>
                    </div>
                </LanguageProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;