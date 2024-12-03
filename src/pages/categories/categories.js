import { useState, useEffect } from "react";
import "./categories.scss";
import Search from "../../components/search/search";
import CardContent from "../../components/cardContent/cardcontent";
import RadioGroup from "../../components/radioButton/radioButton";

function Categories() {
    const [produtos, setProdutos] = useState([]);
    const [filteredProdutos, setFilteredProdutos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = [
        { value: "CAKE", label: "Tortas" },
        { value: "CHOCOLATE", label: "Chocolateria" },
        { value: "PIE", label: "Amendoim" },
    ];

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch("http://localhost:8080/le-patisserie-backend/api/products");
                if (!response.ok) {
                    throw new Error("Erro ao buscar produtos.");
                }
                const data = await response.json();

                const produtosAdaptados = data.map((item) => ({
                    imgProduto: item.imageUrl,
                    nameProduto: item.name,
                    descriptionProduto: item.description,
                    priceProduto: `R$ ${item.price.toFixed(2)}`,
                    category: item.category, 
                }));

                setProdutos(produtosAdaptados);
                setFilteredProdutos(produtosAdaptados);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            setFilteredProdutos(
                produtos.filter((produto) => produto.category === selectedCategory)
            );
        } else {
            setFilteredProdutos(produtos); 
        }
    }, [selectedCategory, produtos]);

    return (
        <div className="categories">
            <div className="searchContent">
                <Search />
            </div>
            <div className="filterContent">
                <RadioGroup
                    options={options}
                    onCategoryChange={setSelectedCategory} 
                />
            </div>
            <div className="itemContent">
                {loading && <p>Carregando produtos...</p>}
                {error && <p className="error-message">{error}</p>}
                {!loading &&
                    !error &&
                    filteredProdutos.map((produto, index) => (
                        <CardContent
                            key={index}
                            imgProduto={produto.imgProduto}
                            nameProduto={produto.nameProduto}
                            descriptionProduto={produto.descriptionProduto}
                            priceProduto={produto.priceProduto}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Categories;
