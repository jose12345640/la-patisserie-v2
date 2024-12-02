import "./product.scss"
import ProductSection from "../../components/productsection/product_section"


const produtos = [
    {
        imgProduto: "https://i.ibb.co/Yps25v0/image-1.png",
        nameProduto: "Truffe Citron",
        descriptionProduto: "A clássica e famosa Floresta Negra tem como base Massa Sablée de Cacau, recheada com Geleia Artesanal de Cereja, Ganache Meio Amargo, finalizada com creme de chocolate, chantilly de nata, geleia de cereja, raspas de chocolate meio amargo e cerejas frescas.",
        priceProduto: "R$ 92,00"
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
        </div>
    )
}

export default Product