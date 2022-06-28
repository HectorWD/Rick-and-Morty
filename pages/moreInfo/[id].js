import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import MoreInfoCard from '../../components/moreInfoCards/MoreInfoCard';
import Nav from '../../components/nav/Nav';
const id = () => {
    const router = useRouter();
    const { id } = router.query;

   

    return (
        <div>
            <Nav />
            <MoreInfoCard id={id} />
        </div>

    )
}

export default id