import React, { useContext } from 'react';
import { Context } from '../context';

const Hero = () => {
const {state, dispatch} = useContext(Context); //depends on which provider it is wrapped in App.js we get different values
console.log("Hero state++>", state);
  return (
    <div className='border-solid border-2 border-sky-500'>
        <p>Hero</p>
        <p className='mb-4'>Data: {state.visibilty} </p>
        <button className='p-4 bg-stone-400 text-white' onClick={ () => dispatch({ type: "HIDE", payload: "its hiding thing..."})}>show me</button>
    </div>
  )
}

export default Hero