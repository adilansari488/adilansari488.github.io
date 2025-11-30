import { useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Articles from "./views/Articles";
import Projects from "./views/Projects";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <ThemeProvider>
        {!loading ? (
          <div className="bg-premium-black min-h-screen text-premium-silver">
            <Navbar />
            <Home />
            <About />
            <Articles />
            <Projects />
            <Contact />
          </div>
        ) : (
          <LoadingScreen />
        )}
    </ThemeProvider>
  );
}

export default App;
