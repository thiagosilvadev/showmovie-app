import { GetServerSideProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { FetchHttpClient } from "@/infra/protocols/http/fetch-http-client"
import { Search } from "lucide-react"

import TMDBClient from "@/lib/tmdb/tmdb-client"
import { Card, CardSkeleton, LateralCard } from "@/components/card"
import { Layout } from "@/components/layout"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Typography } from "@/components/ui/typography"
import { movieOrTvShowToCardProps } from "@/mappers/card-mapper"
import { Movie, TvShow } from "@/lib/tmdb/models"


export default function IndexPage(props: {
  initialData: (Movie | TvShow) []
}) {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <Typography className="leading-none text-dark-900 dark:text-white">
            Bem vindo
            <br /> ao ShowMovie!
          </Typography>
          <Typography variant="h4">
            Encontre milhares de filmes e séries, faça a sua pesquisa:
          </Typography>
        </div>
        <form
          className="group relative font-secondary md:max-w-md lg:max-w-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <Label className="absolute left-4 top-2 text-dark-600 transition-transform">
            Buscar por filmes ou séries
          </Label>
          <div className="flex h-16 font-secondary dark:bg-black/10">
            <Input
              placeholder="Ex: Breaking Bad"
              className="font-base h-full flex-col items-end rounded-lg rounded-r-none border-r-0 px-4 pb-1 pt-4 leading-none focus:border-primary-500 focus:ring-0 placeholder:dark:text-dark-400 dark:focus:border-primary-500 lg:text-lg"
            />
            <Button
              variant="outline"
              className="h-full w-16 rounded-lg rounded-l-none border-l-0 transition-none group-focus-within:border-primary-500"
            >
              <Search size={24} />
              <span className="sr-only">Pesquisar</span>
            </Button>
          </div>
        </form>
      </section>
      <div className="container mb-2 space-y-2">
        <LateralCard
          image={{
            src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ri8xr223xBb2TeHX3GKypvQPV2B.jpg",
            alt: "Poster The Leftovers",
          }}
          title="The Leftovers"
          subtitle="(2014)"
          imageLayout="portrait"
          description="Após dois por cento da população do mundo desaparecer, os que sobraram se esforçam para compreender."
        />
        <LateralCard
          imageLayout="landscape"
          lateralDetail="28 de maio de 2017"
          image={{
            src: "https://www.themoviedb.org/t/p/original/54Awkt69uuTtUKGnw8jIauBg0eI.jpg",
            alt: "Poster The Leftovers",
          }}
          title="The Book of Kevin"
          // subtitle="(2014)"
          overtitle="t03e01"
          description="Três anos depois dos Remanescentes Culpados se estabelecerem em Miracle, Texas, Kevin trabalha como chefe de polícia, mas seu trabalho se complica com a proximidade do sétimo aniversário da partida, já que alguns cidadãos estão convencidos de que outro evento apocalíptico está em andamento."
        />
      </div>
      <section className="container grid grid-cols-2 place-items-center md:grid-cols-4">
         {props.initialData.map(item => <Card  key={item.id} {...movieOrTvShowToCardProps(item)} />)}
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new TMDBClient(
    new FetchHttpClient(process.env.NEXT_PUBLIC_TMDB_URL as string, {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: "pt-BR",
    })
  )
  
  const data = await client.loadPopularShowsAndMovies(1)

  return {
    props: {
      initialData: data,
    },
  }
}
