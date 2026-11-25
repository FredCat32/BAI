import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Tech from './pages/Tech'
import Blog from './pages/blog/Blog'
import BlogPost from './pages/blog/BlogPost'
import LocationPage from './pages/locations/LocationPage'
import NotFound from './pages/NotFound'
import locations from './pages/locations/locations'
import './App.css'

// The router is supplied by the caller: BrowserRouter in main.jsx,
// StaticRouter in entry-server.jsx (build-time prerendering).
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          {locations.map((location) => (
            <Route
              key={location.slug}
              path={`/${location.slug}`}
              element={<LocationPage location={location} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App