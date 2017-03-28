import { Component } from '@angular/core';

@Component({
  selector: 'comment',
  inputs: [ 'data' ],
  template: `<article>
	  			<div class="comment">
	              {{data.body}} <span class="author">{{data.author}}</span>
	            </div>
            </article>`
})
export default class CommentComponent {
}