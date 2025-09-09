import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/v1/pessoas/aberto/dinamico?registros=8");
        console.log(res.data); // deve vir um array de PessoaDTO

        setPessoas(res.data || []);
      } catch (err) {
        console.error(err);
        setPessoas([]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Pessoas Desaparecidas</h1>
      <div className="grids">
        {pessoas.map((pessoa) => (
          <Link key={pessoa.id} to={`/detalhes/${pessoa.id}`}>
            <div className="container-pessoas">
              <img
                src={pessoa.urlFoto || "https://via.placeholder.com/150"}
                alt={pessoa.nome}
                className="img-pessoas"
              />
              <div className="texto">
                <h2 >{pessoa.nome}</h2>
                <p>Idade: {pessoa.idade || "Não informada"}</p>
                <p>Status: {pessoa.vivo ? "Vivo" : "Falecido"}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
