import React, { useContext } from 'react';
import { Context } from '../context'

const Button = () => {
  const {state, dispatch} = useContext(Context); //depends on which provider it is wrapped in App.js we get different values
  console.log("state", state);
  return (
      <div className='mt-8 p-4'>
        <p className='mb-4'>Data: {state.user} </p>
        <button className='p-4 bg-stone-400 text-white' onClick={ () => dispatch({ type: "LOGIN", payload: "its login"})}>Click me</button>
    </div>
  )
}

export default Button