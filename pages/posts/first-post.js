import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>This is my first post!</h1>
      <h1>
        Go back{" "}
        <Link href="/">
          <a>home!</a>
        </Link>
      </h1>
    </>
  );
}
