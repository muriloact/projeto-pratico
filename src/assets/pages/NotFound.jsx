import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! Página não encontrada.</p>
      <Link to="/" className="notfound-btn">
        Voltar para Início
      </Link>
    </div>
  );
}