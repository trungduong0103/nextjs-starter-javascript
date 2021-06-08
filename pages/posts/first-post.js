import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post!</title>
      </Head>
      <h1>This is my first post!</h1>
      <h1>
        Go back{" "}
        <Link href="/">
          <a>home!</a>
        </Link>
      </h1>
      <h1>This is a NextJS image:</h1>
      <Image
        src="/images/profile.jpeg"
        height={144}
        width={144}
        alt="Profile Picture!"
      />
    </>
  );
}
