import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllCards } from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  cards: any[] = []
  pokemon_list: any[] = []
  id = 0
  errorMessage = ''
  hidden = true;
  showSpinner = true
  @Input()
  key = ''
  constructor(private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key'].currentValue !== "false") {
      this.getAllCards(changes['key'].currentValue);
    }
  }

  ngOnInit(): void {

  }

  getAllCards(key: string) {
    const response = this.http.get("https://api.pokemontcg.io/v2/cards", {
      headers: {
        "X-Api-Key": key
      }
    });
    response.subscribe({
      next: (request: any) => {
        this.cards = request.data
        this.pokemon_list = request.data
        this.hidden = true;
        this.showSpinner = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Error message: ' + error.message + "; Error code: " + error.code
      }
    });
  }

  login(event: any) {

  }

  search(cards: any) {
    this.cards = cards;
  }




}
