import styles from './style.module.css';

function Alinhamento() {
  return (
    <div className={styles.App}>
        <div className={`${styles.containerFlex} ${styles.inferiorDireito}`}>
          <div className={`${styles.caixa}`}>
            TESTE 1
          </div>   
        </div>
    </div>
  );
}

export default Alinhamento;
