import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
newArticleContent:string = '';
newArticleTitle:string = '';
mesArticles:Array<object>=[
  {
    type:'test',
    title:'test',
    content:'test'
  }
];
}