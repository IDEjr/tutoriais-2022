import Caixa from './caixa';
import styles from './style.module.css';

function Alinhamento() {
  return (
    <div className={styles.container}>
        <Caixa/>
        <Caixa/>
        <Caixa/>
        <Caixa/>
    </div>
  );
}

export default Alinhamento;
