import "./searchCep.scss"
import Button from "../button/button";

function SearchCep() {

    return (
        <div className="search-cep">
            <label className="search-cep__label">Calcular CEP</label>
            <div className="search-cep__container">
                <input className="search-cep__container__input" type="search"/>
                <Button type="primary">Buscar</Button>
            </div>
        </div>
    )
}

export default SearchCep