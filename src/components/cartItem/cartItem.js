import "./cartItem.scss"

const CartItem = ({img, name, price}) => {
    return (
        <div className="cart-container">
            <img className="cart-container__img" src={img}/>
            <div>
                <h1>{name}</h1>
                <p>${price}</p>
                <div>- Numero +</div>
            </div>
            <button>X</button>
        </div>
    )
}

export default CartItem