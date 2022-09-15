import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale1" />
   
      </Head>
      <Component {...pageProps} />  {/* "Component" Layout ın children ı olmuş oluyor. şu an içinde homepage var */}
    </Layout>
  );
}

export default MyApp;
