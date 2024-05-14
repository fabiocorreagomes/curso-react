import styles from './styles.module.css'

const Pokemon = ( { name = 'Pikachu' } ) => (
    <h2 className= {styles.name} > {name} </h2>
  )

  export default Pokemon;