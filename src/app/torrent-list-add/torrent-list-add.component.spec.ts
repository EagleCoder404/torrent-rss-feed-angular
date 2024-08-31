import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentListAddComponent } from './torrent-list-add.component';

describe('TorrentListAddComponent', () => {
  let component: TorrentListAddComponent;
  let fixture: ComponentFixture<TorrentListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorrentListAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorrentListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
