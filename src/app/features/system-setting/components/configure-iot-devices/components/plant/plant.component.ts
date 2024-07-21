import { PlantService } from './../../services/plant.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SystemSettingService } from '../../../../services/systemSetting.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.scss',
})
export class PlantComponent {
  plantForm!: FormGroup;
  systems!: any;
  constructor(
    private fb: FormBuilder,
    private _PlantService: PlantService,
    private _MessageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.plantForm = this.fb.group({
      name: '',
      location: '',
    });
  }

  getAllPlants() {
    this._PlantService.getAllPlants().subscribe({
      next: (data) => {
        this.systems = data;
      },
    });
  }

  onSubmit() {
    const formData = this.plantForm.value;
    this._PlantService.createPlant(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.plantForm.reset();
          // this.getAllPlants();
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
