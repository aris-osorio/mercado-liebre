import React from 'react'

export default function Products(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={props.imgUrl} alt="product" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{"$" + props.price.toString()}</p>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.category}</p>
                <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    );
}
