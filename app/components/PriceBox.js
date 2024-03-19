import "../style.css";
import CheckIcon from "../../public/imgs/check.svg";
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
              <CheckIcon style={{ width: "auto", paddingTop: "7px" }} />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="surveyButton">
        <Link href={props.link}>
          <button>신청하기</button>
        </Link>
      </div>
    </div>
  );
}
