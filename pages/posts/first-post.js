import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post!</title>
      </Head>
      <h1>This is my first post!</h1>
      <h1>
        <Link href="/">
          <a>Back to home!</a>
        </Link>
      </h1>
      <h1>This is a NextJS image:</h1>
      <Image
        src="/images/profile.jpeg"
        height={144}
        width={144}
        alt="Profile Picture!"
      />
    </Layout>
  );
}
