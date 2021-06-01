import {
  animate,
  AnimationEvent,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    /* trigger('animacaoGRU', [
      state('inicio', style({ opacity: 1 })),
      state('fim', style({ opacity: 0 })),
      transition('inicio => *', [
        style({ backgroundColor: 'yellow' }),
        animate('3s ease-in')
      ]),
      transition('* => inicio', [
        style({ backgroundColor: 'white' }),
        animate('3s ease-out')
      ])
    ]),*/
    trigger('openClose', [
        transition('* => *', [
          animate('2s', keyframes([
            style({ backgroundColor: 'blue' }),
            style({ backgroundColor: 'red' }),
            style({ backgroundColor: 'orange' })
          ]))
      /* transition('open => close', [
        animate(
          '2s ease-in',
          keyframes([
            style({ backgroundColor: 'blue', offset: 0 }),
            style({ backgroundColor: 'red', offset: 0.8 }),
            style({ backgroundColor: 'orange', offset: 1.0 })
          ])
        )
      ]),
      transition('close => open', [
        animate(
          '2s ease-out',
          keyframes([
            style({ backgroundColor: 'orange', offset: 0 }),
            style({ backgroundColor: 'red', offset: 0.2 }),
            style({ backgroundColor: 'blue', offset: 1.0 })
          ])
        )*/
      ])
    ])
  ]
})
export class AppComponent {
  isOpen = 'close';

  constructor() {}

  startOpenClose() {
    this.isOpen = this.isOpen === 'open' ? 'close' : 'open';
  }

  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);
    // phaseName is start or done
    console.warn(`Phase: ${event.phaseName}`);
    // in our example, totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);
    // in our example, fromState is either open or closed
    console.warn(`From: ${event.fromState}`);
    // in our example, toState either open or closed
    console.warn(`To: ${event.toState}`);
    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
