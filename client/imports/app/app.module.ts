import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';
import { Second, Lastly } from './second.component';

 

@NgModule({
  declarations: [ MyApp, Second, Lastly ],
  exports: [Second, Lastly],
  entryComponents: [ MyApp ],
  providers: [
   // This ErrorHandler thing chokes and doesn't quite work.
   // { provide: ErrorHandler }
  ],
  imports: [ BrowserModule ],
  bootstrap: [ MyApp ]
})
export class AppModule {
	constructor(){

	}
}
