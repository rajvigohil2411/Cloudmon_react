import './App.css';
import MiniDrawer from './Components/Drawer.js'
import Navbar from './Components/Navbar.js'
import Home from "./Pages/Home"
import Analytics from "./Pages/Analytics"
import Settings from "./Pages/Settings"
import { Route, Routes } from "react-router-dom"
import SavingCtgMore from "./Pages/SavingCtgMore"
function App() {
  return (
    <div>
      <Navbar />
      <MiniDrawer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/SavingCtgMore" element={<SavingCtgMore />}></Route>
      </Routes>

    </div>
  )
}

export default App

