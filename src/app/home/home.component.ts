import { Component } from '@angular/core';
import { trigger, state, animate, style, transition, keyframes } from '@angular/animations';

@Component({
  moduleId: module.id,
  animations: [
    trigger('toggleElement', [
      state('open', style({'height':'*'})),
      state('closed', style({'height': '0px', 'font-size': '0px'  })),

      transition('closed <=> open', [
        animate('1000ms cubic-bezier(1, 0, 0, 1)')
      ])
    ]),

    trigger('animateCitation',[
      transition('stateA <=> stateB', [
        animate(600,keyframes([
          style({opacity: .5, offset: 0}),
  				style({opacity: 1, color: '#fcb514', offset: .5}),
  				style({opacity: .7, offset: 1}),
  				style({opacity: 1, offset: 1})
        ]))
      ])
    ])
  ],
  selector: 'Home',
  templateUrl: 'home.component.html'
})
export class HomeComponent{
  open:boolean = false;
  toggleElement: string = "closed";
  animateCitation: string = "stateB"
  index: number = 0;

  quotes: quote[] = [
      {
          id: 0, 
          text:"En vérité, je ne voyage pas, moi, pour atteindre un endroit précis, mais pour marcher : simple plaisir de voyager. ",
          author: 'Robert Louis Stevenson'
      },
      {
          id: 2, 
          text:"Mon pied droit est jaloux de mon pied gauche. Quand l'un avance, l'autre veut le dépasser. Et moi, comme un imbécile, je marche ! ",
          author: "Raymond Devos"
      },
      {
          id: 1, 
          text:"Le plus long de tous les voyages commence par un tout petit pas",
          author: "proverbe chinois"
      },
  ];

  quote: quote = this.quotes[0];
  
  toggle(){
    this.open = !this.open;
    console.log(this.open);
    if(this.open){
      this.toggleElement = 'open';
    }
    else{
      this.toggleElement = 'closed';
    }
  }

  getPreviousQuote(){
    this.animateCitation = this.animateCitation === 'stateA'? 'stateB' : 'stateA'
    this.sameQuote(-1);
  }

  getNextQuote(){
    this.animateCitation = this.animateCitation === 'stateA'? 'stateB' : 'stateA'
    this.sameQuote(1);
  }

  sameQuote(increment: number){
    this.index = this.index + increment
    if(this.index > this.quotes.length && increment === 1){
      this.index = 0;
    }

    if(this.index < 0 && increment === -1){
      this.index = this.quotes.length -1;
    }

    this.quote = this.quotes[this.index];  
  }

  log(event: any){
    console.log("je suis dans log");
    console.log(event);
  }

}

interface quote{
  id: number;
  text: string;
  author: string;
}