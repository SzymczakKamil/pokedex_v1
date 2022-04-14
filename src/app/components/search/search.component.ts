import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Worker } from '../../services/worker';
import { filter } from 'rxjs/operators';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = '';


  constructor(private worker: Worker) { }

  ngOnInit(): void {
  }

  values = '';

  changeInput(target: any) {
    // console.log(this.worker.getCards())

    // const result = this.worker.getCardsBehavior()
    //   .pipe(
    //     filter((event: any) => {
    //       console.log(event)
    //       let filter = event.filter((pokemon:any) => pokemon.name.includes(target.value))
    //       console.log(filter)
    //       return true
    //     })
    //   )
    // result.subscribe(x => console.log(x));
    // console.log(result)
    // console.log(this.pokemon_list)
    this.worker.filterByName(target.value)
    // let filter = this.worker.getCards().filter((pokemon: any) => pokemon.name.includes(target.value))
    
    // this.pokemon = filter
  }

}
