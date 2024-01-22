import Link from "next/link";

export default function KakaoButton(props) {
  return (
    <Link href="https://open.kakao.com/me/dietfitness">
      <button className={props.class}>문의하기</button>
    </Link>
  );
}
