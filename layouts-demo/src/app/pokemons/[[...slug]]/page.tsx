import Image from "next/image";
import pokemonListImage from "../pokemonListImage";
export default async function Pokemons({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug = [] } = await params;
  if (slug.length === 2) {
    return (
      <>
        <div>
          <h1>
            <strong>{slug[0]} </strong>
          </h1>
          <Image
            alt={pokemonListImage[0].name}
            src={pokemonListImage[0].src}
            width={250}
            height={100}
          />
          <div>
            <h1>VS</h1>
          </div>
          <h1>
            <strong>{slug[1]} </strong>
          </h1>
          <Image alt={pokemonListImage[1].name} src={pokemonListImage[1].src} />
        </div>
      </>
    );
  }
  if (slug.length === 1) {
    return (
      <>
        <div>
          <h1>
            <strong>{slug[0]}</strong>
          </h1>
        </div>
        <div>
          <Image alt={pokemonListImage[3].name} src={pokemonListImage[2].src} />
        </div>
      </>
    );
  }
  return (
    <>
      <h1>
        <strong>Pokemons</strong>
      </h1>
      <Image alt={pokemonListImage[3].name} src={pokemonListImage[3].src} />
    </>
  );
}
