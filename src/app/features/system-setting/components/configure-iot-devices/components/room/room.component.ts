import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent {
  roomForm!: FormGroup;
  rooms!: any;
  constructor(
    private fb: FormBuilder,
    private _RoomService: RoomService,
    private _MessageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.roomForm = this.fb.group({
      name: '',
      location: '',
      function: '',
      qrCode: '',
      num: '',
      uid: '',
    });
  }

  getAllRooms() {
    this._RoomService.getAllRooms().subscribe({
      next: (data) => {
        this.rooms = data;
      },
    });
  }

  onSubmit() {
    const formData = this.roomForm.value;
    this._RoomService.createRoom(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.roomForm.reset();
        } else {
          this._MessageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${data.message}`,
          });
        }
      },
    });
  }
}
