import React from 'react'

const BtnNavigation = ({ text,url,setCharacters,setInformacion,disabled }) => {
    const handleChangePage = async() => {
        try {
            const response = await fetch(`${url}`);
            const { info, results } = await response.json();
            setCharacters(results);
            setInformacion(info)
          } catch (error) {
            console.log(error)
          }
    }
    if (text === 'Previous') {
        return (
            <button 
            className='px-4 py-3 mt-1 font-semibold text-white rounded-lg bg-slate-600 sm:py-5 sm:px-7 sm:text-xl'
            onClick={handleChangePage}
            disabled={disabled}
            >{text}</button>
        )
    }
    else if (text === 'Next') {
        return (
            <button 
            className='px-4 py-3 mt-1 font-semibold rounded-lg bg-slate-400 sm:py-5 sm:px-7 sm:text-xl'
            onClick={handleChangePage}
            disabled={disabled}
            >{text}</button>
        )
    }

}

export default BtnNavigation