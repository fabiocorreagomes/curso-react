import Pokemon from "../../components/Pokemon";
import styles from './styles.module.css'

import PokemonLogo from "../../assets/images/Pokemon_logo.png"

const Home = () => {
  return (
    <div className={styles.container}>
    <img className={styles.image} src={PokemonLogo} alt="Logo do pokemon" />
    <Pokemon name="Pikachu" />
    <Pokemon name="Charmander" />
    <Pokemon name="Charizard" />
    <Pokemon name="Squirtle" />
    <Pokemon name="Ditto" />
    </div>
  );
}

export default Home;
