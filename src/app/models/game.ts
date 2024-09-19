export class Game {
    public players: string[] = [];
    public currentPlayer: number = 0;
    public stack: string[] = [];
    public playedCards: string[] = [];


    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('clubs_' + i);
        } this.shuffleStack(this.stack);
    }


    shuffleStack(stack: string[]): void {
        for (let i = stack.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stack[i], stack[j]] = [stack[j], stack[i]];
        }
    }
}