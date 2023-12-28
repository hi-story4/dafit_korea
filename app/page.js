import Image from 'next/image'
import img1 from '../public/imgs/1.png'
import img2 from '../public/imgs/2.png'
import img3 from '../public/imgs/3.png'
import img4 from '../public/imgs/4.png'
import Nav from './components/Nav'
import DownloadButton from './components/DownloadButton'
import AppstoreBtn from './components/AppstoreBtn'
import PlayStoreBtn from './components/PlayStoreBtn'

export default function Home() {
  return (
    <div>
      <header>
        <div className='hederContainer'>
          <h4>다핏</h4>
          <DownloadButton/>
        </div>
      </header>
      <section className='heroSection'>
        <div className='heroSectionWrap'>
          <p>다이어트 성공할 수밖에 없는 이유,</p>
          <h2>24시간 온라인 PT 서비스</h2>
          <h1>다핏</h1>
          <div className='buttons'>
            <PlayStoreBtn/>
            <AppstoreBtn/>
          </div>
        </div>
      </section>
      <div className='sections'>
        <Nav/>
        <section className='firstSection'>
          <div className='sectionWrap'>
            <div className='imgBox notCurrentImg'>
              <Image src={img1} alt='핸드폰과 동전을 받는 손 이미지'  />
            </div>
            <div className='sectionText' >
              <h2>오프라인 PT에 비해 <br/><span className='line'>저렴한 가격<div className='notcurrentAccent'></div></span></h2>
              <p>다이어트 성공할 수밖에 없는 이유,
              <br/>다핏은 <strong>매일 식단 관리부터 운동 코칭까지
              <br/>해주는 트레이너를 매칭해줘요.</strong>
              <br/>오프라인 PT보다 무려
              <br/><strong>평균 40% 이상 저렴해요!</strong></p>
            </div>
          </div>
        </section>
        <section className='secondSection'>
          <div className='sectionWrap'>
            <div className='sectionText' >
              <h2>나와 맞는 트레이너를<br/>찾을 때까지, <span className='line'>무제한 변경<div className='notcurrentAccent'></div></span></h2>
              <p>기존 PT에서는
              <br/>트레이너 선생님을 변경하기 어려웠어요.
              <br/>하지만, 다핏은 <strong>트레이너 선생님을
              <br/>원할 때면 언제든 변경</strong>할 수 있어요.
              </p>
            </div>
            <div className='imgBox notCurrentImg'>
              <Image src={img2} alt='핸드폰과 동전을 받는 손 이미지'  />
            </div>
          </div>
        </section>
        <section className='thirdSection'>
        <div className='sectionWrap'>
            <div className='imgBox notCurrentImg'>
              <Image src={img3} alt='핸드폰과 동전을 받는 손 이미지'  />
            </div>
            
            <div className='sectionText' >
              <h2><span className='line'>헬스장에 다니지 않아도,<div className='notcurrentAccent'></div></span><br/>맞춤형 다이어트</h2>
              <p>꼭 헬스장에 가서
              <br/>PT를 받으라는 법은 없잖아요!
              <br/>다핏은 헬스장뿐만 아니라 
              <br/>홈트레이닝, 야외 스포츠, 실내 스포츠 등
              <br/><strong>모든 운동을 포괄한
              <br/>맞춤형 다이어트 코칭</strong>을 제공해요.</p>
            </div>
          </div>
        </section>
        <section className='fourthSection'>
          <div className='sectionWrap'>
            <div className='sectionText' >
              <h2><span className='line'>운동할 시간이 없어도,<div className='notcurrentAccent'></div></span><br/>맞춤형 다이어트</h2>
              <p>다핏과 함께라면
              <br/>다이어트의 시간과 장소에 대한 걱정은
              <br/>넣어두세요.
              <br/>이용자님의 <strong>루틴과 생활 패턴에 맞춘 
              <br/>최상의 다이어트 식단과 운동을
              <br/>알려드리고 코칭</strong>해드릴게요.</p>
            </div>
            <div className='imgBox notCurrentImg'>
              <Image src={img4} alt='핸드폰과 동전을 받는 손 이미지'  />
            </div>
            
          </div>
        </section>
      </div>
      <footer>
        <div className='footerWrap'>
          <div className='footerContents'>
            <h3>다핏</h3>
            <div className='info'> 
              <div className='infoTitle'>
                <p><strong><span>구</span><span>성</span><span>원</span></strong></p>
                <p><strong><span>전</span><span>화</span></strong></p>
                <p><strong><span>주</span><span>소</span></strong></p>
                <p><strong><span>고</span><span>객</span><span>문</span><span>의</span></strong></p>  
              </div>
              <div className='infoDescription'>
                <p>박남영, 신준혁, 이준서</p>
                <p>010-8933-5584</p>
                <p>서울특별시 성북구 안암로 145</p>
                <p>lee6@korea.ac.kr</p>
              </div>
            </div>
          </div>
          <hr/>
          <p>© 2023. 다핏. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
