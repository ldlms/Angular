import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-blog-control-center',
  templateUrl: './blog-control-center.component.html',
  styleUrls: ['./blog-control-center.component.css']
})
export class BlogControlCenterComponent {
  @Input()newArticleTitle:string='';
  @Input()newArticleContent:string='';
  @Input()mesArticles:Array<object> = [];
  onAddArticle(){
  this.mesArticles.push(
  {
  type:'article',
  title: this.newArticleTitle,
  content:this.newArticleContent
  }
  )
  }
  onAddBrouillon(){
  this.mesArticles.push(
  {
  type:'brouillon',
  title: this.newArticleTitle,
  content:this.newArticleContent
  }
  )
  }
}
