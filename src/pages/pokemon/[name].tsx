import { Fragment } from "react";
import Error from "next/error";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { GetServerSidePropsContext, NextPage } from "next";
import { Pokemon } from "pokenode-ts";

interface Props {
  errorCode: never;
  pokemon: Pokemon;
}

const PokemonDetails: NextPage<Props> = ({ errorCode, pokemon }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <Fragment>
      <Head>
        <title>Pokemon Details</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div>Name: {pokemon.name}</div>
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
      </Layout>
    </Fragment>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name }: any = context.params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (res.ok) {
    const pokemon = await res.json();
    return {
      props: { errorCode: false, pokemon },
    };
  } else {
    return {
      props: {
        errorCode: res.status,
      },
    };
  }
}

export default PokemonDetails;
