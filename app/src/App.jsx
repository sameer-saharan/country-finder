import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <div className="w-full max-w-screen-sm h-screen mx-auto px-10 responsive">
      <h1 className="text-6xl font-bold text-center pb-10">Country Finder</h1>
      <Outlet />
    </div>
  )
}

export default App
