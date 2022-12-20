import style from "./populares.module.scss";
import fotosPopulares from "./populares.json";

const Populares = () => {

    return(
        
        <section className={style.populares}>
        <h1>Populares</h1>
        <ul className={style.populares__imagens}>
            {fotosPopulares.map(foto=>{
                return(
                    <li key={foto.id}>
                        <img src={foto.path} alt={foto.alt}/>
                    </li>
                )
            })}
        </ul>
        <button>Ver mais fotos</button>
        </section>

    )
    
}

export default Populares