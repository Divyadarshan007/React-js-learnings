import Button from "./button";

const Card = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card ">
                <div className="card-image">
                    <img src={props.image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <Button color={props.color} />
                </div>
            </div>
        </div>
    )
}

export default Card;