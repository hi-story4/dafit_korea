'use client'
import React, { useContext } from 'react';
import { GlobalContext } from "./Popup";
import Image from 'next/image'
import playstore from '../../public/imgs/playstore.svg'
export default function PlayStoreBtn() {
    const { setPopup } = useContext(GlobalContext);
    return (
        <>
            <button className='brandButton'  onClick={()=>{setPopup(true)}}>
                <Image src={playstore} alt='Playstore logo'/>
                Google Play
            </button>
        </>
        
    )
}
