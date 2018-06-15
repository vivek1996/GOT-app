import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';

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
        this.allBooks = data;
      },
      error => {
        console.log('error in request', error);
      }
    );
    this.gotService.getAllCharacters().subscribe(
      data => {
        this.allCharaters = data;
        console.log(this.allCharaters);
      },
      error => {
        console.log('error ', error);
      }
    );
    this.gotService.getAllHouses().subscribe(
      data => {
        this.allHouses = data;
        console.log(this.allHouses);
      },
      error => {
        console.log(error);
      }
    );
  }
}
