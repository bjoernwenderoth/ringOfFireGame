import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {

  cardAction = [
    { title: 'Wasserfall', description: 'Alle müssen gleichzeitig anfangen zu trinken. Sobald Spieler 1 aufhört zu trinken, darf Spieler 2 aufhören. Spieler 3 darf aufhören, sobald Spieler 2 aufhört, und so weiter.' },
    { title: 'Du', description: 'Du entscheidest, wer trinkt.' },
    { title: 'Ich', description: 'Glückwunsch! Trink einen Shot!' },
    { title: 'Kategorie', description: 'Denke dir eine Kategorie aus (z.B. Farben). Jeder Spieler muss einen Gegenstand aus der Kategorie nennen.' },
    { title: 'Tanzmove', description: 'Spieler 1 macht einen Tanzmove. Spieler 2 wiederholt den Tanzmove und fügt einen zweiten hinzu.' },
    { title: 'Mädels', description: 'Alle Mädchen trinken.' },
    { title: 'Himmel', description: 'Hände hoch! Der letzte Spieler muss trinken!' },
    { title: 'Partner', description: 'Wähle einen Partner. Dein Partner muss immer trinken, wenn du trinkst, und umgekehrt.' },
    { title: 'Daumenmeister', description: 'Du darfst beliebig oft den Daumen auf die Tischkante legen. Alle anderen müssen nun ebenfalls ihren Daumen auf die Tischkante legen. Der/die letzte, der/die es checkt, muss trinken. Du bleibst solange Daumenmaster bis eine spielende Person eine weitere 9 zieht.'},
    { title: 'Männer', description: 'Alle Männer trinken.' },
    { title: 'Quizmeister', description:  'Dem Questionmaster mit der Karte Vier dürfen keine Fragen beantwortet werden. – egal welcher Art. Wer antwortet, muss trinken. Du bist solange „Questionmaster“, bis ein anderer Spieler einen weiteren Buben zieht.' },
    { title: 'Ich hab noch nie...', description: 'Sage etwas, das du noch nie getan hast. Jeder, der es getan hat, muss trinken.' },
    { title: 'Regel', description: 'Erfinde eine Regel. Jeder muss trinken, wenn er die Regel bricht.' }
  ];

  title = '';
  description = '';
  @Input() card!: string;

  constructor (){ }

  ngOnChanges(): void {
    if (this.card) {
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
