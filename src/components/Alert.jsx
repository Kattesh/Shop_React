import React, {useContext, useEffect} from 'react';
import {ShopContext} from "../context";

const Alert = () => {
    const {alertName: name = '', closeAlert = Function.prototype,} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast teal darken-2 white-text'>{name} added to basket</div>
        </div>
    );
};

export default Alert;
