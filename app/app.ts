import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';


// create a class with annotations..
@Component({
	selector: 'studenttrack-survey',
	template: `
	 <h1>{{title}}</h1>
	`
})
class SurveyApplication {
	public title = 'Studenttrack surveys';
}


// bootstrap our application..
bootstrap(SurveyApplication); 