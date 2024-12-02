import "./header.scss"

function Header() {
    
    return (
        <header className="header">
            <div className="header__logo">
                <h2>Le Patisserie</h2>
            </div>
            <div>
                <ul className="header__menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/categorias">Categorias</a></li>
                </ul>
            </div>
            <div className="header__user">
                <div className="header__user-acessibility">
                    <div className="acessibility-btn">
                        <span>A+</span>
                    </div>
                    <div className="acessibility-btn">
                        <span>a-</span>
                    </div>
                </div>
                <div className="header__user-cart">
                    <a href="/carrinho"><img src="https://i.ibb.co/k2YH5Xy/Vector-1.png" /></a>
                </div>
                <div className="header__user-profile">
                    <a href="/login"></a>
                </div>
            </div>
        </header>
    )
}

export default Header