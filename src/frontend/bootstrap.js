import 'reflect-metadata'
import 'zone.js'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { HttpModule } from '@angular/http'
import 'rxjs/add/operator/toPromise'

import AppComponent from './app/components/app.component'
import PostComponent from './app/components/post.component'
import NewPostComponent from './app/components/newPost.component'
import PostDetailComponent from './app/components/postDetail.component'
import PostListComponent from './app/components/postList.component'
import CommentComponent from './app/components/comment.component'
import UpvoteComponent from './app/components/upvote.component'
import NewCommentComponent from './app/components/newComment.component'

import { RouterModule }  from '@angular/router';

let router = RouterModule.forRoot([
  { path: '', redirectTo: '/noticias', pathMatch: 'full' },
  { path: 'noticias', component: PostListComponent },
  { path: 'noticia/:id', component: PostDetailComponent },
  { path: 'noticias/:noticia/upvote', component: UpvoteComponent },
  { path: 'noticias/:noticia/comentarios', component: NewCommentComponent }
], { useHash: true })

@NgModule({
  imports: [ router, BrowserModule, FormsModule, HttpModule ],
  declarations: [
    PostComponent,
    NewPostComponent,
    AppComponent,
    PostDetailComponent,
    PostListComponent,
    CommentComponent,
    UpvoteComponent,
    NewCommentComponent
  ],
  bootstrap: [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)