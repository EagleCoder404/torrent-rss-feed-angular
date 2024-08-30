import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentListEditorComponent } from './torrent-list-editor.component';

describe('TorrentListEditorComponent', () => {
  let component: TorrentListEditorComponent;
  let fixture: ComponentFixture<TorrentListEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorrentListEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorrentListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
