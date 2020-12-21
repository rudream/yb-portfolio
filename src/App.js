import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/projects" exact>
                        <Projects />
                    </Route>
                    <Route path="/contact" exact>
                        <Contact />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
