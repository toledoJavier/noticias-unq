import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import PostService from "../services/post.service"

@Component({
  selector: 'newComment',
  template: `<form>
              <input [(ngModel)]="data.author" placeholder="Titulo" name="title">
              <textarea [(ngModel)]="data.body" placeholder="Contenido" name="content"></textarea>

              <button type="button" (click)="onSubmit()">Publicar Comentario</button>
            </form>`
})
export default class NewCommentComponent {
  constructor(route, postService) {
    this.data = {}
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

  onSubmit() {
    console.log(this.post)
    console.log(this.data)
    this.postService.addComment(this.post._id, this.data)
    this.data = {}
  }
}

NewCommentComponent.parameters = [
  ActivatedRoute, PostService
]
  
