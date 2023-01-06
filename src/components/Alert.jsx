import React, {useEffect} from 'react';

const Alert = (props) => {
    const { name = '', closeAlert = Function.prototype } = props;

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
