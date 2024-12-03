import "./product.scss"
import ProductSection from "../../components/productsection/product_section"
import FeaturedContent from "../../components/featured-items/featured-items"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function Product() {

    const location = useLocation();
    const produto = location.state?.produto || {};
    const navigate = useNavigate(); 

    const [produtosDestaque, setProdutosDestaque] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleProductClick = (produto) => {
        navigate("/produto", { state: { produto } });
    };

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch("http://localhost:8080/le-patisserie-backend/api/products");
                if (!response.ok) {
                    throw new Error("Erro ao buscar produtos.");
                }
                const data = await response.json();

                const produtosAdaptados = data.slice(0, 3).map((item) => ({
                    imgProduto: item.imageUrl,
                    label: getlabelStyle(item.category),
                    labelstyle: getCategoryStyle(item.category),
                    nameProduto: item.name,
                    descriptionProduto: item.description,
                    priceProduto: `R$ ${item.price.toFixed(2)}`,
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
                return "Bolos";
            case "PIE":
                return "Tortas";
            case "CHOCOLATE":
                return "Chocolateria";
            default:
                return "";
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

    return(
        <div className="product">
                <ProductSection
                    imgProduto={produto.imgProduto}
                    nameProduto={produto.nameProduto}
                    descriptionProduto={produto.descriptionProduto}
                    priceProduto={produto.priceProduto}
                />
                <div className="product__recomendation">
                    <h2>Você Também Pode Gostar</h2>
                    <div className="product__recomendation-items">
                    {!loading &&
                        !error &&
                        produtosDestaque.map((produto, index) => (
                            <FeaturedContent
                                key={index}
                                imgProduto={produto.imgProduto}
                                label={produto.label}
                                labelstyle={produto.labelstyle}
                                nameProduto={produto.nameProduto}
                                descriptionProduto={produto.descriptionProduto}
                                priceProduto={produto.priceProduto}
                                onClick={() => handleProductClick(produto)}
                            />
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Product