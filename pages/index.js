import Head from "next/head";

const Home = () => {
  const TITLE = "te9yie";
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>Hello</p>
    </div>
  );
};

export default Home;
