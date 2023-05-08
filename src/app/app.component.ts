import { Title } from '@angular/platform-browser';
import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
newArticleContent:string = '';
newArticleTitle:string = '';
// type:string='';
// title:string='';
// content:string='';
mesArticles:Array<object>=[
  {
    type:'',
    title:'test',
    content:'test'
  }
];
}