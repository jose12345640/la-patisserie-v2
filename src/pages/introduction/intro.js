import "./intro.scss"
import FeaturedContent from "../../components/featured-items/featured-items"

function Intro() {
    
    return (
        <div className="intro">
            <div className="banner__content">
                <div className="banner__content-img">
                    <img src="https://i.ibb.co/Yps25v0/image-1.png" />
                </div>
                <div className="banner__content-info">
                    <h2>
                        Mediants
                    </h2>
                    <p>
                        Os mendiants são discos de chocolate com nuts (castanhas, nozes, macadâmias, pistache, avelãs, amendoim, amêndoas) e frutas vermelhas secas.
                        Sabores: chocolate branco, meio amargo, ruby e pistache.
                    </p>
                </div>
            </div>
            <div className="categories__content">
                <h2>Nossas Categorias</h2>
                <div className="categories__content__items">
                    <div>
                        <a href="#">
                            <div className="categories__content__items-info">
                                <img src="https://i.ibb.co/d06YkWT/image-2.png" alt="" />
                                <p>Chocolateria</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <div className="categories__content__items-info">
                                <img src="https://i.ibb.co/MSRJ23r/image-3.png" alt="" />
                                <p>Tortas</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                        <div className="categories__content__items-info">
                            <img src="https://i.ibb.co/G3ScR9T/image-4-1.png" alt="" />
                            <p>Bolos</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="featured__content">
                <h2>Delicias em Destaque</h2>
                <div className="featured__content-items">
                    <FeaturedContent
                        imgSrc="https://i.ibb.co/WgYzpvJ/image-7.png"
                        label="Tortas"
                        labelstyle={{
                            backgroundColor: '#FFD5D5', 
                            border: '1px solid #FF9EBB', 
                            color: '#FF6B97'
                        }}
                        title="Torta Floresta Negra"
                        price="R$ 122,00"
                    />
                    <FeaturedContent
                        imgSrc="https://i.ibb.co/hsjbLtw/image-6.png"
                        label="Chocolateria"
                        labelstyle={{
                            backgroundColor: '#D5FFE1', 
                            border: '1px solid #28E544', 
                            color: '#28E544'
                        }}
                        title="Truffes Pistachio"
                        price="R$ 63,00"
                    />
                    <FeaturedContent
                        imgSrc="https://i.ibb.co/G2rpYD8/image-8-1.png"
                        label="Bolos"
                        labelstyle={{
                            backgroundColor: '#FDFFD5', 
                            border: '1px solid #E1D600', 
                            color: '#E1D600'
                        }}
                        title="Cream Tart Number"
                        price="R$ 92,00"
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro