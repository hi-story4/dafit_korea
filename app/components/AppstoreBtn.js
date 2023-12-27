'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import appstoreWhite from '../../public/imgs/appstoreWhite.svg'

export default function AppstoreBtn() {
    const [popup, setPopup] =  useState(false);
    
    return (
        <>
            <button className='brandButton'  onClick={()=>{setPopup(true)}}>
              <Image src={appstoreWhite} alt='Appstore logo'/>
              App Store
            </button>

            {
                popup
                ? 
                <div className='popup'>
                    현재는 앱이 출시되지 않았습니다. 앱 출시 후 많은 관심 부탁드립니다.
                    <span className='closeBtn' onClick={()=>{setPopup(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512" fill='white'>
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </span>
                </div>
                : null
            }
        </>
        
    )
  }
