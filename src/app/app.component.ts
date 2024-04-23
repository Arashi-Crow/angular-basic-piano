import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'piano-app';

  doSound(sound:number): void {
    const audio = new Audio();
    audio.src = `../assets/sounds/note${sound}.wav`;
    audio.load();
    audio.play();
  }
}
