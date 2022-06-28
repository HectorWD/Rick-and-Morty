import Head from 'next/head'
import { useState } from 'react';

import Card from '../components/cards/Card';
import Nav from '../components/nav/Nav';

export default function Home({ info, results }) {
  const [characters, setCharacters] = useState(results);
  const [informacion, setInformacion] = useState(info);
  return (
    <div>
      <Head>
        <title>Rick and Morty App</title>
        <meta name="Rick and Morty" content="Personajes de Rick y Morty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav informacion={informacion} setCharacters={setCharacters} setInformacion={setInformacion} />
      <main className='flex flex-col items-center justify-center sm:flex-row bg-sky-50 sm:flex-wrap sm:pt-4'>
      {characters.map((character) => (
          <Card characterInfo={character} key={character.id} />
      ))}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json();

    return {
      props: { info: data.info, results: data.results }
    }
  } catch (error) {
    console.log(error)
  }
}