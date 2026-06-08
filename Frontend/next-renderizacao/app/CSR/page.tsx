"use client";

import { useEffect, useState } from "react";

type Professor = {
  id: number;
  nome: string;
  area: string;
};

export default function ClientSideRendering() {

  const [professores, setProfessores] = useState<Professor[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/professores")
      .then((res) => res.json())
      .then((dados) => {
        setProfessores(dados);
        setCarregando(false);
      });
  }, []);

  return (
    <>
      <h1>Client Side Rendering</h1>

      {carregando && <p>Carregando...</p>}

      {professores.map((prof) => (
        <div key={prof.id}>
          <h3>{prof.nome}</h3>
          <p>{prof.area}</p>
        </div>
      ))}
    </>
  );
}