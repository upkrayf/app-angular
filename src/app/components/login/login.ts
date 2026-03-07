import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Yönlendirme yapabilmek için Router'ı çağırıyoruz
  constructor(private router: Router) { }

  // Butona tıklandığında çalışacak fonksiyon
  onLogin(event: Event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller

    // İleride buraya gerçek veritabanı şifre kontrolü ekleyeceğiz.
    // Şimdilik direkt ürünler sayfasına yönlendiriyoruz.
    this.router.navigate(['/products']);
  }
}