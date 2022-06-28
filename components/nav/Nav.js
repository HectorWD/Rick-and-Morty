import React from 'react'
import BtnNavigation from './structure/BtnNavigation'
import Title from './structure/Title'

const Nav = ({informacion=null,setCharacters,setInformacion}) => {
  
  return (
    <div className='py-4 text-center border-b-4 border-green-500 bg-slate-800'>
        <Title/>
        {informacion?<nav className='flex justify-around'>
            <BtnNavigation 
            text='Previous' 
            url={informacion.prev} 
            setCharacters={setCharacters} 
            setInformacion={setInformacion} 
            disabled={informacion.prev?false:true} />
            <BtnNavigation 
            text='Next' 
            url={informacion.next} 
            setCharacters={setCharacters} 
            setInformacion={setInformacion} 
            disabled={informacion.next?false:true}/>
        </nav>:null}
    </div>
  )
}

export default Nav