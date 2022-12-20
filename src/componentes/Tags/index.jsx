import style from "./tags.module.scss";
import fotos from "../galeria/fotos.json"

const Tags = ({tag,filtrar,setItens}) => {

    return (
        <section className={style.tags}>
            <p>Filtre por tags</p>
            <ul className={style.tags__lista}>
                {tag.map(tag => {
                    return (
                        <li key={tag} onClick={()=>filtrar(tag)}>{tag}</li>
                    )
                })}
                <li onClick={()=>setItens(fotos)}>Todas</li>
            </ul>
        </section>

    )

}

export default Tags