import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
// import orderBy from 'lodash/orderBy';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public allBooks;
  public allCharacters;
  public allHouses;
  constructor(private gotService: GotService, private toastr: ToastrService) {}
  ngOnInit() {
    this.gotService.getAllBooks().subscribe(
      data => {
        // console.log(data);
        // console.log('success in req');
        this.allBooks = data;
      },
      error => {
        console.log('error in request', error);
      }
    );
    this.gotService.getAllCharacters().subscribe(
      data => {
        this.allCharacters = data;
        // console.log(this.allCharacters);
      },
      error => {
        console.log('error ', error);
      }
    );
    this.gotService.getAllHouses().subscribe(
      data => {
        this.allHouses = data;
        // console.log(this.allHouses);
      },
      error => {
        console.log(error);
      }
    );
  }
  public sortBook(event): void {
    const val = event.target.value;
    this.allBooks =  _.orderBy(this.allBooks, [val], ['asc']);
    this.toastr.success(`Sorted Successfully by ${val}`, 'Sorted');
  }
  public sortCharacter(event): void {
    const val = event.target.value;
    this.allCharacters =  _.orderBy(this.allCharacters, [val], ['asc']);
    this.toastr.success(`Sorted Successfully by ${val}`, 'Sorted');
  }
  public sortHouse(event): void {
    const val = event.target.value;
    this.allHouses =  _.orderBy(this.allHouses, [val], ['asc']);
    this.toastr.success(`Sorted Successfully by ${val}`, 'Sorted');
  }
}
