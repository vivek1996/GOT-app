import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private location: Location
  ) {
    this.characterId = this.route.snapshot.paramMap.get('characterId');
  }

  ngOnInit() {
    this._http.getSingleCharacter(this.characterId).subscribe(
      data => {
        this.character = data;
      },
      error => {
        console.log(error);
      }
    );
    this.route.params.subscribe(routeParams => {
      this.loadDetail(routeParams.characterId);
    });
  }
  public loadDetail(id) {
    this._http.getSingleCharacter(id).subscribe(
      data => {
        this.character = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  public goToPage(id) {
    this.router.navigate(['/characters', id]);
  }
  public goBackToPreviousPage() {
    this.location.back();
  }
}
