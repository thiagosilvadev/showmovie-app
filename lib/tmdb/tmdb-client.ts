import { HttpClient } from '@/infra/protocols/http/HttpClient'
import { MovieClient } from './movies/movie-client'
import { SearchClient } from './search/search-client'
import { TvShowClient } from './tv-shows/tv-show-client'

export default class TMDBClient {
  private readonly tvShowClient: TvShowClient
  private readonly movieClient: MovieClient
  constructor(private readonly httpClient: HttpClient) {
    this.tvShowClient = new TvShowClient(this.httpClient)
    this.movieClient = new MovieClient(this.httpClient)
  }
  get tvshows() {
    return this.tvShowClient
  }
  get movies() {
    return this.movieClient
  }
  get search() {
    return new SearchClient(this.httpClient)
  }

  async loadPopularShowsAndMovies(page = 1) {
    const [tvshows, movies] = await Promise.all([
      this.tvShowClient.loadPopular(page),
      this.movieClient.loadPopular(page)
    ])
    return [...tvshows.results, ...movies.results].sort((a, b) =>
      a.popularity! > b.popularity! ? -1 : 1
    )
  }
}
