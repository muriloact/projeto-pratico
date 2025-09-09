import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import FormInfo from "../components/FormInfo";

export default function Details() {
  const { id } = useParams();
  const [pessoa, setPessoa] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get(`/api/desaparecidos/${id}`);
        setPessoa(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  if (!pessoa) return <p>Carregando...</p>;

  return (
    <div>
      <img src={pessoa.foto} alt={pessoa.nome} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{pessoa.nome}</h1>
      <p>Status: <span className={pessoa.status === 'Desaparecido' ? 'text-red-600' : 'text-green-600'}>{pessoa.status}</span></p>
      <p className="mt-2">{pessoa.descricao}</p>

      <button onClick={() => setShowForm(!showForm)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        {showForm ? 'Fechar' : 'Enviar Informações'}
      </button>

      {showForm && <FormInfo onSubmit={async (data) => {
        const fd = new FormData();
        fd.append('observacao', data.observacao);
        fd.append('localizacao', data.localizacao);
        if (data.foto) fd.append('foto', data.foto);
        try {
          await api.post(`/api/desaparecidos/${id}/informacoes`, fd, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
          alert('Informação enviada!');
        } catch (err) {
          console.error(err);
        }
      }} />}
    </div>
  );
}