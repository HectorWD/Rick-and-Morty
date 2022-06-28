import React, { useEffect, useState } from 'react'
import GeneralInfo from './structure/GeneralInfo'
import ImageInfo from './structure/ImageInfo'
import Link from 'next/link'



const MoreInfoCard = ({ id }) => {

    const [dataChar, setDataChar] = useState(null)
    useEffect(() => {
        try {
            if (id != undefined) {
                const fetchData = async () => {
                    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                    const data = await response.json();
                    setDataChar(data)
                    return data;
                }
                fetchData(id);
            }
        } catch (error) {
            console.log(error)
        }
    }, [id])
    return (
        <section className='relative'>
           
            {
                dataChar ?
                <> 
                <Link href='/'>
                <button className='absolute px-4 py-2 mx-3 mt-2 font-semibold text-white bg-purple-400 rounded-lg right-10 left-10 bottom-1'>
                    Home
                </button>
                </Link>
                <section className='flex flex-col items-center'>
                    <ImageInfo url={dataChar.image} />
                    <GeneralInfo
                        name={dataChar.name}
                        created={dataChar.created}
                        location={dataChar.location.name}
                        status={dataChar.status}
                        specie={dataChar.species}
                        gender={dataChar.gender}
                    />
                    </section>
                </>

                    : <>
                    <Link href='/'>
                <button className='px-4 py-2 mx-3 mt-2 font-semibold text-white bg-purple-400 rounded-lg'>
                    Home
                </button>
                </Link>
                    <p>Loading..</p>
                    </>
            }
        </section>

    )
}

export default MoreInfoCard