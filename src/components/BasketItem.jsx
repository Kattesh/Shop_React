import React from 'react';

const BasketItem = (props) => {
    const {id, name, price, quantity} = props
    return (
        <li className="collection-item ">{name} = {price} ₿  (x{quantity})
            <span className="secondary-content">
                    <i className="material-icons basket-delete">close</i>
                </span>
        </li>
    );
};

export default BasketItem;
