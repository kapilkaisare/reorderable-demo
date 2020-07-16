import { Injectable } from '@angular/core';
import { RoObject } from '@kapilkaisare/reorderable';

@Injectable({
  providedIn: 'root'
})
export class RoGeneratorService {

  constructor() { 
  }

  generate(count: number) {
    const ros = [];
    for(let i = 0; i < count; i++) {
      ros.push(new RoObject(`Item_${i}`, i))
    }
    return ros;
  }
}
