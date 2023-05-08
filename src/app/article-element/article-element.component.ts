import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-article-element',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.css']
})
export class ArticleElementComponent {
  @Input()element:{title:string,type:string,content:string};
  // @Input()title:string;
  // @Input()type:string;
  // @Input()content:string;
  @Input()mesArticles:Array<object> = [];
}
