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
    trigger('openClose', [
      transition('false => true', [
        animate('3s', keyframes ( [
          style({ backgroundColor: '#FFFFFF' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: '#FFFFFF' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: '#FFFFFF' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: '#FFFFFF' })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  uuid: string;

  constructor() {}

  startOpenClose() {
    this.uuid = '123';
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
