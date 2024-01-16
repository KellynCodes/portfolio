import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'kelly-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public contactForm!: FormGroup;
  public isSending = signal<boolean>(false);
  public errorMessage = signal<string | null>(null);
  public successMessage = signal<string | null>(null);
  public validatePhoneNumberRegex: any =
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(this.validatePhoneNumberRegex)]],
      date: [new Date().toDateString(), Validators.required],
      message: ['', [Validators.required, Validators.minLength(100)]],
    });
  }

  async onSubmit(): Promise<void> {
    if (!this.contactForm.valid) {
      this.toastr.error('Please fill all the fields', 'Error');
      return;
    }
    try {
      this.isSending.set(true);
      const response = await emailjs.send(
        'service_b1ay5nb',
        'template_h3ep0k4',
        {
          to_name: 'there',
          ...this.contactForm.value,
        },
        'CMVI5elZQNxHW2BEF'
      );
      if (response.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error(
          'Something unexpected happened while sending the message.Please try again.',
          'Error'
        );
        return;
        ``;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.success(
          `We have received your message.${this.contactForm.value.name}`,
          'Success'
        );
        this.contactForm.reset({ date: new Date().toDateString() });
        return;
      }
    } catch (error: any) {
      if (error?.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error('Message not sent. Try again.', 'Error');
        this.contactForm.reset({ date: new Date().toDateString() });
        return;
      }
    }
  }
}
