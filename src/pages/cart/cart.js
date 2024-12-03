import "./cart.scss"
import CartItem from "../../components/cartItem/cartItem";
import SearchCep from "../../components/searchCep/searchCep";
import Button from "../../components/button/button";

function Cart() {
    return (
        <section className="cart">
            <a className="cart__back" href="/">◄ Adicionar mais items</a>
            <div className="cart__container">
                <div className="cart__container__list">
                    <CartItem
                        img="https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/452323213_18036070091295808_6917366670818768544_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EDSfngu6OO8Q7kNvgEfbZZT&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=AVgWIzdNcaKTfCc5Lpsmm_2&oh=00_AYC3mJajjVn0zs_v5NfSFx0G-rc3C07He-UlUM05D7UxiA&oe=675191D8"
                        name="Smashed Avo" price="20.00"/>
                    <CartItem
                        img="https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/452323213_18036070091295808_6917366670818768544_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EDSfngu6OO8Q7kNvgEfbZZT&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=AVgWIzdNcaKTfCc5Lpsmm_2&oh=00_AYC3mJajjVn0zs_v5NfSFx0G-rc3C07He-UlUM05D7UxiA&oe=675191D8"
                        name="Smashed Avo" price="20.00"/>
                    <CartItem
                        img="https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/452323213_18036070091295808_6917366670818768544_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EDSfngu6OO8Q7kNvgEfbZZT&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=AVgWIzdNcaKTfCc5Lpsmm_2&oh=00_AYC3mJajjVn0zs_v5NfSFx0G-rc3C07He-UlUM05D7UxiA&oe=675191D8"
                        name="Smashed Avo" price="20.00"/>
                    <CartItem
                        img="https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/452323213_18036070091295808_6917366670818768544_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EDSfngu6OO8Q7kNvgEfbZZT&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=AVgWIzdNcaKTfCc5Lpsmm_2&oh=00_AYC3mJajjVn0zs_v5NfSFx0G-rc3C07He-UlUM05D7UxiA&oe=675191D8"
                        name="Smashed Avo" price="20.00"/>
                </div>
                <div className="cart__container__total">
                    <div className="cart__container__total__price">
                        <h1 className="cart-h1">Total Carrinho</h1>
                        <div className="total-price-container">
                            <div>
                                <p>Valor produtos</p>
                                <p>Valor frete</p>
                            </div>
                            <div>
                                <p>R$ 15,00</p>
                                <p>R$ 15,00</p>
                            </div>
                        </div>
                        <p>Subtotal R$ 80.00</p>
                        <Button>Comprar</Button>
                    </div>
                    <div className="container-cep">
                        <SearchCep/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart