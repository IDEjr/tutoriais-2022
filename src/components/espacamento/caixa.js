import styles from './style.module.css';
import logo from './ide.png'

function Caixa() {
  return (
        <div className={`${styles.caixa}`}>
            <img className={styles.img} src={logo} alt="logo da ide"></img>
        </div>    
  );
}

export default Caixa;
