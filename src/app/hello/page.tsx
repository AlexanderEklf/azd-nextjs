export default async function Page() {
  const data = (await fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(
    (x) => x.json()
  )) as { name: string };

  return (
    <>
      World : {process.env.POSTGRES_PORT} : {data.name}
    </>
  );
}
