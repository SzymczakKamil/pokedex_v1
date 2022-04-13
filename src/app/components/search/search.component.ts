import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = '';
  @Input()
  pokemon_list = [{
    name: ''
  }];

  @Output()
  searchPokemon = new EventEmitter()

  errorMessage = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  values = '';

  onKeyDown(target: any) {
    let result = this.pokemon_list.filter(pokemon => pokemon.name.includes(target.value))
    this.searchPokemon.emit(result)
    // this.cards = result
    // if(target.value.length >3){
    //   const response = this.http.get("https://api.pokemontcg.io/v2/cards/", {
    //   headers: {
    //     "X-Api-Key": "secret"
    //   },
    //   params: {
    //     name: target.value
    //   }
    // });
    // response.subscribe({
    //   next: (request: any) => {
    //     console.log(request)
    //     this.cards = request.data
    //   },
    //   error: (error: any) => {
    //     this.errorMessage = 'Error message: ' + error.message + "; Error code: " + error.code
    //   }
    // });

    // }
  }

  login(event: any) {
    console.log(event)
  }

}
