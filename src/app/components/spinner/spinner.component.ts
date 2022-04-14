import { Component, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent  {
  showSpinner: boolean = false;
  constructor() { }
}


