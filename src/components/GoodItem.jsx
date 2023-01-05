import React from 'react';

const GoodItem = (props) => {
    const {id, name, description, price, full_background, image, icon, addToBasket = Function.prototype} = props
    return (
        <div>
            <div className="card" >
                <div className="card-image">
                    <img src={icon} alt={name}/>

                </div>
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <button className='btn' onClick={() => addToBasket({id, name, price})}>Buy</button>
                    <span className='right' style={{fontSize: '1.8rem'}}>{price}₿  </span>
                </div>
            </div>
        </div>
    );
};

export default GoodItem;
