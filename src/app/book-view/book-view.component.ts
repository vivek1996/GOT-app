import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit {
  public book;
  public bookId;
  constructor(
    private _http: GotService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
  }

  ngOnInit() {
    this._http.getSingleBook(this.bookId).subscribe(
      data => {
        this.book = data;
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
