import { useState } from "react";

export default function FormInfo({ onSubmit }) {
  const [observacao, setObservacao] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [foto, setFoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ observacao, localizacao, foto });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded space-y-2">
      <textarea className="w-full border p-2 rounded" value={observacao} onChange={e => setObservacao(e.target.value)} placeholder="Observação..." />
      <input className="w-full border p-2 rounded" value={localizacao} onChange={e => setLocalizacao(e.target.value)} placeholder="Localização" />
      <input type="file" onChange={e => setFoto(e.target.files[0])} />
      <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded">Enviar</button>
    </form>
  );
}