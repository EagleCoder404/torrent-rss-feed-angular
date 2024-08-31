import { Component } from '@angular/core';
import { Torrent, TorrentService } from '../torrent.service';
import {MatTableModule} from '@angular/material/table';
import { TorrentListAddComponent } from '../torrent-list-add/torrent-list-add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-torrent-list-editor',
  standalone: true,
  imports: [MatButtonModule, TorrentListAddComponent, MatListModule, MatIcon],
  templateUrl: './torrent-list-editor.component.html',
  styleUrl: './torrent-list-editor.component.css'
})
export class TorrentListEditorComponent {

  torrents?: Torrent[]

  constructor(private torrentService: TorrentService) {
    torrentService.getTorrents().subscribe(resp => this.torrents = resp)
  }

  deleteHandler(id: number)
  {
    this.torrentService.deleteTorrent(id).subscribe(x => console.log(x));
  }
  
}
