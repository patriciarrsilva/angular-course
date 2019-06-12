import { Component, NgModule } from '@angular/core';
/* Necessary to run the app in the browser */
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* JokeComponent */
@Component({
  selector: 'joke',
  template: `
    <h1>What did the cheese say when it looked in the mirror?</h1>
    <p>Halloumi (Hello Me)</p>
  `
})

class JokeComponent {
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
