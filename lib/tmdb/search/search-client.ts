import { HttpClient } from '@/infra/protocols/http/HttpClient'
import { Movie, ResultList, TvShow } from '../models/'
import { Fetcher } from '../utils/fetcher'

export class SearchClient extends Fetcher {
  constructor(private readonly httpClient: HttpClient) {
    super()
  }
  async all(query: string) {
    const response = await this.httpClient.request<ResultList<any>>({
      method: 'get',
      url: '/search/multi',
      params: {
        query
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
    }))

    return data
  }
  async movies(query: string) {
    const response = await this.httpClient.request<ResultList<Movie>>({
      method: 'get',
      url: '/search/movie',
      params: {
        query
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
    }))

    return data
  }

  async tvshows(query: string) {
    const response = await this.httpClient.request<ResultList<TvShow>>({
      method: 'get',
      url: '/search/tv',
      params: {
        query
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
    }))

    return data
  }
}
