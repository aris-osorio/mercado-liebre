import React from 'react'

export default function Title(props){
    return(
        <div className="container d-flex justify-content-around">
            <h5>Mercado Liebre</h5>
            {props.children}
        </div>
    );
}