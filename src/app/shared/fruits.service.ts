import { Injectable } from '@angular/core';
import { fruitMocks } from './fruits-mock';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  quantité:number = 0;

  constructor() { }

  fetchAll(){
    return fruitMocks;
  }
}
