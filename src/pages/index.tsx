import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Link className="button" href="/pokemon">
          Get Pokemon
        </Link>
      </Layout>
    </Fragment>
  );
};

export default Home;
