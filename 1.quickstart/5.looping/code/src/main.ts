import { Component, NgModule } from '@angular/core';
/* Necessary to run the app in the browser */
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* JokeListComponent */
/*
 * ngFor="let <name-i-want-to-call-each-item> of <array-property-on-component>"
 * {{let <name-i-called-each-item>.<item property>}}
 */
@Component({
  selector: 'joke-list',
  template: `
    <div class="card card-block" *ngFor="let joke of jokes">
      <h4 class="card-title">{{ joke.setup }}</h4>
      <p class="card-text">{{ joke.punchline }}</p>
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
        punchline: 'Hello-Me (Halloumi)'
      },
      {
        setup: 'What kind of cheese do you use to disguise a small horse?',
        punchline: 'Mask-a-pony (Mascarpone)'
      },
      {
        setup: 'A kid threw a lump of cheddar at me',
        punchline: 'I thought ‘That’s not very mature’'
      },
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
