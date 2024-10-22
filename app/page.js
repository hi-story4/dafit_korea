import Image from "next/image";
//svg는 import 하려고 하면 next_config
//@svgr/webpack -> 모든 svg import시 컴포넌트화하여 import 해서 일반 check svg를 kakaoFeead 처럼 import하면 오류 발생.
//kakao feed는 컴포넌트처럼 쓰고 있지만 다른 애니메이션이 없는 svg는 Image 태그의 src로 사용하고 있기 때문
import KakaoFeed from "../public/imgs/kakao-feed.svg";
import img1 from "../public/imgs/1.png";
import img2 from "../public/imgs/2.png";
import img3 from "../public/imgs/3.png";
import img4 from "../public/imgs/4.png";
import kakao1 from "../public/imgs/kakao1.png";
import kakao2 from "../public/imgs/kakao2.png";
import kakao3 from "../public/imgs/kakao3.png";
import kakao4 from "../public/imgs/kakao4.png";
import kakao5 from "../public/imgs/kakao5.png";

import Nav from "./components/Nav";
import ServiceButton from "./components/ServiceButton";
import KakaoButton from "./components/KakaoButton";

export default function Home() {
  return (
    <div>
      {/* <Popup> */}
      <header>
        <div className="hederContainer">
          <div className="logoContainer">
            <Image
              src="/imgs/logo-black.svg"
              alt="로고 블랙 배경제거 2:1"
              width={120} // 기본 크기
              height={50}
              layout="rendered"
            />
          </div>

          <ServiceButton />
          {/* <DownloadButton /> */}
        </div>
      </header>
      <section className="heroSection">
        <div className="heroSectionWrap">
          <p>다이어트 성공할 수밖에 없는 이유,</p>
          <h2>24시간 온라인 PT 서비스</h2>
          <div className="bigLogoContainer">
            <Image
              src="/imgs/logo-black-big.svg"
              alt="로고 블랙 흑백 배경제거"
              width={300}
              height={300}
            />
          </div>

          <div className="buttons">
            <KakaoButton class="kakaoButton" />
            <ServiceButton class="brandButton" />
          </div>
        </div>
      </section>

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "#333", textAlign: "center", margin: "20px 0" }}>
          왜 다핏인가?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          {/* Next.js의 Image 컴포넌트 사용 예시 */}
          <div className="kakaoFeedContainer">
            <KakaoFeed style={{ width: "100%", height: "100%" }} />
          </div>
        </div>

        <div
          style={{
            margin: "20px 5%",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ color: "#333", textAlign: "center", margin: "20px 0" }}>
            온라인 PT 다핏은 아래의 문제점을 모두 해결했습니다
          </h2>
          <div
            style={{
              color: "#666",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            <p>"혼자 다이어트 하기 힘들어요"</p>
            <br />
            <p>"PT가 너무 비싸요"</p>
            <br />
            <p>"시간이 없어요"</p>
          </div>
        </div>
      </div>

      <div className="sections">
        <Nav />
        <section className="firstSection">
          <div className="sectionWrap">
            <div className="imgBox notCurrentImg">
              <Image src={img1} alt="가격 비교 이미지" />
            </div>
            <div className="sectionText">
              <h2>
                오프라인 PT에 비해 <br />
                <span className="line">
                  저렴한 가격<div className="notcurrentAccent"></div>
                </span>
              </h2>
              <p>
                다핏은{" "}
                <strong>
                  매일 식단 관리부터 운동 코칭까지
                  <br />
                  해주는 트레이너를 매칭해줘요.
                </strong>
                <br />
                오프라인 PT보다 무려
                <br />
                <strong>평균 90% 이상 저렴해요!</strong>
              </p>
            </div>
          </div>
        </section>
        <section className="secondSection">
          <div className="sectionWrap">
            <div className="sectionText">
              <h2>
                <span className="line">
                  헬스장이 아니더라도,
                  <div className="notcurrentAccent"></div>
                </span>
                <br />
                다이어트 가능
              </h2>
              <p>
                꼭 헬스장에 가서
                <br />
                PT를 받으라는 법은 없잖아요!
                <br />
                다핏은 헬스장뿐만 아니라
                <br />
                <strong>
                  언제 어디서나
                  <br />
                  온라인 코칭
                </strong>
                을 받을 수 있어요
              </p>
            </div>
            <div className="imgBox notCurrentImg">
              <Image src={img2} alt="홈트레이닝 상징 이미지" />
            </div>
          </div>
        </section>
        <section className="thirdSection">
          <div className="sectionWrap">
            <div className="imgBox notCurrentImg">
              <Image src={img3} alt="일정 이미지" />
            </div>
            <div className="sectionText">
              <h2>
                <span className="line">
                  매번 변하는 일상
                  <div className="notcurrentAccent"></div>
                </span>
                에
                <br />
                맞춤형 다이어트
              </h2>
              <p>
                다핏과 함께라면
                <br />
                다이어트의 시간과 장소에 대한 걱정은
                <br />
                넣어두세요.
                <br />
                이용자님의{" "}
                <strong>
                  루틴과 생활 패턴에 맞춘
                  <br />
                  최상의 다이어트 식단과 운동을
                  <br />
                  알려드리고 코칭
                </strong>
                해드릴게요.
              </p>
            </div>
          </div>
        </section>
        <section className="fourthSection">
          <div className="sectionWrap">
            <div className="sectionText">
              <h2>
                나와 맞는 트레이너를
                <br />
                찾을 때까지,
                <span className="line" style={{ marginLeft: "5px" }}>
                  무제한 변경<div className="notcurrentAccent"></div>
                </span>
              </h2>
              <p>
                기존 PT에서는
                <br />
                트레이너 선생님을 변경하기 어려웠어요.
                <br />
                하지만, 다핏은{" "}
                <strong>
                  트레이너 선생님을
                  <br />
                  원할 때면 언제든 변경
                </strong>
                할 수 있어요.
              </p>
            </div>
            <div className="imgBox notCurrentImg">
              <Image src={img4} alt="핸드폰에 트레이너 교체 이미지" />
            </div>
          </div>
        </section>
        {/* 5-1 */}

        <section className="fifthSection">
          <div className="fifthSectionWrap">
            <div className="kakaoImgBox ">
              <Image
                src={kakao1}
                alt="kakao1"
                height={800}
                layout="responsive"
              />
            </div>
            <div className="sectionText">
              <h2> 개인 맞춤형 운동 루틴 </h2>

              <p>
                {" "}
                사전 설문을 통해 각자에게 맞는 <br />
                운동 종류, 횟수, 휴식시간, 세트까지 <br />
                <strong> 모든 운동 플랜을 세워드립니다. </strong>{" "}
              </p>
            </div>
          </div>
        </section>
        {/* 5-2 reverse */}
        <section className="fifthSection-reverse">
          <div className="fifthSectionWrap-reverse">
            <div className="sectionText">
              <h2>
                {" "}
                운동 자세 피드백 <br />
              </h2>

              <p>
                {" "}
                운동하는 영상을 보내주시면 <br />
                트레이너님 <strong> 맞춤형 피드백을 제공합니다. </strong> <br />
                또한 운동 수행 여부도 확인합니다.
              </p>
            </div>
            <div className="kakaoImgBox ">
              <Image
                src={kakao2}
                alt="kakao2"
                height={800}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        {/* 5-3 */}
        <section className="fifthSection">
          <div className="fifthSectionWrap">
            <div className="kakaoImgBox ">
              <Image
                src={kakao3}
                alt="kakao3"
                height={800}
                layout="responsive"
              />
            </div>
            <div className="sectionText">
              <h2> 영상을 통한 코칭 </h2>

              <p>
                {" "}
                올바른 운동 자세를 트레이너가
                <br /> <strong> 직접 영상을 촬영하여 </strong>
                코칭해드립니다.{" "}
              </p>
            </div>
          </div>
        </section>
        {/* 5-4 reverse */}
        <section className="fifthSection-reverse">
          <div className="fifthSectionWrap-reverse">
            <div className="sectionText">
              <h2> 개인 맞춤형 식단 플랜 </h2>

              <p>
                {" "}
                나와 맞는
                <strong> 식단 플랜을 세워드립니다. </strong> <br />
                맞춤형 식단 플랜이 부담스럽다면 <br />
                제공되지 않습니다.{" "}
              </p>
            </div>
            <div className="kakaoImgBox ">
              <Image src={kakao4} alt="kakao4" layout="responsive" />
            </div>
          </div>
        </section>
        {/* 5-5 */}
        <section className="fifthSection">
          <div className="fifthSectionWrap">
            <div className="kakaoImgBox ">
              <Image src={kakao5} alt="kakao5" layout="responsive" />
            </div>
            <div className="sectionText">
              <h2> 소비자 식단 피드백 </h2>

              <p>
                {" "}
                어쩔 수 없는 회식, 약속 등으로 <br />
                식단을 못지켜도 괜찮아요!
                <br />
                전문가가 균형있는 식단으로 피드백 해드립니다.
                {/* 전문가에게 내 식단을 <br />
                <strong> 피드백 받고 </strong> <br />
                의지를 다 잡을 수 있습니다.{" "} */}
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* </Popup> */}
    </div>
  );
}
