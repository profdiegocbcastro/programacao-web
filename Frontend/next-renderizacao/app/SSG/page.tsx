async function buscarProfessores() {
  const resposta = await fetch(
    "http://localhost:3001/professores",
    {
      cache: "force-cache"
    }
  );

  return resposta.json();
}

export default async function StaticSiteGeneration() {

  const professores = await buscarProfessores();

  return (
    <>
      <h1>Static Site Generation</h1>

      <p>
        Os dados foram obtidos durante a geração da aplicação.
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