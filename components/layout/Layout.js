import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "Trung";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <>
          <Image
            priority
            src="/images/profile.jpeg"
            className={utilStyles.borderCircle}
            height={home ? 144 : 108}
            width={home ? 144 : 108}
          />
          <h1 className={home ? utilStyles.heading2Xl : utilStyles.headingLg}>
            {name}
          </h1>
        </>
      </header>

      <main>{children}</main>

      <footer>
        <div className={styles.backToHome}>
          {!home ? (
            <Link href="/">
              <a>Home</a>
            </Link>
          ) : (
            <>
              <Link href="/posts/first-post">
                <a style={{ marginRight: "10px" }}>Go to first post</a>
              </Link>
              <Link href="/posts/second-post">
                <a>Go to second post</a>
              </Link>
            </>
          )}
        </div>
      </footer>
    </div>
  );
}
