import { IMachineType } from './../../models/machine';
import { LineService } from './../../services/line.service';
import { PlantService } from './../../services/plant.service';
import { MachineService } from './../../services/machine.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ScaleService } from '../../services/scale.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.scss',
})
export class MachineComponent {
  machineForm!: FormGroup;
  machines!: any;
  plantsList!: any;
  lines!: any;
  machineType!: IMachineType[];
  constructor(
    private fb: FormBuilder,
    private _MachineService: MachineService,
    private _MessageService: MessageService,
    private _PlantService: PlantService,
    private _LineService: LineService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllLines();
    this.getAllPlants();
    this.getAllmachineType();
  }

  initForm() {
    this.machineForm = this.fb.group({
      name: '',
      location: '',
      function: '',
      standerdSpeed: '',
      code: '',
      lineId: '',
      plantId: '',
      machineTypeId: '',
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
  getAllMachines() {
    this._MachineService.getAllMachines().subscribe({
      next: (data) => {
        this.machines = data;
      },
    });
  }
  getAllmachineType() {
    this._MachineService.getAllmachineType().subscribe({
      next: (data) => {
        this.machineType = data;
      },
    });
  }
  onSubmit() {
    const formData = this.machineForm.value;
    this._MachineService.createMachine(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.machineForm.reset();
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
