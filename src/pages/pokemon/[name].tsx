import { Fragment } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { GetServerSidePropsContext, NextPage } from "next";
import { Pokemon } from "pokenode-ts";

interface Props {
  pokemon: Pokemon | undefined;
}

const PokemonDetails: NextPage<Props> = ({ pokemon }) => {
  if (!pokemon) {
    return (
      <Layout>
        <div>error</div>
      </Layout>
    );
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
  if (!res.ok)
    return {
      props: { pokemon: null },
    };
  const data = await res.json();
  return {
    props: { pokemon: data },
  };
}

export default PokemonDetails;
