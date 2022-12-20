import curtir from "./favorito.png";
import open from "./open.png";

const Cards = ({ fotos, style }) => {

    return (
        <ul className={style.galeria__cards}>
            {fotos.map(foto => {
                return (<li key={foto.id} className={style.galeria__card}>
                    <img className={style.galeria__imagem}
                        src={foto.imagem}
                        alt={foto.titulo} />
                    <p className={style.galeria__descricao}>{foto.titulo}</p>
                    <div>
                        <p>{foto.creditos}</p>
                        <span>
                            <img src={curtir} alt="Icone de coracao" />
                            <img src={open} alt="Icone de abrir modal" />
                        </span>
                    </div>
                </li>)
            })}
        </ul>
    )
}

export default Cards