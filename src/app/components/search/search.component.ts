import { Component} from '@angular/core';
import { Worker } from '../../services/worker';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private worker: Worker) { }

  changeInput(target: any) {
    this.worker.filterByName(target.value)
  }

}
