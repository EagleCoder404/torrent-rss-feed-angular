import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TorrentService {

  // private baseUrl: string = "https://torrentrssfeed.azurewebsites.net/api"
  private baseUrl: string = environment.apiBaseUrl

  
  constructor(private http: HttpClient) {}

  getTorrents() : Observable<Torrent[]> {
    return this.http.get<Torrent[]>(`${this.baseUrl}/torrents`)
  }

  addTorrent(torrent: AddTorrentDto) {
    return this.http.post(`${this.baseUrl}/torrents`,
      {
        name: torrent.name,
        url: torrent.url
      }
    )
  }

  deleteTorrent(id: number) {
    return this.http.delete(`${this.baseUrl}/torrents/${id}`)
  }
}

export class Torrent
{
  public id!: number
  public name!: string
  public magnetUrl!: string
}

export class AddTorrentDto
{
  public name!: string
  public url!: string
}