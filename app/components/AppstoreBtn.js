'use client'

import React, { useContext } from 'react';
import Image from 'next/image'
import appstoreWhite from '../../public/imgs/appstoreWhite.svg'
import { GlobalContext } from "./Popup";
export default function AppstoreBtn() {
    const { setPopup } = useContext(GlobalContext);
    return (
        <>
            <button className='brandButton'  onClick={()=>{setPopup(true)}}>
                <Image src={appstoreWhite} alt='Appstore logo'/>
                App Store
            </button>
        </>
        
    )
}
