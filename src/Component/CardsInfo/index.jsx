import React, {useState, useContext, useEffect} from 'react';
import {DataContext} from '../../Store'


const CardsInfo = ({name, valor, image}) => {

    const {totalPrice, setTotalPrice, changeValue, cartDetails} = useContext(DataContext);

    useEffect(() => {
        setTotalPrice(currentValue => currentValue + valor)
       

    },[changeValue])

    // setTotalPrice(valor)
    return (
        <div className="cart-body_details">
             <img src={image} alt={name}/>
            <span>
                Name: {name}
            </span>
            <span>
                Name: {valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}
            </span>
        </div>
    )
}


export default CardsInfo