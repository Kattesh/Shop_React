import React from 'react';
import GoodItems from "./GoodItems";

const GoodsList = (props) => {
    const {goods = []} = props
   if (!goods.length){
     return  <h3> Nothing here </h3>
   }
   return <div className="goods">
       {goods.map(item=>(
           <GoodItems key={item.id}{...item}/>
       ))}
   </div>
};

export default GoodsList;
