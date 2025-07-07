import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Abhishek Saxena</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Abhishek Saxena | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Abhishek Saxena | Software Developer" />
        <meta name="description" content="Hey! I'm Abhishek Saxena, Recent Graduate in Computer Science & Engineering" />

        <meta property="og:title" content="Abhishek Saxena | Software Developer" />
        <meta property="og:type" content="article" />


        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@abhisaxenaAJ" />
        <meta name="twitter:title" content="Abhishek Saxena | Frontend Developer" />
        <meta name="twitter:description" content="Hey! I'm Abhishek Saxena, Final Year Computer Science & Engineering Student" />

      </Head>
      <Home />
    </>
  );
}
