import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar, { CurrentPage } from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact";
import Error404 from "./pages/Error404";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar active={CurrentPage.HOME} />
                            <FloatingContact />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <>
                            <NavBar active={CurrentPage.PROJECTS} />
                            <FloatingContact />
                            <Projects />
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <>
                            <NavBar active={CurrentPage.ABOUT} />
                            <FloatingContact />
                            <About />
                        </>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <>
                            <NavBar active={CurrentPage.CONTACT} />
                            <FloatingContact />
                            <Contact />
                        </>
                    }
                />
                {/* Any other page (404)*/}
                <Route
                    path="*"
                    element={
                        <>
                            <NavBar />
                            <Error404 />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
