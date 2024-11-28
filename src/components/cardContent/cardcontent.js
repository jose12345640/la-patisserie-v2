import "./cardContent.scss"

const CardContent = ({ imgProduto, nameProduto, descriptionProduto, priceProduto }) => {
    
    return (
        <div className="cardContent">
            <div className="cardContent__img">
                <img src={imgProduto} />
            </div>
            <div className="cardContent__info">
                <p className="cardContent__info-name">{nameProduto}</p>
                <p className="cardContent__info-description">
                    {descriptionProduto}
                </p>
                <span className="cardContent__info-price">{priceProduto}</span>
            </div>
            <div className="cardContent__btn">
                <btn>
                    <p>Adicionar</p>
                </btn>
            </div>
        </div>
    )
}

export default CardContent
