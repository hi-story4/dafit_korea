'use client'
import React, {useState, useEffect} from 'react'
export default function Grid() {
    const [grid, setGrid] = useState(false);
    const [tablet, setTablet] = useState(false);
    const [phone, setPhone] = useState(false);
    
    useEffect(() => {
      window.addEventListener('resize', resizeEvent);
        return () => window.removeEventListener('resize', resizeEvent);
    }, []);
    let timer = null;
    const resizeEvent = (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log('resize event!');
        if (window.innerWidth <= 1080) {
          setTablet(true);
        } else {
          setTablet(false);
        }
        if (window.innerWidth <= 767) {
          setPhone(true);
        } else {
          setPhone(false);
        }
      }, 1000);
    }
    return (
      <div>
        {
            grid ?
            <div className='grid'>
            <div className='grid-wrap'>
              {
                phone
                ? null
                :
                <>
                  <div className='grid-col'></div>
                  <div className='grid-col'></div>
                </>
              }
              {
                tablet
                ? null
                :
                <>
                  <div className='grid-col'></div>
                  <div className='grid-col'></div>
                  <div className='grid-col'></div>
                  <div className='grid-col'></div>
                  <div className='grid-col'></div>
                  <div className='grid-col'></div>
                </>
              }
              <div className='grid-col'></div>
              <div className='grid-col'></div>
              <div className='grid-col'></div>
              <div className='grid-col'></div>
            </div>
          </div>
          :
          null
        }
        <button onClick={()=>{
            setGrid(!grid);
        }}>
            {
                grid ?
                'close' :
                'open'
            }
        </button>
      </div>
    )
  }
  