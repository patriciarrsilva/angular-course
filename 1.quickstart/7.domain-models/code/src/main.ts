import { Component, NgModule } from '@angular/core';
/* Necessary to run the app in the browser */
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* Domain Model: class to store data and functions (represents a single joke) */
class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  // initialises the properties of the Joke instance from the arguments passed into the constructor
  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

/* JokeListComponent */
/*
 * *ngFor="let <name-i-want-to-call-each-item> of <array-property-on-component>"
 * {{let <name-i-called-each-item>.<item property>}}
 *
 * Input Property Binding: [hidden]="<javascript-code>"
 *  we bind the value to the DOM property `hidden`/we bind to the input of the element/component - p tag here
 *  changes the value of the target
 *
 * Output Event Binding: (event-we-want-to-listen)="<javascript-called-every-click>"
 *  we bind to the output of the element/component
 *  notifies when the target’s value changes
 */
@Component({
  selector: 'joke-list',
  template: `
    <div class="card card-block" *ngFor="let joke of jokes">
      <h4 class="card-title">{{ joke.setup }}</h4>
      <p class="card-text" [hidden]="joke.hide">{{ joke.punchline }}</p>
      <a class="btn btn-warning" (click)="joke.toggle()">Tell Me</a>
    </div>
  `
})

class JokeListComponent {
  // property of the class -> list of jokes
  jokes: Joke[]; // list of/array of Joke's (instance of the Joke class)

  // when we instantiate the class, the constructor function is called and initialises the properties
  // (the recommended approach with initialising a component is to use Component Lifecycle Hooks)
  constructor() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’'),
    ];
  }
}

/* Root Angular Module - every Angular app requires, at least, one module (this one).
 * imports - other Angular modules that we need in this module
 * declarations - components/directives of this module
 * bootstrap - root component
 */
@NgModule({
  imports: [BrowserModule],
  declarations: [JokeListComponent],
  bootstrap: [JokeListComponent]
})

export class AppModule {
}

/* Bootstrap the application using the Root Angular Module */
platformBrowserDynamic().bootstrapModule(AppModule);
