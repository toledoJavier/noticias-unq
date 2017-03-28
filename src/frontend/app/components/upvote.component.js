import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import PostService from "../services/post.service"

@Component({
  selector: 'upvote',
  inputs: [ 'post' ],
  template: `<button type="button" (click)="upvote()">Votar Noticia</button>`
})

export default class UpvoteComponent {

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

  upvote() {
    console.log(this.post)
    console.log(this.post._id)
    this.postService.upvote(this.post._id)
  }
}

UpvoteComponent.parameters = [
  ActivatedRoute, PostService
]