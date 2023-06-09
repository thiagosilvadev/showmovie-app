import { CardProps } from '@/components/card'
import {Movie, TvShow} from '@/lib/tmdb/models'
type MovieOrTvShow = Movie | TvShow
export const movieOrTvShowToCardProps = (movieOrTvShow: MovieOrTvShow): CardProps => {
  // switch typename
  switch (movieOrTvShow.__typename) {
    case 'Movie':
      return {
        image: {
          src: `https://image.tmdb.org/t/p/original/${movieOrTvShow.poster_path}`,
          alt: movieOrTvShow.title
        },
        title: movieOrTvShow.title,
        href: '/',
        rating: movieOrTvShow.vote_average
      }
    case 'TvShow':
      return {
        image: {
          src: `https://image.tmdb.org/t/p/original/${movieOrTvShow.poster_path}`,
          alt: movieOrTvShow.name
        },
        title: movieOrTvShow.name,
        href: '/',
        rating: movieOrTvShow.vote_average
      }
  }

}