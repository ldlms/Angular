import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExoComponent } from './exo/exo.component';
import { BlogControlCenterComponent } from './blog-control-center/blog-control-center.component';
import { ArticleElementComponent } from './article-element/article-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ExoComponent,
    BlogControlCenterComponent,
    ArticleElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
