import styles from './style.module.css';
import Caixa from './caixa'

function Alinhamento() {
  return (
    <div className={styles.containerConteudo}>
        <div className={`${styles.containerFlex}`}>
          <Caixa /> 
          <Caixa /> 
          <Caixa /> 
          <Caixa /> 
        </div>
    </div>
  );
}

export default Alinhamento;