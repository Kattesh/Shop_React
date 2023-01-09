import React, {useContext} from 'react';
import GoodItem from "./GoodItem";
import {ShopContext} from "../context";

const GoodsList = () => {

    const {goods = []} = useContext(ShopContext);

    if (!goods.length) {
        return <h3> Oops! Nothing here... </h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodItem key={item.id}{...item} />
        ))}
    </div>
};

export default GoodsList;
