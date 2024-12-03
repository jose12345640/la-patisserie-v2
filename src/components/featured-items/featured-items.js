import "./FeaturedContent.scss"

const FeaturedContent = ({ imgProduto, label, labelstyle, nameProduto, descriptionProduto, priceProduto, onClick }) => {
    
    return (
        <div className="feature-item" onClick={onClick}>
            <div className="feature-item__img">
                <img src={imgProduto} />
                <span className="feature-item__img-tag"  style={{...labelstyle }}>{label}</span>
            </div>
            <div class="feature-item__content">
                <div>
                    <p>{nameProduto}</p>
                    <p hidden>{descriptionProduto}</p>
                </div>
                <div>
                    <p>{priceProduto}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedContent