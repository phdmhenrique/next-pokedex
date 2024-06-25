import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  
  const CharizardGif = `https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_6.gif`

  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet erat eu ante tristique congue ac ut urna. Integer consequat maximus
        magna ac porta. Suspendisse ultrices et mi at iaculis. Mauris dapibus
        auctor urna et ornare. Morbi sit amet euismod elit. Donec eu libero
        aliquet, posuere tortor quis, tristique ipsum. Suspendisse tincidunt,
        urna vel volutpat imperdiet, eros metus efficitur magna, nec ullamcorper
        neque augue vel metus. Nullam imperdiet dui sit amet imperdiet faucibus.
        Aliquam elit lectus, mollis dapibus rutrum eget, dapibus et nunc. Donec
        fermentum odio id ex dictum ornare. Aenean auctor neque a lectus
        placerat cursus. Suspendisse mollis massa ligula, eu congue nulla auctor
        sed. Suspendisse vitae leo posuere, imperdiet justo vel, molestie eros.
        Sed eleifend, odio feugiat ultrices mollis, lectus ligula faucibus
        metus, sit amet rutrum nibh nisi ac massa.
      </p>
      <Image src={CharizardGif} width={300} height={300} alt="Charizard Gif" />
    </div>
  );
}
