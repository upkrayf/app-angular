import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { AiAssistant } from './components/ai-assistant/ai-assistant';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, AiAssistant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aap');
}
