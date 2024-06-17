import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent{ 

formPost: Post={} as Post;
@Output() CreatedEvent = new EventEmitter<Post>();
display: boolean = false;

submitForm():void{
let newPost = {...this.formPost};
this.CreatedEvent.emit(newPost);
this.formPost = {} as Post;

}

toggleDisplay() {
  this.display = !this.display;
}
}
