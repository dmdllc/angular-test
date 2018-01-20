import { Component } from '@angular/core';
import template from './second.component.html';
 
@Component({
  selector: 'another',
  template
})
export class Second {
	constructor() {

	}
}

@Component({
  selector: 'lastly',
  template: `
    <div class="container">
      <ol>
        <li>Firstly</li>
        <li>Lastly</li>
      </ol>
      <div class="fixed-action-btn horizontal">
	    <a class="btn-floating btn-large red">
	      <i class="large material-icons">mode_edit</i>
	    </a>
	    <ul>
	      <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
	      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
	      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
	      <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
	    </ul>
	  </div>
     </div> `
})
export class Lastly {
	constructor(){

	}
}