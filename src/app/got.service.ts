import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GotService {
  public baseUrl = 'https://anapioficeandfire.com/api/';
  constructor(private _http: HttpClient) {}
  getAllBooks(): any {
    const respone = this._http.get(`${this.baseUrl}books`);
    return respone;
  }
  getAllHouses(): any {
    const respone = this._http.get(`${this.baseUrl}houses`);
    return respone;
  }
  getAllCharacters(): any {
    const respone = this._http.get(`${this.baseUrl}characters`);
    return respone;
  }
  getSingleBook(bookId): any {
    const respone = this._http.get(`${this.baseUrl}books/${bookId}`);
    return respone;
  }
  getSingleCharacter(characterId): any {
    const respone = this._http.get(`${this.baseUrl}characters/${characterId}`);
    return respone;
  }
  getSingleHouse(houseId): any {
    const respone = this._http.get(`${this.baseUrl}houses/${houseId}`);
    return respone;
  }
}
