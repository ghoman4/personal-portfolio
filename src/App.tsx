import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar, { CurrentPage } from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar active={CurrentPage.HOME} />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <>
                            <NavBar active={CurrentPage.PROJECTS} />
                            <Projects />
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <>
                            <NavBar active={CurrentPage.ABOUT} />
                            <About />
                        </>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <>
                            <NavBar active={CurrentPage.CONTACT} />
                            <Contact />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
