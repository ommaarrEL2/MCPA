import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MessageService } from 'primeng/api';
declare var particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  islognIn = true;
  loginForm!: FormGroup;
  isloading: boolean = false;
  returnUrl: any;
  errblock: boolean = false;
  ShowErr: boolean = false;
  UserEmail: string | null = '';
  messageLogin: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private AuthService: LoginService,
    private messageService: MessageService // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('Token');
    localStorage.setItem('isLoggedin', 'false');
    this.initForm();
    particlesJS('particles-js', {
      particles: {
        number: { value: 150, density: { enable: true, value_area: 1000 } },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: 'img/github.svg', width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
    var count_particles;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // onLoggedin(e: Event) {
  //   e.preventDefault();
  //   localStorage.setItem('isLoggedin', 'true');
  //   if (localStorage.getItem('isLoggedin')) {
  //     this.router.navigate([this.returnUrl]);
  //   }
  // }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      // email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onLoggedin(loginForm: any) {
    if (loginForm.valid) {
      this.isloading = true;
      this.robot();
      this.AuthService.login(loginForm.value).subscribe((res: any) => {
        if (res.status == 200) {
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('Token', res.token.token);
          this.isloading = false;
          // this.messageService.add({
          //   severity: 'success',
          //   summary: 'success',
          //   detail: `${res.message}`,
          // });
          this.router.navigate(['/home']);
          // if (localStorage.getItem('isLoggedin')) {
          //   this.router.navigate(['/']);
          // }
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'error',
            detail: `${res.message}`,
          });
          this.isloading = false;
        }
      });
    }
  }

  robot() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = this.messageLogin = `Welcome ${this.UserEmail}`;
    msg.rate = 1;
    speechSynthesis.speak(msg);
  }
}
