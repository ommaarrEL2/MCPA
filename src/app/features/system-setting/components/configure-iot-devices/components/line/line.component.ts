import { LineService } from './../../services/line.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PlantService } from '../../services/plant.service';
import { SelectList } from '../../../../../../core/models/select-list';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss',
})
export class LineComponent {
  lineForm!: FormGroup;
  systems!: any;
  shiftList!: any;
  plantsList!: any;
  lines!: any;
  shifts!: any;
  selectedShifts!: any[];

  constructor(
    private fb: FormBuilder,
    private _LineService: LineService,
    private _MessageService: MessageService,
    private _PlantService: PlantService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllPlants();
    this.getAllLines();
    this.getAllShifts();
  }

  initForm() {
    this.lineForm = this.fb.group({
      name: '',
      plantId: '',
      linesPreShift: '',
    });
  }

  getAllShifts() {
    this._LineService.getAllShifts().subscribe({
      next: (data) => {
        this.shiftList = data;
      },
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

  onSubmit() {
    let shifts: { shiftId: number }[];
    if (this.selectedShifts.length > 0) {
      shifts = this.selectedShifts.map((x) => ({
        shiftId: x,
      }));
      this.lineForm.get('linesPreShift')?.setValue(shifts);
    }
    const formData = this.lineForm.value;
    this._LineService.createLine(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.lineForm.reset();
          this.selectedShifts = [];
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
