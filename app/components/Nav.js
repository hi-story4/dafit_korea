
'use client'
import React, {useState, useEffect, useRef} from 'react'
export default function Nav() {
    const navRef = useRef(null);
    const [section, setsection] = useState(0);
    useEffect(() => {
      window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);
    let target = null;
    const scrollEvent = () => {
        clearTimeout(target);
        target = setTimeout(() => {
            const sections = navRef.current.parentNode
            const sectionNode = sections.childNodes
            const first = sectionNode[1].getBoundingClientRect();
            const second = sectionNode[2].getBoundingClientRect();
            const third = sectionNode[3].getBoundingClientRect();
            const fourth = sectionNode[4].getBoundingClientRect();
            if(fourth.y < 0) {
                setsection(5);
            } else if(third.y < 0) {
                setsection(4);
            } else if(second.y < 0) {
                setsection(3);
            } else if(first.y < 0) {
                setsection(2);
            } else if(sections.getBoundingClientRect().y < 0) {
                setsection(1);
            }
            else {
                setsection(0);
            }
        }, 100);
    }
    useEffect (()=>{
        if(!navRef.current) return;
        console.log(section)
        const sections = navRef.current.parentNode
        const sectionNode = sections.childNodes
        console.log(sectionNode[1].childNodes[0].childNodes[1].childNodes[0].childNodes[2].lastChild)
        console.log(sectionNode[2].childNodes[0].childNodes[0].childNodes[0].childNodes[3].lastChild)
        console.log(sectionNode[3].childNodes[0].childNodes[1].childNodes[0].childNodes[0].lastChild)
        console.log(sectionNode[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].lastChild)
        sectionNode[1].childNodes[0].childNodes[0].classList.toggle('currentImg', section === 2);
        sectionNode[2].childNodes[0].childNodes[1].classList.toggle('currentImg', section === 3);
        sectionNode[3].childNodes[0].childNodes[0].classList.toggle('currentImg', section === 4);
        sectionNode[4].childNodes[0].childNodes[1].classList.toggle('currentImg', section === 5);
        sectionNode[1].childNodes[0].childNodes[1].childNodes[0].childNodes[2].lastChild.classList.toggle('currentAccent', section === 2);
        sectionNode[2].childNodes[0].childNodes[0].childNodes[0].childNodes[3].lastChild.classList.toggle('currentAccent', section === 3);
        sectionNode[3].childNodes[0].childNodes[1].childNodes[0].childNodes[0].lastChild.classList.toggle('currentAccent', section === 4);
        sectionNode[4].childNodes[0].childNodes[0].childNodes[0].childNodes[0].lastChild.classList.toggle('currentAccent', section === 5);

    }, [section])
    return (
        <nav ref={navRef} className={section < 1 ? 'disable' : 'active'}>
            <div className='navWrap'>
            <h4>다핏</h4>
            <ul>
                <li onClick={()=>{
                    const sections = navRef.current.parentNode
                    const sectionNode = sections.childNodes
                    const first = sectionNode[1].getBoundingClientRect();
                    const firstTop = window.scrollY + first.top
                    window.scrollTo({
                        top: firstTop + 1,
                    })
                    setsection(2);
                }} className={section === 2 ? 'currentSection' : 'notCurrentSection'}>First</li>
                <li onClick={()=>{
                    const sections = navRef.current.parentNode
                    const sectionNode = sections.childNodes
                    const second = sectionNode[2].getBoundingClientRect();
                    const secondTop = window.scrollY + second.top
                    window.scrollTo({
                        top: secondTop + 1,
                    })
                    setsection(3);
                }} className={section === 3 ? 'currentSection' : 'notCurrentSection'}>Second</li>
                <li onClick={()=>{
                    const sections = navRef.current.parentNode
                    const sectionNode = sections.childNodes
                    const third = sectionNode[3].getBoundingClientRect();
                    const thirdTop = window.scrollY + third.top
                    window.scrollTo({
                        top: thirdTop + 1,
                    })
                    setsection(4);
                }} className={section === 4 ? 'currentSection' : 'notCurrentSection'}>Third</li>
                <li onClick={()=>{
                    const sections = navRef.current.parentNode
                    const sectionNode = sections.childNodes
                    const fourth = sectionNode[4].getBoundingClientRect();
                    const fourthTop = window.scrollY + fourth.top
                    window.scrollTo({
                        top: fourthTop + 1,
                    })
                    setsection(5);
                }} className={section === 5 ? 'currentSection' : 'notCurrentSection'}>Fourth</li>
            </ul>
            <button>앱 다운로드</button>
            </div>
        </nav>
    )
}
