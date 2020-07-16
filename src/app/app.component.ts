import { Component, OnInit } from '@angular/core';
import { RoObject } from '@kapilkaisare/reorderable';
import { RoGeneratorService } from './ro-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  reorderableObjects: RoObject[];

  constructor(
    private roGeneratorService: RoGeneratorService
  ) {

  }

  ngOnInit() {
    this.generateROs(1000);
  }

  generateROs(count: number) {
    this.reorderableObjects = this.roGeneratorService.generate(count);
 }

}
