import "./cardReview.scss"
import Star from "../star/star";

const CardReview = ({name, starts, date, description}) => {
    return (
        <div>
            <h6>{name}</h6>
            <Star stars={starts}/>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}

export default CardReview