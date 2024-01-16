import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";
import * as gPhoneVal from "google-libphonenumber";

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneUtil = gPhoneVal.PhoneNumberUtil.getInstance();

    if (!control.value) {
      return null; // Return null if the control value is empty
    }

    const region = control.value.region; // Replace this with the appropriate region code
    try {
      const parsedNumber = phoneUtil.parse(control.value, region);
      const isValid = phoneUtil.isValidNumber(parsedNumber);
      return isValid ? null : { invalidPhoneNumber: true };
    } catch (error) {
      return { invalidPhoneNumber: true }; // Invalid phone number format
    }
  };
}
