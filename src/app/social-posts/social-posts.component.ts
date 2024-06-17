import { Component, model } from '@angular/core';
import { Post } from '../models/post';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
    selector: 'app-social-posts',
    standalone: true,
    templateUrl: './social-posts.component.html',
    styleUrl: './social-posts.component.css',
    imports: [PostFormComponent,SinglePostComponent]
})
export class SocialPostsComponent {

AllPosts:Post[] = [
  {
title: "test",
thought: "Can this work?"

},
{

title: "Hello",
thought: "Might as well..."

}

] 

addPost(p:Post)
{
 this.AllPosts.push(p);

}


}
