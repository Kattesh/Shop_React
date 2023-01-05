import React from 'react';

const GoodItems = (props) => {
    const {id, name, description, price, full_background, image, icon} = props
    return (
        <div>
                    <div className="card" id={id}>
                        <div className="card-image">
                            <img src={icon} alt={name}/>

                        </div>
                        <div className="card-content">
                            <span className="card-title">{name}</span>
                            <p>{description}</p>
                        </div>
                        <div className="card-action">
                            <button className='btn'>Buy</button>
                            <span className='right' style={{fontSize:'1.8rem'}}>{price}₿  </span>
                        </div>
                    </div>
        </div>
    );
};

export default GoodItems;
