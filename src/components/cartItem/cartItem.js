import "./cartItem.scss"

const CartItem = ({img, name, price}) => {
    return (
        <div className="cart-container">
            <img className="cart-container__img" src={img}/>
            <div className="cart-container__details">
                <div>
                    <h2>{name}</h2>
                    <p>${price}</p>
                </div>
                <input type="number"/>
            </div>
            <button className="cart-container__button">X</button>
        </div>
    )
}

export default CartItem