import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation
import "./categories.scss";
import Search from "../../components/search/search";
import CardContent from "../../components/cardContent/cardcontent";
import RadioGroup from "../../components/radioButton/radioButton";

function Categories() {
    const location = useLocation(); // Usando o hook useLocation para acessar a URL
    const [produtos, setProdutos] = useState([]);
    const [filteredProdutos, setFilteredProdutos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = [
        { value: "ALL", label: "Todos" },
        { value: "CHOCOLATE", label: "Chocolateria" },
        { value: "PIE", label: "Tortas" },
        { value: "CAKE", label: "Bolos" },
    ];

    // Lê o filtro da URL e aplica no selectedCategory
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const filter = params.get("filter");
        if (filter) {
            setSelectedCategory(filter);
        }
    }, [location.search]);

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

    // Filtra os produtos com base no filtro selecionado
    useEffect(() => {
        if (selectedCategory === "ALL") {
            setFilteredProdutos(produtos);
        } else {
            setFilteredProdutos(
                produtos.filter((produto) => produto.category === selectedCategory)
            );
        }
    }, [selectedCategory, produtos]);

    return (
        <div className="categories">
            <div className="searchContent">
                <Search />
            </div>
            <div className="filterContent">
                {/* Passando o selectedCategory como valor para manter o filtro selecionado */}
                <RadioGroup
                    options={options}
                    selected={selectedCategory} // Passando o estado para o componente
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
