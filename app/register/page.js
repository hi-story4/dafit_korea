import Link from "next/link";
import Pricebox from "../components/PriceBox";
import Image from "next/image";

export default function register() {
  const textList1 = [
    "다이어트 관리",
    "개인 맞춤형 운동 루틴",
    "운동 자세 교정",
  ];
  const textList2 = ["식단플랜", "개인 맞춤 식단 추천", "식단 피드백"];
  const textList3 = [
    "다이어트 관리",
    "개인 맞춤형 운동 루틴",
    "운동 자세 교정",
    "개인 맞춤형 식단 추천",
    "식단 피드백",
  ];

  return (
    <div className="serviceSection">
      <header>
        <div className="hederContainer">
          <Link href="/">
            <div className="logoContainer">
              <Image
                src="/imgs/logo-noborder.svg"
                alt="logo"
                width={50}
                height={50}
              />
              <h4>다핏</h4>
            </div>
          </Link>
        </div>
      </header>
      <section className="heroSection">
        <div
          className="heroSectionWrap"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div></div>
          <div className="priceBoxContainer">
            <Pricebox
              title="운동 플랜"
              subTitle="개인 맞춤 운동 관리"
              price="99,000₩"
              link="https://tally.so/r/mOGgG7"
              textList={textList1}
            />
            <Pricebox
              title="식단 플랜"
              subTitle="개인 맞춤 식단 관리"
              price="99,000₩"
              link="https://tally.so/r/nGlglp"
              textList={textList2}
            />
            <Pricebox
              title="종합 플랜"
              subTitle="개인 맞춤 운동 및 식단 관리"
              price="179,000₩"
              link="https://tally.so/r/3lreG6"
              textList={textList3}
            />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
