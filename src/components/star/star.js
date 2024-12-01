import "./star.scss"

const Star = ({ stars }) => {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`star ${stars >= star ? "active" : ""}`}>
          ★
        </span>
            ))}
        </div>
    );
};

export default Star