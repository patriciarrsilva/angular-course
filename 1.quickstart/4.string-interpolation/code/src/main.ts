import { Component, NgModule } from '@angular/core';
/* Necessary to run the app in the browser */
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* JokeComponent */
@Component({
  selector: 'joke',
  template: `
    <h1>{{ setup }}</h1>
    <p>{{ punchline }}</p>
  `
})

class JokeComponent {
  // properties of the class
  setup: string;
  punchline: string;

  // when we instantiate the class, the constructor function is called and initialises the properties
  // (the recommended approach with initialising a component is to use Component Lifecycle Hooks)
  constructor() {
    this.setup = 'What did the cheese say when it looked in the mirror?';
    this.punchline = 'Halloumi (Hello Me)';
  }
}

/* Root Angular Module - every Angular app requires, at least, one module (this one).
 * imports - other Angular modules that we need in this module
 * declarations - components/directives of this module
 * bootstrap - root component
 */
@NgModule({
  imports: [BrowserModule],
  declarations: [JokeComponent],
  bootstrap: [JokeComponent]
})

export class AppModule {
}

/* Bootstrap the application using the Root Angular Module */
platformBrowserDynamic().bootstrapModule(AppModule);
