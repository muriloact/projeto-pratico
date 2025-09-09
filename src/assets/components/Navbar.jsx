import { Link } from "react-router-dom";
import'./Navbar.css'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">Projeto Prático</Link>
    </nav>
  );
}