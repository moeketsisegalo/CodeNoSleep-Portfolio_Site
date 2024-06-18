import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup; // Add '!' to tell TypeScript that it will be initialized before use
  submitting = false;
  succeeded = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      telephone: [''] // Optional: You can add validators if needed
    });
  }

  submitForm() {
    if (this.contactForm.invalid || this.submitting) {
      return;
    }

    this.submitting = true;
    const formData = this.contactForm.value;

    // Send form data to backend server
    this.http.post<any>('https://formspree.io/f/xleqbkrb', formData)
      .subscribe(
        response => {
          this.submitting = false;
          this.succeeded = true;
          this.contactForm.reset();
        },
        error => {
          console.error('Error submitting form:', error);
          this.submitting = false;
        }
      );
  }
}
