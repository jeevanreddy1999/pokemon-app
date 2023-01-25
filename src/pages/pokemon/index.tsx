import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

const Home = () => {
  const [name, setName] = useState("");
  return (
    <Fragment>
      <Head>
        <title>Pokemon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="pokeLayout">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div>
            <Link className="button" href={`/pokemon/${name}`}>
              Go to {name} page
            </Link>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Home;
