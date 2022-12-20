import Banner from "../../componentes/Banner";
import Footer from "../../componentes/footer";
import Galeria from "../../componentes/galeria";
import Header from "../../componentes/header/header"
import Menu from "../../componentes/menu"
import Populares from "../../componentes/populares";
import style from "./homePage.module.scss";

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <section className={style.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <div className={style.galeria}>
                <Galeria />
                <Populares />
            </div>
            <Footer />
        </>
    )
}

export default HomePage