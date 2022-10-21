import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  UserModel = new User();
  
  // Validating Login

  ValidationLogin() {

    let Email = this.UserModel.email;
    let Password = this.UserModel.password;

    if ((Email === 'meuemail@exemplo.com') && (Password === 'minhasenha123')) {
        const success = document.createElement('samp');

        success.innerText = 'Login executado com sucesso!';

        document.getElementById('PasswordContainer')!.appendChild(success);
        success.setAttribute ('id', 'success');
        document.getElementById('success')!.style.color = 'hsl(120, 100%, 35%)';
    
        setTimeout(() => {
            success.style.display = 'none';
        }, 1000);

    } else {
        const failure = document.createElement('samp');

        failure.innerText = 'Senha ou e-mail incorretos!';

        document.getElementById('PasswordContainer')!.appendChild(failure);
        failure.setAttribute('id', 'failure');
        document.getElementById('failure')!.style.color = 'hsl(0, 100%, 35%)';

        setTimeout(() => {
            failure.style.display = 'none';    
        }, 1000);
    }
  }

}
