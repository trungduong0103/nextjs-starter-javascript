import Head from "next/head";
import Layout from "../../components/layout/Layout";

export async function getStaticProps() {
  const request = await fetch(
    "https://goweather.herokuapp.com/weather/BienHoa"
  );

  const weather = await request.json();

  return {
    props: {
      weather: weather,
    },
  };
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
