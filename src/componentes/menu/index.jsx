import inicio from "./home-ativo.png"
import MaisVistos from "./mais-vistas-inativo.png"
import MaisCurtidas from "./mais-curtidas-inativo.png"
import Novas from "./novas-inativo.png"
import surpreendame from "./surpreenda-me-inativo.png"
import style from "./menu.module.scss"

const Menu = () => {
    return(
        <nav className={style.menu}>
            <ul className={style.menu__lista}>
                <li className={style.menu__item}> 
                    <img src={inicio} alt="Icone da pagina inicial"/>
                    <a href="/">Início</a>
                </li>
                <li className={style.menu__item}>
                    <img src={MaisVistos} alt="Icone dos mais vistos"/>
                    <a href="/">Mais vistas</a>
                </li>
                <li className={style.menu__item}>
                    <img src={MaisCurtidas} alt="Icone das mais curtidas"/>
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={style.menu__item}>
                    <img src={Novas} alt="Icone das mais novas"/>
                    <a href="/">Novas</a>
                </li>
                <li className={style.menu__item}>
                    <img src={surpreendame} alt="Icone do supreenda-me"/>
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu