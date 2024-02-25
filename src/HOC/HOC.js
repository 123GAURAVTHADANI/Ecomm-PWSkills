import React from 'react';
import { FaBeer, FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';

const HOC=(WrapperComponent)=>{
     //console.log(cartNum);
    return function InnerWrapper(){
        const cartNum = useSelector((state)=> state.handleAddToCart.cartNumber);
        return (
            <React.Fragment>
            <header>
               <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlshkvNwa-H_v2yHTbhx-RSm4d95xJe-Pd2QFfBGpujQ&s'/>
               <input placeholder='Search Electronics/Utilities'/>
               <div className='cart'>
               <FaCartPlus color='white' size={25}/>
               <span className='cartNumber'>
               {cartNum}
               </span>
               </div>
            </header>
            <WrapperComponent/>
            </React.Fragment>
        )
    }
}
export default HOC;