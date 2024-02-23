import Link from "next/link";

export default function ServiceButton(props) {
  return (
    // <Link href="/register">
    //   <button className={props.class}>서비스 신청</button>
    // </Link>

    //구글폼 링크

    <Link href="https://forms.gle/Fhy4tYt52vsb21St8">
      <button className={props.class}>신청하기</button>
    </Link>
  );
}
