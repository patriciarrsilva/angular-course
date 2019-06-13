import { Component, Input, NgModule } from '@angular/core';
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

/* JokeComponent */
/*
 * Input Property Binding: [hidden]="<javascript-code>"
 *  we bind the value to the DOM property `hidden`/we bind to the input of the element/component - p tag here
 *  changes the value of the target
 *
 * Output Event Binding: (event-we-want-to-listen)="<javascript-called-every-click>"
 *  we bind to the output of the element/component
 *  notifies when the target’s value changes
 */
@Component({
  selector: 'joke',
  template: `
    <div class="card card-block">
      <h4 class="card-title">{{ data.setup }}</h4>
      <p class="card-text" [hidden]="data.hide">{{ data.punchline }}</p>
      <a (click)="data.toggle()" class="btn btn-warning">Tell Me</a>
    </div>
  `
})

class JokeComponent {
  /*
   * @Input tells Angular that the "joke" property is an input property and we can bind to it using []
   * This @Input becomes part of the public interface of the component
   */
  /*
  * The @Input takes a parameter -> the name of the input property to the outside world
  * this way we can change the property name without changing all the input property bindings
  */
  @Input('joke') data: Joke;
}


/* JokeListComponent */
/* holds a list of JokeComponents (ngFor)
 *
 * *ngFor="let <name-i-want-to-call-each-item> of <array-property-on-component>"
 * {{let <name-i-called-each-item>.<item property>}}
 * 
 * as we bound to the hidden property of the p tag (to ".hide"), we want to bind to the joke property of the JokeComponent (to "j")
 * like this: [joke]="j" (now, the JokeComponent has a "joke" property)
 * but this is not enough - we need to explicitly mark it as an Input property on the JokeComponent (with @Input
 */
@Component({
  selector: 'joke-list',
  template: `
    <joke *ngFor="let j of jokes" [joke]="j"></joke>
  `
})

class JokeListComponent {
  // property of the class -> list of jokes
  jokes: Joke[]; // list of/array of Joke's (instance of the Joke class)

  // when we instantiate the class, the constructor function is called and initialises the properties
  // (the recommended approach with initialising a component is to use Component Lifecycle Hooks)
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }
}

/* AppComponent
 * root component - no functionality (container to hold other components) 
 * holds the JokeListComponent 
 */
@Component({
  selector: 'app',
  template: `
    <joke-list></joke-list>
  `
})

class AppComponent {
}

/* Root Angular Module - every Angular app requires, at least, one module (this one).
 * imports - other Angular modules that we need in this module
 * declarations - components/directives of this module
 * bootstrap - root component
 */
@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

/* Bootstrap the application using the Root Angular Module */
platformBrowserDynamic().bootstrapModule(AppModule);