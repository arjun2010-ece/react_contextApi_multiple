import React, { useContext } from 'react';
import { Context } from '../context'

const Navbar = () => {
  const {state, dispatch} = useContext(Context); //depends on which provider it is wrapped in App.js we get different values

  return (
    <div className='p-5 text-center bg-stone-400 text-white border-solid border-2 border-sky-500'>
      <p onClick={() => dispatch({type: "LOGOUT"})}>Navbar</p>
      <p className='mt-4'>Data: {state.user} </p>
    </div>
  )
}

export default Navbar;