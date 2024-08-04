import RatingStar from "/icons/airbnb/star.svg";
export const Card = ({ image, rating, review, country, description, price, key}) => {

    return (
        <div className="card" key={ key }>
            <img src={ image } className="card--image" />
            <div className="card--stats">
                <img src={RatingStar} alt="Rating Start" className="card--star" />
                <span>{ rating }</span>
                <span>({ review })</span>
                <span>{ country }</span>
            </div>
            <p>{ description }</p>
            <p><span className="bold">From { price }</span> / person</p>
        </div>
    );
}