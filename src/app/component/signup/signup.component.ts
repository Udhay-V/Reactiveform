
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;   
  constructor(private router:Router,private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      mobileno: new FormControl('', [Validators.required]),
      emailid: new FormControl('', [Validators.required,Validators.email]),
      password: ['', [Validators.required]],
      confirmpassword: ['']
    }, { validator: this.checkPasswords });
  }
  ngOnInit(): void {
    
  }

  get name(): any {
    return this.form.get('name');
  }

  get mobileno(): any {
    return this.form.get('mobileno');
  }

  get emailid(): any {
    return this.form.get('emailid');
  }

  get password(): any {
    return this.form.get('password');
  }

  get confirmpassword(): any {
    return this.form.get('confirmpassword');
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirmpassword'].value;

    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit(): void {
   
    if (this.form.invalid) 
    {
      for (const control of Object.keys(this.form.controls)) 
      {
        this.form.controls[control].markAsTouched();
      }
      return;
    }

 
    let data = []
    
    data.push(this.form.value);
    localStorage.setItem('form', JSON.stringify(data));
    this.router.navigate(['login']);
    console.log(data); 
          
  }
    
}

 
