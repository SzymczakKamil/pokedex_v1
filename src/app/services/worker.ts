import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICard } from '../models/card';



@Injectable({
    providedIn: 'root'
})

export class Worker {
    private cards: any = []
    private spinnerBS = new BehaviorSubject<boolean>(false);
    private loginBS = new BehaviorSubject<boolean>(false);
    private cardsBS = new BehaviorSubject<ICard[]>([])


    constructor() { }

    getSpinnerBehavior() {
        return this.spinnerBS;
    }

    getLoginBehavior() {
        return this.loginBS;
    }

    getCardsBehavior() {
        return this.cardsBS;
    }

    getCards() {
        return this.cards;
    }

    setCards(cards: any) {
        this.cards = cards;
    }

    filterByName(name: string): void {
        const copyCard = [...this.cards];
        const result = this.cards.filter((pokemon: any) => pokemon.name.includes(name));
        this.cardsBS.next(result)
        this.cards = copyCard;
    }


}