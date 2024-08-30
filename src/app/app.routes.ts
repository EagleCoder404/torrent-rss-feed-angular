import { Routes } from '@angular/router';
import { TorrentListEditorComponent } from './torrent-list-editor/torrent-list-editor.component';

export const routes: Routes = [
    {path:"**", component: TorrentListEditorComponent}
];
