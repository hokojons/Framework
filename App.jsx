import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Calculator from './pages/calculator'
import Todo from './pages/Todo'
import Lyrics from './pages/Lyrics'
import Home from './pages/Home'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/lyrics" element={<Lyrics />} />
        </Routes>
      </main>
    </div>
  )
}