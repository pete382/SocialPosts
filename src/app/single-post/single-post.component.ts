import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Post } from '../models/post';
@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {

@Input() displayPost:Post = {
  title: "Funny tt might work!",
  thought:"Hello World"

} as Post; 


/* @Output() addEvent = new EventEmitter<Post>();
emitAdd():void
{
  this.addEvent.emit(this.displayPost);
} */
}