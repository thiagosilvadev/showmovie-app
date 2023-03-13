import { HttpClient } from '@/infra/protocols/http/HttpClient'

import {
  ResultList,
  TMDBCredits,
  TMDBSeasons,
  TvShow,
  TvShowDetail
} from '../models/'
import { Fetcher } from '../utils/fetcher'

export class TvShowClient extends Fetcher {
  constructor(private readonly httpClient: HttpClient) {
    super()
  }

  async loadPopular(page = 1): Promise<ResultList<TvShow>> {
    const response = await this.httpClient.request<ResultList<TvShow>>({
      method: 'get',
      url: '/tv/popular',
      params: {
        page
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
    }))

    return data
  }

  async loadTopRated(page = 1) {
    const response = await this.httpClient.request<ResultList<TvShow>>({
      method: 'get',
      url: '/tv/top_rated',
      params: {
        page
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!
    }))

    return data
  }

  async loadDetails(tvshowId: number) {
    const response = await this.httpClient.request<TvShowDetail>({
      method: 'get',
      url: `tv/${tvshowId}`
    })

    return this.handleResponse(
      response,
      (tvshow) => tvshow!
    )
  }

  async loadCredits(tvshowId: number): Promise<TMDBCredits> {
    const response = await this.httpClient.request<TMDBCredits>({
      method: 'get',
      url: `tv/${tvshowId}/credits`
    })

    return this.handleResponse(response, (credits) => credits!)
  }

  async loadSeason(tvshowId: number, seasonId: number): Promise<TMDBSeasons> {
    const response = await this.httpClient.request<TMDBSeasons>({
      method: 'get',
      url: `tv/${tvshowId}/season/${seasonId}`
    })

    return this.handleResponse(response, (seasons) => seasons!)
  }
}
