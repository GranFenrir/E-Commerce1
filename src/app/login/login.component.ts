
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";
  loginError: string="";

  constructor(private authService: AuthService, private router:Router) {}

  login() {
    /*
    const credentials = { username: this.username, password: this.password };

    this.authService.login(credentials).subscribe(
      (response) => {
        this.authService.saveToken(response.token);
      },
      (error) => {
        this.loginError = 'Invalid username or password';
      }
    );
    */

    if (this.username === 'kullanici' && this.password === 'sifre') {
      console.log('Giriş başarılı');
      this.loginError = '';
      this.router.navigate(['/home']);
    } else {
      console.log('Giriş başarısız');
      this.loginError = 'Kullanıcı adı veya şifre hatalı.';
    }

  }
}
