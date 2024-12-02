import React, { useState } from "react";
import "./header.scss";

function Header() {
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => {
        setFontSize((prevSize) => Math.min(prevSize + 1, 18));
        document.documentElement.style.setProperty("--base-font-size", `${fontSize + 1}px`);
    };

    const decreaseFontSize = () => {
        setFontSize((prevSize) => Math.max(prevSize - 1, 14));
        document.documentElement.style.setProperty("--base-font-size", `${fontSize - 1}px`);
    };

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
                    <div className="acessibility-btn" onClick={increaseFontSize}>
                        <span>A+</span>
                    </div>
                    <div className="acessibility-btn" onClick={decreaseFontSize}>
                        <span>a-</span>
                    </div>
                </div>
                <div className="header__user-cart">
                    <a href="/carrinho"><img src="https://i.ibb.co/k2YH5Xy/Vector-1.png" alt="Cart" /></a>
                </div>
                <div className="header__user-profile">
                    <a href="/login"></a>
                </div>
            </div>
        </header>
    );
}

export default Header;
