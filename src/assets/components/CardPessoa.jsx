import { Link } from "react-router-dom";
import './CardPessoa.css'

export default function CardPessoa({ pessoa }) {
  return (
    <Link to={`/detalhes/${pessoa.id}`}>
      <div className="border rounded-lg shadow p-4 hover:bg-gray-50">
        <img src={pessoa.foto || 'https://via.placeholder.com/300'} alt={pessoa.nome} className="w-full h-40 object-cover rounded" />
        <h3 className="mt-2 font-semibold">{pessoa.nome}</h3>
        <p className={pessoa.status === 'Desaparecido' ? 'text-red-600' : 'text-green-600'}>
          Status: {pessoa.status}
        </p>
      </div>
    </Link>
  );
}