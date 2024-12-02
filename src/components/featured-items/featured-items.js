import "./FeaturedContent.scss"

const FeaturedContent = ({ imgSrc, label, labelstyle, title, price }) => {
    
    return (
        <div className="feature-item">
            <a href="/produto">
            <div className="feature-item__img">
                <img src={imgSrc} />
                <span className="feature-item__img-tag"  style={{...labelstyle }}>{label}</span>
            </div>
            <div class="feature-item__content">
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <p>{price}</p>
                </div>
            </div>
            </a>
        </div>
    )
}

export default FeaturedContent