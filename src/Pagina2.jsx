import styles from './Pagina2.module.css';

function Pagina2({ torna }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Pagina 2 - CSS Rosso
      </h1>

      <p>Questa pagina utilizza Pagina2.module.css</p>

      <button
        className={styles.button}
        onClick={torna}
      >
        Torna alla pagina 1
      </button>
    </div>
  );
}

export default Pagina2;