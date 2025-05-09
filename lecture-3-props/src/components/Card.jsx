import Button from "./button";

const Card = (props) => { 
    console.log(props);
    
    return (
        <div className="col-4">
            <div className="card my-5" style={{ width: '18rem' }}>
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