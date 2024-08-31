import { Component } from '@angular/core';
import { TorrentService } from '../torrent.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-torrent-list-add',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './torrent-list-add.component.html',
  styleUrl: './torrent-list-add.component.css'
})
export class TorrentListAddComponent {
  addTorrentForm = new FormGroup({
    name: new FormControl("", Validators.required),
    uri: new FormControl("", Validators.required)
  })
  constructor(private torrentService: TorrentService) {}

  handleSubmit()
  {
    if(this.addTorrentForm.value.name && this.addTorrentForm.value.uri)
    {
      this.torrentService.addTorrent({
        name: this.addTorrentForm.value.name,
        url: this.addTorrentForm.value.uri
      }).subscribe(x => console.log(x))
    }
  }
}
