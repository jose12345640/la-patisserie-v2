import "./product.scss"
import ProductSection from "../../components/productsection/product_section"
import FeaturedContent from "../../components/featured-items/featured-items"



const produtos = [
    {
        imgProduto: "https://i.ibb.co/Yps25v0/image-1.png",
        nameProduto: "Truffe Citron",
        descriptionProduto: "A clássica e famosa Floresta Negra tem como base Massa Sablée de Cacau, recheada com Geleia Artesanal de Cereja, Ganache Meio Amargo, finalizada com creme de chocolate, chantilly de nata, geleia de cereja, raspas de chocolate meio amargo e cerejas frescas.",
        priceProduto: "R$ 92,00"
    }
];

const produtosRecomendados = [
    {
        imgSrc: "https://i.ibb.co/WgYzpvJ/image-7.png",
        label: "Tortas",
        labelstyle: {
            backgroundColor: '#FFD5D5', 
            border: '1px solid #FF9EBB', 
            color: '#FF6B97'
        },
        title: "Torta Floresta Negra",
        price: "R$ 122,00"
    },
    {
        imgSrc: "https://i.ibb.co/hsjbLtw/image-6.png",
        label: "Chocolateria",
        labelstyle: {
            backgroundColor: '#D5FFE1', 
            border: '1px solid #28E544', 
            color: '#28E544'
        },
        title: "Truffes Pistachio",
        price: "R$ 63,00"
    },
    {
        imgSrc: "https://i.ibb.co/G2rpYD8/image-8-1.png",
        label: "Bolos",
        labelstyle: {
            backgroundColor: '#FDFFD5', 
            border: '1px solid #E1D600', 
            color: '#E1D600'
        },
        title: "Cream Tart Number",
        price: "R$ 92,00"
    }
];

function Product() {
    return(
        <div className="product">
            {produtos.map((produto, index) => (
                    <ProductSection
                        key={index}
                        imgProduto={produto.imgProduto}
                        nameProduto={produto.nameProduto}
                        descriptionProduto={produto.descriptionProduto}
                        priceProduto={produto.priceProduto}
                    />
                ))}
                <div className="product__recomendation">
                    <h2>Você Também Pode Gostar</h2>
                    <div className="product__recomendation-items">
                        {produtosRecomendados.map((produtoRecomendado, index) => (
                            <FeaturedContent
                                key={index}
                                imgSrc={produtoRecomendado.imgSrc}
                                label={produtoRecomendado.label}
                                labelstyle={produtoRecomendado.labelstyle}
                                title={produtoRecomendado.title}
                                price={produtoRecomendado.price}
                            />
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Product