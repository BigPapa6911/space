import search from "./search.png"
import logo from "./logo.png"
import styles from "./header.module.scss"

const Header = () => {

    return(
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__Titulo}>
                <img src={logo} alt="Logo do Space" className="Icon"/>
                <h1>Space</h1>
            </div>
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="O que você procura?" className={styles.cabecalho__input}/>
                <img src={search} alt="Lupa" />
            </div>
        </header>
    )
}

export default Header