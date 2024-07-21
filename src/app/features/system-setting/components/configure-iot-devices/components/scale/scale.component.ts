import { LineService } from './../../services/line.service';
import { PlantService } from './../../services/plant.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ScaleService } from './../../services/scale.service';
import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { SelectList } from '../../../../../../core/models/select-list';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrl: './scale.component.scss',
})
export class ScaleComponent {
  scaleForm!: FormGroup;
  systems!: any;
  plantsList!: any;
  lines!: any;
  roomType!: any;
  scaleType!: any;
  typeList!: SelectList[];
  constructor(
    private fb: FormBuilder,
    private _ScaleService: ScaleService,
    private _MessageService: MessageService,
    private _PlantService: PlantService,
    private _LineService: LineService,
    private _RoomService: RoomService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllPlants();
    this.getAllLines();
    this.getAllRooms();
    this.getAllScalesType();
  }

  initForm() {
    this.scaleForm = this.fb.group({
      name: '',
      location: '',
      code: '',
      uid: '',
      qrCode: '',
      standerInterface: '',
      capacity: '',
      plantId: '',
      lineId: '',
      roomId: '',
      scaleTypeId: '',
    });
  }
  getAllPlants() {
    this._PlantService.getAllPlants().subscribe({
      next: (data) => {
        this.plantsList = data;
      },
    });
  }

  getAllLines() {
    this._LineService.getAllLines().subscribe({
      next: (data) => {
        this.lines = data;
      },
    });
  }
  getAllRooms() {
    this._RoomService.getAllRooms().subscribe({
      next: (data) => {
        this.roomType = data;
      },
    });
  }
  getAllScale() {
    this._ScaleService.getAllScales().subscribe({
      next: (data) => {
        this.systems = data;
      },
    });
  }
  getAllScalesType() {
    this._ScaleService.getAllScsalesType().subscribe({
      next: (data) => {
        this.typeList = data;
      },
    });
  }

  onSubmit() {
    const formData = this.scaleForm.value;
    this._ScaleService.createScale(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.scaleForm.reset();
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
