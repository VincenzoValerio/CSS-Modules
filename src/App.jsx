import { useState } from 'react';
import styles from './App.module.css';
import Pagina2 from './Pagina2';

function App() {
  const [pagina, setPagina] = useState(1);

  if (pagina === 2) {
    return <Pagina2 torna={() => setPagina(1)} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Pagina 1 - CSS Blu
      </h1>

      <p>Questa pagina utilizza App.module.css</p>

      <button
        className={styles.button}
        onClick={() => setPagina(2)}
      >
        Vai alla pagina 2
      </button>
    </div>
  );
}

export default App;