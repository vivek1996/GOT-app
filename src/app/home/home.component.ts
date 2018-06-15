import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import orderBy from 'lodash/orderBy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public allBooks = [];
  public allCharaters;
  public allHouses;
  constructor(private gotService: GotService) {}
  ngOnInit() {
    this.gotService.getAllBooks().subscribe(
      data => {
        console.log(data);
        console.log('success in req');
        this.allBooks = orderBy(data, ['name'], ['asc']);
      },
      error => {
        console.log('error in request', error);
      }
    );
    this.gotService.getAllCharacters().subscribe(
      data => {
        this.allCharaters = orderBy(data, ['liases'], ['asc']);
        console.log(this.allCharaters);
      },
      error => {
        console.log('error ', error);
      }
    );
    this.gotService.getAllHouses().subscribe(
      data => {
        this.allHouses = orderBy(data, ['name'], ['asc']);
        console.log(this.allHouses);
      },
      error => {
        console.log(error);
      }
    );
  }
  public sortBook(event): void {
    const val = event.target.value;
    console.log(val);
    this.allBooks =  orderBy(this.allBooks, [val], ['asc']);
  }
}
