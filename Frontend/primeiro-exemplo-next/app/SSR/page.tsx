async function buscarProfessores() {
  const resposta = await fetch(
    "http://localhost:3001/professores",
    {
      cache: "no-store"
    }
  );

  return resposta.json();
}

export default async function ServerSideRendering() {

  const professores = await buscarProfessores();

  return (
    <>
      <h1>Server Side Rendering</h1>

      <p>
        Página gerada em:
        {" "}
        {new Date().toLocaleTimeString()}
      </p>

      {professores.map((prof: any) => (
        <div key={prof.id}>
          <h3>{prof.nome}</h3>
          <p>{prof.area}</p>
        </div>
      ))}
    </>
  );
}