import "../style.css";
import checkIcon from "../../public/imgs/check.svg";
import Image from "next/image";
import Link from "next/link";
export default function Pricebox(props) {
  return (
    <div className="priceBox">
      <div className="boxPriceTitle">
        <h4>{props.title}</h4>
        <p>{props.subTitle}</p>
        <h4>{props.price}</h4>
      </div>
      <div className="boxTextList">
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "15px",
          }}
        >
          {props.textList.map((text, index) => (
            <li key={index}>
              <Image
                src={checkIcon}
                alt="check"
                style={{ width: "auto", paddingTop: "7px" }}
              />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="surveyButton">
        <Link href="https://tally.so/r/3lreG6">
          <button>신청하기</button>
        </Link>
      </div>
    </div>
  );
}
