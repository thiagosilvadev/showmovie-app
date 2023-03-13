import { UnauthorizedError, UnexpectedError } from "@/errors"
import {
  HttpClient,
  HttpResponse,
  HttpStatusCode,
} from "@/infra/protocols/http/HttpClient"

import { Movie, MovieDetail, ResultList, TMDBCredits } from "../models"
import { Fetcher } from "../utils/fetcher"

export class MovieClient extends Fetcher {
  constructor(private readonly httpClient: HttpClient) {
    super()
  }


  async loadPopular(page = 1): Promise<ResultList<Movie>> {
    const response = await this.httpClient.request<ResultList<Movie>>({
      method: "get",
      url: "/movie/popular",
      params: {
        page,
      },
    })
    return this.handleResponse(response, (data) => ({
      ...data,
      results: data.results.map((movie) => ({...movie, __typename: "Movie"})),
    }))
  }

  async loadTopRated(page = 1): Promise<ResultList<Movie>> {
    const response = await this.httpClient.request<ResultList<Movie>>({
      method: "get",
      url: "/movie/top_rated",
      params: {
        page,
      },
    })
    return this.handleResponse(response, (data) => ({
      ...data,
      results: data.results.map((movie) => ({...movie, __typename: "Movie"})),
    }))
  }

  async loadDetails(movieId: number): Promise<MovieDetail> {
    const response = await this.httpClient.request<MovieDetail>({
      method: "get",
      url: `movie/${movieId}`,
    })

    return this.handleResponse(response, (data) => data)
  }

  async loadCredits(movieId: number): Promise<TMDBCredits> {
    const response = await this.httpClient.request<TMDBCredits>({
      method: "get",
      url: `movie/${movieId}/credits`,
    })

    return this.handleResponse(response, (data) => data)
  }
}
