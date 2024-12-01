import "./categories.scss"
import Search from "../../components/search/search"
import CardContent from "../../components/cardContent/cardcontent"
import RadioGroup from "../../components/radioButton/radioButton";


const produtos = [
    {
        imgProduto: "https://i.ibb.co/dkkMwDK/image-26.png",
        nameProduto: "Truffe Citron",
        descriptionProduto: "Felta com chocolate nobre melo amargo e pasta natural de avela finalizada com chocolate ao leite e farofinha de avelã.",
        priceProduto: "R$ 92,00"
    },
    {
        imgProduto: "https://i.ibb.co/dkkMwDK/image-26.png",
        nameProduto: "Truffe Citron",
        descriptionProduto: "Felta com chocolate nobre melo amargo e pasta natural de avela finalizada com chocolate ao leite e farofinha de avelã.",
        priceProduto: "R$ 92,00"
    },
    {
        imgProduto: "https://i.ibb.co/dkkMwDK/image-26.png",
        nameProduto: "Truffe Citron",
        descriptionProduto: "Felta com chocolate nobre melo amargo e pasta natural de avela finalizada com chocolate ao leite e farofinha de avelã.",
        priceProduto: "R$ 92,00"
    },
    {
        imgProduto: "https://i.ibb.co/dkkMwDK/image-26.png",
        nameProduto: "Truffe Citron",
        descriptionProduto: "Felta com chocolate nobre melo amargo e pasta natural de avela finalizada com chocolate ao leite e farofinha de avelã.",
        priceProduto: "R$ 92,00"
    },
    {
        imgProduto: "https://i.ibb.co/dkkMwDK/image-26.png",
        nameProduto: "Truffe Citron",
        descriptionProduto: "Felta com chocolate nobre melo amargo e pasta natural de avela finalizada com chocolate ao leite e farofinha de avelã.",
        priceProduto: "R$ 92,00"
    }
];


function Categories() {
    const options = [
        {value: "Tortas", label: "Torta"},
        {value: "Chocolateria", label: "Choco"},
        {value: "Bolos", label: "Amendoim"},
    ];
    return (
        <div className="categories">
            <div className="searchContent">
                <Search/>
            </div>
            <div className="filterContent">
                <RadioGroup options={options}/>
            </div>
            <div className="itemContent">
                {produtos.map((produto, index) => (
                    <CardContent
                        key={index}
                        imgProduto={produto.imgProduto}
                        nameProduto={produto.nameProduto}
                        descriptionProduto={produto.descriptionProduto}
                        priceProduto={produto.priceProduto}
                    />
                ))}
            </div>
        </div>
    )
}

export default Categories