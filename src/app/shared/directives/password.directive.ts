import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPassword]',
})
export class PasswordDirective {
  private regex: RegExp = new RegExp(
    /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Z][A-Za-z\d!@#$%^&*(),.?":{}|<>]*$/
  );
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
