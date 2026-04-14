import { Component } from '@angular/core';
import { Sidebar } from "../../../shared/components/sidebar/sidebar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class CorporateDashboard {

}
