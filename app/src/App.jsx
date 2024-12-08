import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import {ThemeProvider} from './context/theme'
import { useState, useEffect } from "react"
function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => prevMode == 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleThemeMode }}>
      <div className="w-full max-w-screen-sm h-screen mx-auto px-10 responsive dark:bg-[#222222]">
        <h1 className="text-6xl font-bold text-center pb-10 dark:text-white">Country Finder</h1>
        <Header />
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default App
