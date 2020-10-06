import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * This service include common function for keep login user data or get data from localstorage & ...
 */
@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(private snackBar: MatSnackBar) { }

  convertNumberPriceToNumber(credit) {
    console.log(`MainService -> convertNumberPriceToNumber -> credit`, credit)
    if (credit) {
      return credit.toString().replace(/,/g, '');
    }
  }
  convertNumberToNumberPrice(credit) {
    return credit ? parseInt(
      credit.toString().replace(/,/g, ''), 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
  }
  showSnackBar(message: string, action?: string, duration?: number) {
    this.snackBar.open(message, action || null, {
      duration: duration || 4000,
      direction: 'rtl',
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'customSnackBar'
    });
  }

  showErrorSnackBar(message: string, action?: string, duration?: number) {
    this.snackBar.open(message, action || null, {
      duration: duration || 4000,
      direction: 'rtl',
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'customErrorSnackBar'
    });
  }

  static convert(data) {
    return data
      .replace(/۰/g, '0')
      .replace(/۱/g, '1')
      .replace(/۲/g, '2')
      .replace(/۳/g, '3')
      .replace(/۴/g, '4')
      .replace(/۵/g, '5')
      .replace(/۶/g, '6')
      .replace(/۷/g, '7')
      .replace(/۸/g, '8')
      .replace(/۹/g, '9')
      .replace(/٠/g, '0')
      .replace(/١/g, '1')
      .replace(/٢/g, '2')
      .replace(/٣/g, '3')
      .replace(/٤/g, '4')
      .replace(/٥/g, '5')
      .replace(/٦/g, '6')
      .replace(/٧/g, '7')
      .replace(/٨/g, '8')
      .replace(/٩/g, '9');
  }
}
