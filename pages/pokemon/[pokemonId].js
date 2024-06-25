import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";
import { img } from "../../styles/Card.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Loading from "@/components/Loading";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  return {
    props: { pokemon: data },
  };
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default function Pokemon({ pokemon }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading/>;
  }

  if (!pokemon) {
    return <div>Pokemon não encontrado.</div>;
  }

  const imageUrl = `https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`;
  const capitalizedName = capitalizeFirstLetter(pokemon.name);

  return (
    <>
      <Head>
        <title>PokeNext | Pokemon - {capitalizedName}</title>
      </Head>
      <div className={styles.pokemon_container}>
        <h1 className={styles.title}> {pokemon.name}</h1>
        <Image
          className={img}
          width={140}
          height={140}
          alt={pokemon.name}
          src={imageUrl}
          unoptimized
        />

        <div>
          <h3>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>

        <div>
          <h3>Tipo:</h3>
          <div className={styles.types_container}>
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles["type_" + item.type.name]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10}cm</p>
          </div>
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10}kg</p>
          </div>
        </div>
      </div>
    </>
  );
}
