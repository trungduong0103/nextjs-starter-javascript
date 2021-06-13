import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <div className={utilStyles.centered}>
      <Head>
        <title>404</title>
      </Head>
      <h1>Error 404: Page not found!</h1>
    </div>
  );
}
