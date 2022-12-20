import Tags from "../Tags";
import style from "./galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./card";
import { useState } from "react";

const Galeria = () => {

    const [itens,setItens] = useState(fotos)
    const filtro = [...new Set(fotos.map(valor=>valor.tag))]

    const filtrar = (tag) =>{
        const novasFotos = fotos.filter(foto => {
            return (
                foto.tag === tag
            )
        })

        setItens(novasFotos);
    }

    return(

        <section className={style.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tag={filtro} filtrar={filtrar} setItens={setItens}/>
            <Cards fotos={itens} style={style}/>
        </section>

    )

}

export default Galeria