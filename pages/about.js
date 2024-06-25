import Image from "next/image";
import styles from "../styles/About.module.css";
import Head from "next/head";

export default function About() {
  const CharizardGif = `https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_6.gif`;

  return (
    <>
      <Head>
        <title>PokeNext | Sobre</title>
      </Head>
      <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>
          Esse projeto foi inspirado no vídeo do Matheus Batisti em um curso de NextJS.
        </p>
        <Image
          src={CharizardGif}
          width={300}
          height={300}
          alt="Charizard Gif"
        />
      </div>
    </>
  );
}
