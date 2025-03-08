import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>

            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}

export default App;
