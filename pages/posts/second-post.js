import Head from "next/head";
import Layout from "../../components/layout/Layout";

const city = "Bien Hoa";
const weatherUrl = `https://goweather.herokuapp.com/weather/${city}`;

// getStaticProps() is run at build time
// should not use when the page is frequently updated, and the page content is changed after every quests
// examples of getStaticProps(): Blogs, Journal, Newsletter, etc
// export async function getStaticProps() {
//   const request = await fetch(url);
//   const weather = await request.json();

//   return {
//     props: {
//       weather,
//     },
//   };
// }

// getServerSideProps() is run at request time
export async function getServerSideProps(context) {
  try {
    const request = await fetch(weatherUrl);
    const weather = await request.json();

    return {
      props: {
        weather,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export function SecondPost({ weather }) {
  return (
    <Layout>
      <Head>
        <title>Weather!</title>
      </Head>
      <h1>Current weather for Bien Hoa:</h1>
      <p>Temperature: {weather.temperature}</p>
      <p>Description: {weather.description}</p>
      <p>Wind: {weather.wind}</p>
    </Layout>
  );
}

export default SecondPost;
