import { Component, NgModule } from '@angular/core';
/* Necessary to run the app in the browser */
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* JokeListComponent */
/*
 * *ngFor="let <name-i-want-to-call-each-item> of <array-property-on-component>"
 * {{ <name-i-called-each-item>.<item property> }}
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
      <a class="btn btn-warning" (click)="toggle(joke)">Tell Me</a>
    </div>
  `
})

class JokeListComponent {
  // property of the class -> list of jokes
  jokes: Object[]; // or Array<Object> -> list of/array of objects

  // when we instantiate the class, the constructor function is called and initialises the properties
  // (the recommended approach with initialising a component is to use Component Lifecycle Hooks)
  constructor() {
    this.jokes = [
      {
        setup: 'What did the cheese say when it looked in the mirror?',
        punchline: 'Hello-Me (Halloumi)',
        hide: true
      },
      {
        setup: 'What kind of cheese do you use to disguise a small horse?',
        punchline: 'Mask-a-pony (Mascarpone)',
        hide: true
      },
      {
        setup: 'A kid threw a lump of cheddar at me',
        punchline: 'I thought ‘That’s not very mature’',
        hide: true
      },
    ];
  }

  toggle(joke) {
    joke.hide = !joke.hide;
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
