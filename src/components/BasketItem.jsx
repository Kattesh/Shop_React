import React from 'react';

const BasketItem = (props) => {
    const {id, name, price, quantity, removeFromBasket = Function.prototype} = props
    return (
        <li className="collection-item ">{name} = {price * quantity} ₿ ({quantity} items)
            <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i className="material-icons basket-delete">close</i>
                </span>
        </li>
    );
};

export default BasketItem;
