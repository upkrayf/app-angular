import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../../shared/components/sidebar/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class AdminDashboard {

  kpiCards = [
    { label: 'Toplam Kullanıcı', value: '12,430', change: '+8.2% bu ay', positive: true },
    { label: 'Aktif Mağaza', value: '342', change: '+12 yeni', positive: true },
    { label: 'Platform Geliri', value: '$984K', change: '+15.4%', positive: true },
    { label: 'Askıya Alınan', value: '23', change: '+3 bu hafta', positive: false }
  ];

  chartBars = [
    { height: '40%', color: '#6c63ff' },
    { height: '55%', color: '#6c63ff' },
    { height: '45%', color: '#6c63ff' },
    { height: '70%', color: '#6c63ff' },
    { height: '60%', color: '#6c63ff' },
    { height: '80%', color: '#6c63ff' },
    { height: '75%', color: '#534ab7' },
    { height: '90%', color: '#534ab7' },
    { height: '85%', color: '#534ab7' },
    { height: '100%', color: '#6c63ff' },
  ];

  activities = [
    { color: '#1d9e75', text: 'Yeni mağaza onaylandı: TechStore', time: '2dk' },
    { color: '#e24b4a', text: 'Kullanıcı askıya alındı: user#4821', time: '15dk' },
    { color: '#ba7517', text: 'Yeni kategori eklendi: Elektronik', time: '1sa' },
    { color: '#378add', text: 'Sistem güncellendi: v2.4.1', time: '3sa' },
    { color: '#1d9e75', text: 'Yeni kullanıcı kaydı: 142 bugün', time: '5sa' },
  ];

  users = [
    { name: 'Ahmet Yılmaz', role: 'Corporate', email: 'ahmet@techstore.com', date: '12 Mar 2026', status: 'Aktif' },
    { name: 'Zeynep Kaya', role: 'Individual', email: 'zeynep@gmail.com', date: '28 Mar 2026', status: 'Aktif' },
    { name: 'Murat Demir', role: 'Corporate', email: 'murat@shop.com', date: '02 Nis 2026', status: 'Beklemede' },
    { name: 'Elif Şahin', role: 'Individual', email: 'elif@hotmail.com', date: '05 Nis 2026', status: 'Askıda' },
  ];
}