import facebook from "./facebook.svg"
import instagram from "./instagram.svg"
import twitter from "./twitter.svg"
import style from "./footer.module.scss"


const Footer = () => {

    return (
        <footer>
            <div className={style.imagens}>
                <a href="https://www.instagram.com/gus_maia_/"><img src={facebook} alt="Logo do instagram" /></a>
                <a href="https://www.instagram.com/gus_maia_/"><img src={twitter} alt="Logo do instagram" /></a>
                <a href="https://www.instagram.com/gus_maia_/"><img src={instagram} alt="Logo do instagram" /></a>
            </div>
            <div className={style.subtitulo}>
                <h2>Developed by BigPapa</h2>
            </div>
        </footer>
    )

}

export default Footer