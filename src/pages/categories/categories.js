import "./categories.scss"
import Search from "../../components/search/search"
import CardContent from "../../components/cardContent/cardcontent"


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
    
    return (
        <div className="categories">
            <div className="searchContent">
                <Search/>
            </div>
            <div className="filterContent">
                <p>Filtro</p>
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