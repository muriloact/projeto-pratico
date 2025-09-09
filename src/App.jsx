import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home";
import Details from "./assets/pages/Details";
import NotFound from "./assets/pages/NotFound";
import Navbar from "./assets/components/Navbar";
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



// import './App.css'
// import Home from './assets/pages/home'

// function App() {

//   return (
//     <>
//       <Home></Home>
//     </>
//   )
// }

// export default App
