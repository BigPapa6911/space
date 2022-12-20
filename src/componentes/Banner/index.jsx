import banner from './banner.png'
import style from './banner.module.scss'

const Banner = () => {

    return (
        <div className={style.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Banner do Space" />
        </div>
    )

}

export default Banner