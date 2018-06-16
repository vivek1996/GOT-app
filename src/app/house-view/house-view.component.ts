import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.scss']
})
export class HouseViewComponent implements OnInit {
  public houseId;
  public house;
  constructor(private _http: GotService,
    private route: ActivatedRoute,
    private location: Location) {
      this.houseId = this.route.snapshot.paramMap.get('houseId');
    }

  ngOnInit() {
    this._http.getSingleBook(this.houseId).subscribe(
      data => {
        this.house = data;
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
