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
                <div className="header__user-obj">
                    <a className="" href="/carrinho"><img src="https://i.ibb.co/k2YH5Xy/Vector-1.png" /></a>
                </div>
            </div>
        </header>
    )
}

export default Header