import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { MainService } from 'src/app/core/services/main.service';
import { ErrorMessage } from 'src/app/global/errorMessage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  countries = [];
  selectedCountries = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }

  login() {
    this.loading = true;
    this.authService.login(this.form.value).subscribe(res => {
      console.log(`: -----------------------------------`);
      console.log(`LoginComponent -> login -> res`, res);
      console.log(`: -----------------------------------`);
      localStorage.setItem('token', res.access_token);
      this.userService.getProfiel().subscribe(res => {
        this.userService.userData.next(res);
        this.router.navigate(['books']);
      }, err => {
        this.mainService.showErrorSnackBar(ErrorMessage(err));
      });
    }, err => {
      this.mainService.showErrorSnackBar(ErrorMessage(err));
      this.loading = false;
    });
  }

}
