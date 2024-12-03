import { useState, useEffect } from "react";
import "./intro.scss";
import FeaturedContent from "../../components/featured-items/featured-items";

function Intro() {
    const [produtosDestaque, setProdutosDestaque] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch("http://localhost:8080/le-patisserie-backend/api/top");
                if (!response.ok) {
                    throw new Error("Erro ao buscar produtos.");
                }
                const data = await response.json();

                const produtosAdaptados = data.map((item) => ({
                    imgSrc: item.product.imageUrl,
                    label: getlabelStyle(item.product.category),
                    labelstyle: getCategoryStyle(item.product.category),
                    title: item.product.name,
                    price: `R$ ${item.product.price.toFixed(2)}`,
                }));

                setProdutosDestaque(produtosAdaptados);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    const getlabelStyle = (category) => {
        switch (category) {
            case "CAKE":
                return  "Bolos" ;
            case "PIE":
                return  "Tortas" ;
            case "CHOCOLATE":
                return "Chocolateria" ;
            default:
                return "" ;
        }
    };

    const getCategoryStyle = (category) => {
        switch (category) {
            case "CAKE":
                return { backgroundColor: "#FDFFD5", border: "1px solid #E1D600", color: "#E1D600" };
            case "PIE":
                return { backgroundColor: "#FFD5D5", border: "1px solid #FF9EBB", color: "#FF6B97" };
            case "CHOCOLATE":
                return { backgroundColor: "#D5FFE1", border: "1px solid #28E544", color: "#28E544" };
            default:
                return { backgroundColor: "#FFFFFF", border: "1px solid #000000", color: "#000000" };
        }
    };
    

    return (
        <div className="intro">
            <div className="banner__content">
                <div className="banner__content-img">
                    <img src="https://i.ibb.co/Yps25v0/image-1.png" alt="Mediants" />
                </div>
                <div className="banner__content-info">
                    <h2>Mendiants</h2>
                    <p>
                        Os mendiants são discos de chocolate com nuts (castanhas, nozes, macadâmias,
                        pistache, avelãs, amendoim, amêndoas) e frutas vermelhas secas. Sabores:
                        chocolate branco, meio amargo, ruby e pistache.
                    </p>
                </div>
            </div>
            <div className="categories__content">
                <h2>Nossas Categorias</h2>
                <div className="categories__content__items">
                    <div>
                        <a href="/categorias">
                            <div className="categories__content__items-info">
                                <img src="https://i.ibb.co/d06YkWT/image-2.png" alt="" />
                                <p>Chocolateria</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/categorias">
                            <div className="categories__content__items-info">
                                <img src="https://i.ibb.co/MSRJ23r/image-3.png" alt="" />
                                <p>Tortas</p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/categorias">
                            <div className="categories__content__items-info">
                                <img src="https://i.ibb.co/G3ScR9T/image-4-1.png" alt="" />
                                <p>Bolos</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="featured__content">
                <h2>Delícias em Destaque</h2>
                {loading && <p>Carregando produtos...</p>}
                {error && <p className="error-message">{error}</p>}
                <div className="featured__content-items">
                    {!loading &&
                        !error &&
                        produtosDestaque.map((produto, index) => (
                            <FeaturedContent
                                key={index}
                                imgSrc={produto.imgSrc}
                                label={produto.label}
                                labelstyle={produto.labelstyle}
                                title={produto.title}
                                price={produto.price}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Intro;
