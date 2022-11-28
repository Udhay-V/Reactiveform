import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   form =new  FormGroup({

    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    
   });

   get email(): any {
    return this.form.get('email');
  }

  get password(): any {
    return this.form.get('password');
  }
  
  

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }
  login() 
  {

    if (this.form.invalid) {
      for (const control of Object.keys(this.form.controls)) {
        this.form.controls[control].markAsTouched();
      }
      return;
    }
    
    let data = [] 
   data.push(this.form.value);
   localStorage.setItem('form', JSON.stringify(data));
   console.log(data);


  }
}
