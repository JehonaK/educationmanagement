import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';


export class EventFormValidators implements Validators {

    static isDateInThePast(control: AbstractControl) {
        return (new Date(control.value)) < new Date() ? { valid: false } : null;
    }

    static isInHours(control: AbstractControl) {
        return control.value < 0 || control.value > 24 ? { valid: false } : null;
    }

    static isInMinutes(control: AbstractControl) {
        return control.value < 0 || control.value >= 60 ? { valid: false } : null;
    }

    static validateEventLength(control: AbstractControl) {
        if (control.get('startingTimeHours').value > control.get('endingTimeHours').value) {
            control.get('startingTimeHours').setErrors({ valid: false });
            return null;
        }

        if (control.get('startingTimeHours').value == control.get('endingTimeHours').value) {
            if (control.get('startingTimeMinutes').value > control.get('endingTimeMinutes').value) {
                control.get('startingTimeMinutes').setErrors({ valid: false });
                return null;
            }
            if (control.get('startingTimeMinutes').value == control.get('endingTimeMinutes').value
                || control.get('startingTimeMinutes').value + 30 > control.get('endingTimeMinutes').value) {
                control.get('startingTimeMinutes').setErrors({ valid: false });
                return null;
            }

        }
        return null;
    }

}