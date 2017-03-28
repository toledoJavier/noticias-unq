import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import PostService from "../services/post.service"

@Component({
  selector: 'postDetail',
  inputs: [ 'post' ],
  template: `<post [data]="post"></post>
              <upvote></upvote>

              <h2>Comentarios:</h2>
              <article>
                <comment *ngFor="let comment of post.comments" [data]="comment"></comment>
              </article>
              <newComment></newComment>
              <a [routerLink]="['/noticias']">Atras</a>`
})

export default class PostDetailComponent {
  constructor(route, postService) {
    this.route = route
    this.postService = postService
  }

  ngOnInit() {
      this.post = {}
      this.route.params.subscribe(params => {
        //cuando algo un parametro cambia
        this.postService.getPost(params.id)
            .then(post => this.post = post)
            .catch(e => console.log(e));
      });
  }
}

PostDetailComponent.parameters = [
  ActivatedRoute, PostService
]