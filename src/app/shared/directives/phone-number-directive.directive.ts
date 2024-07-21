import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneNumberDirective]',
})
export class PhoneNumberDirectiveDirective {
  private regex: RegExp = new RegExp(/^(010|011|012|015)\d{0,8}$/);
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowRight',
  ];

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow special keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    // Get the current value of the input field
    const current: string = this.el.nativeElement.value;
    // Get the proposed new value by inserting the new character
    const position = this.el.nativeElement.selectionStart;
    const next: string = [
      current.slice(0, position),
      event.key,
      current.slice(position),
    ].join('');

    // Prevent the default action if the new value does not match the regex
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
