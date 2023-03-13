import { UnauthorizedError, UnexpectedError } from "@/errors"
import {
  HttpClient,
  HttpResponse,
  HttpStatusCode,
} from "@/infra/protocols/http/HttpClient"

import { Movie, MovieDetail, ResultList, TMDBCredits } from "../models"

export class MovieClient {
  constructor(private readonly httpClient: HttpClient) {}

  private handleResponse<T = any>(response: HttpResponse<T>): T {
    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body!
      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError()
      default:
        throw new UnexpectedError()
    }
  }

  async loadPopular(page = 1): Promise<ResultList<Movie>> {
    const response = await this.httpClient.request<ResultList<Movie>>({
      method: "get",
      url: "/movie/popular",
      params: {
        page,
      },
    })
    return this.handleResponse(response)
  }

  async loadTopRated(page = 1): Promise<ResultList<Movie>> {
    const response = await this.httpClient.request<ResultList<Movie>>({
      method: "get",
      url: "/movie/top_rated",
      params: {
        page,
      },
    })
    return this.handleResponse(response)
  }

  async loadDetails(movieId: number): Promise<MovieDetail> {
    const response = await this.httpClient.request<MovieDetail>({
      method: "get",
      url: `movie/${movieId}`,
    })

    return this.handleResponse(response)
  }

  async loadCredits(movieId: number): Promise<TMDBCredits> {
    const response = await this.httpClient.request<TMDBCredits>({
      method: "get",
      url: `movie/${movieId}/credits`,
    })

    return this.handleResponse(response)
  }
}
