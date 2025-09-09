import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Details from "./assets/pages/Details.jsx";
import NotFound from "./assets/pages/NotFound.jsx";
import Navbar from "./assets/components/Navbar.jsx";
export default function App() {
return (
<Router>
<Navbar />
<main className="p-4">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/detalhes/:id" element={<Details />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
</Router>
);
}
