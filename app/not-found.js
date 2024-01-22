import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <header>
        <div className="hederContainer">
          <Link href="/">
            <h4>다핏</h4>
          </Link>
        </div>
      </header>
      <section
        className="heroSection"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>404 Not Found</p>
        <Link href="/">
          <h4>다핏</h4>
        </Link>
      </section>
    </div>
  );
}
