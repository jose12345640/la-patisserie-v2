import "./product_section.scss"

const ProductSection = ({imgProduto, descriptionProduto, nameProduto, priceProduto}) => {
    return(
        <div className="productsection">
            <div className="productsection__id">
                <img src={imgProduto}/>
                <p className="productsection__id-description">{descriptionProduto}</p>
            </div>
            <div className="productsection__info">
                <h1 className="productsection__info-name">{nameProduto}</h1>
                <p className="productsection__info-price">{priceProduto}</p>
                <div className="productsection__info-btn">
                    <button>
                        <p>
                            Adicionar
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductSection