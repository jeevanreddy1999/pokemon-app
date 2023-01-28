import { Fragment } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { GetServerSidePropsContext, NextPage } from "next";
import { Pokemon } from "@/types/pokemon";

interface Props {
  pokemon: Pokemon | undefined;
}

const PokemonDetails: NextPage<Props> = ({ pokemon }) => {
  return (
    <Fragment>
      <Head>
        <title>{pokemon ? `Pokemon ${pokemon.name}` : "Error"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {pokemon ? (
          <Fragment>
            <div>Name: {pokemon.name}</div>
            <div>Height: {pokemon.height}</div>
            <div>Weight: {pokemon.weight}</div>
          </Fragment>
        ) : (
          <div>Error</div>
        )}
      </Layout>
    </Fragment>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name }: any = context.params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  let pokemon = res.ok ? await res.json() : null;
  return {
    props: { pokemon },
  };
}

export default PokemonDetails;
