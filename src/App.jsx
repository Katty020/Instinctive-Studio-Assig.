import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Chapters from './pages/Chapters'
import Help from './pages/Help'
import Settings from './pages/Settings'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/students" element={<Students />} />
                <Route path="/chapters" element={<Chapters />} />
                <Route path="/Help" element={<Help/>} />
                <Route path="/Settings" element={<Settings/>} />
            </Routes>
        </Router>
    )
}

export default App
