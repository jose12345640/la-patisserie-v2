import "./product.scss"

function Product({img, description, name, price}) {
    <div>
        <div>
            <img src={img}/>
            <p>{description}</p>
        </div>
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <div>radio</div>
            <div>radio</div>
            <div>
                <div>bah</div>
                <div>super botão</div>
            </div>
        </div>
    </div>
}

export default Product