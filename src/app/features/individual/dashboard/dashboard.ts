import { Component } from '@angular/core';
import { AiChat } from '../../../shared/components/ai-chat/ai-chat';
import { Sidebar } from "../../../shared/components/sidebar/sidebar";

@Component({
  selector: 'app-dashboard',
  imports: [AiChat, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class IndividualDashboard {

}
