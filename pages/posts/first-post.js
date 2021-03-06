import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Alert from "../../components/alert/Alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post!</title>
      </Head>
      <h1 style={{ textAlign: "center" }}>
        This is my first post! Here's some lorem ipsum:
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h3>Example with cslx:</h3>
      <Alert type="DANGER" title="This is a dangerous alert !" />
      <Alert type="WARNING" title="This is a warning alert !" />
      <Alert type="INFO" title="This is an info alert" />
    </Layout>
  );
}
