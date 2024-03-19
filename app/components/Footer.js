import Image from "next/image";

export default function Footer() {
  return (
    <div style={{ bottom: "0" }}>
      <footer>
        <div className="footerWrap">
          <div className="footerContents">
            <div className="logoContainer" style={{ margin: "10px" }}>
              <Image
                src="/imgs/logo-white.svg"
                alt="로고 화이트 배경제거"
                width={200}
                height={200}
              />
            </div>
            <div className="info">
              <div className="infoTitle">
                <p>
                  <strong>
                    <span>구</span>
                    <span>성</span>
                    <span>원</span>
                  </strong>
                </p>
                <p>
                  <strong>
                    <span>전</span>
                    <span>화</span>
                  </strong>
                </p>
                <p>
                  <strong>
                    <span>주</span>
                    <span>소</span>
                  </strong>
                </p>
                <p>
                  <strong>
                    <span>고</span>
                    <span>객</span>
                    <span>문</span>
                    <span>의</span>
                  </strong>
                </p>
              </div>
              <div className="infoDescription">
                <p>박남영, 신준혁, 이준서</p>
                <p>010-8933-5584</p>
                <p>서울특별시 성북구 안암로 145</p>
                <p>lee6@korea.ac.kr</p>
              </div>
            </div>
          </div>
          <hr />
          <p>© 2023. 다핏. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
