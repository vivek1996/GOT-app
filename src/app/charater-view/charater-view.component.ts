import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-charater-view',
  templateUrl: './charater-view.component.html',
  styleUrls: ['./charater-view.component.scss'],
})
export class CharaterViewComponent implements OnInit {
  public characterId;
  public character;
  constructor(
    private _http: GotService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.characterId = this.route.snapshot.paramMap.get('characterId');
  }

  ngOnInit() {
    this._http.getSingleBook(this.characterId).subscribe(
      data => {
        this.character = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  public goBackToPreviousPage() {
    this.location.back();
  }
}
