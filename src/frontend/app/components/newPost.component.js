import { Component } from '@angular/core';

import PostService from '../services/post.service';

@Component({
  selector: 'newPost',
  template: `Crear noticia:
            <form>
              <input [(ngModel)]="data.title" placeholder="Titulo" name="title">
              <textarea [(ngModel)]="data.content" placeholder="Contenido" name="content"></textarea>

              <button type="button" (click)="onSubmit()">Crear noticia</button>
            </form>`
})
export default class NewPostComponent {
  constructor(postService) {
    this.data = {}
    this.postService = postService
  }

  onSubmit() {
    console.log(this.data)
    this.postService.create(this.data)
    this.data = {}
  }
}

NewPostComponent.parameters = [
  PostService
]
