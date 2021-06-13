import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout/Layout";

const defaultCity = "Bien Hoa";
const weatherUrl = `https://goweather.herokuapp.com/weather/`;

async function fetchWeather(city) {
  console.log(`${weatherUrl}/${city ? city : defaultCity}`);
  try {
    const request = await fetch(`${weatherUrl}/${city ? city : defaultCity}`);
    const weather = await request.json();
    return weather;
  } catch (error) {
    console.log("Error getting weather");
    return null;
  }
}

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
  const weather = await fetchWeather();
  return {
    props: {
      weather,
    },
  };
}

export default function WeatherPost({ weather }) {
  const [loading, setLoading] = useState(false);
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
