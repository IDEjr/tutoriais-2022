import styles from './style.module.css';

function Conteudo({children}) {
  return (
        <p className={`${styles.texto}`}>
          {children}
        </p>    
  );
}

export default Conteudo;
