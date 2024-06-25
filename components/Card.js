import Image from "next/image";
import Link from "next/link";

import styles from '../styles/Card.module.css'

export default function Card({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`;

  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        width={180}
        height={150}
        alt={pokemon.name}
        src={imageUrl}
        unoptimized
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  );
}
