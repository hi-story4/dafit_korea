import Link from "next/link";

export default function ServiceButton(props) {
  return (
    <Link href="/register">
      <button className={props.class}>서비스 이용</button>
    </Link>
  );
}
