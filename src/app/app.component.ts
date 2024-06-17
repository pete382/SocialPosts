import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialPostsComponent } from "./social-posts/social-posts.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SocialPostsComponent]
})
export class AppComponent {
  title = 'socialposts';
}
