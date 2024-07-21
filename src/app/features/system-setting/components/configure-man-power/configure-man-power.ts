import { PlantService } from './../configure-iot-devices/services/plant.service';
import { IManPowerResponse, IDepartmentList } from './../../models/man-power';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ManPowerService } from './../../services/man-power.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
@Component({
  selector: 'app-configure-human-capital',
  templateUrl: './configure-man-power.component.html',
  styleUrl: './configure-man-power.scss',
})
export class ConfigureManPowerComponent {
  displayModal: boolean = false;
  ManPowerform!: FormGroup;
  imageUrl: string = '';
  uploadedFile!: File; // Property to store the uploaded file
  imageUploaded: boolean = false;
  //ngx file drop
  files: NgxFileDropEntry[] = [];
  typeList!: IDepartmentList[];
  productId!: number;
  products!: IManPowerResponse[];
  plantsList!: any;
  constructor(
    private fb: FormBuilder,
    private _ManPowerService: ManPowerService,
    private _MessageService: MessageService,
    private confirmationService: ConfirmationService,
    private _PlantService: PlantService
  ) {}

  ngOnInit(): void {
    this.initForm(0);
    this.getAllManPowers();
    this.getAllDepartmentType();
    this.getAllPlants();
  }

  initForm(data: any) {
    this.ManPowerform = this.fb.group({
      name: [data.name || '', [Validators.required]],
      qrCode: [data.qrCode || '', [Validators.required]],
      photo: data.photo || '',
      createdby: data.createdby || '',
      uid: data.uid || '',
      status: data.status || '',
      departmantId: data.departmantId || '',
      plantId: data.plantId || '',
    });
  }
  getAllPlants() {
    this._PlantService.getAllPlants().subscribe({
      next: (data) => {
        this.plantsList = data;
        console.log(this.plantsList);
      },
    });
  }

  onSubmit() {
    if (this.ManPowerform.invalid) {
      return;
    }
    if (this.productId) {
      this.updateManPower();
      return;
    }
    const formData = this.ManPowerform.value;
    this._ManPowerService.createManPower(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.ManPowerform.reset();
          this.getAllManPowers();
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

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this Sku?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteManPower(id);
      },
    });
  }

  deleteManPower(id: number) {
    this._ManPowerService.deleteManPower(id).subscribe({
      next: (data) => {
        this.getAllManPowers();
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Confirmed',
            detail: `${data.message}`,
          });
        } else {
          this._MessageService.add({
            severity: 'error',
            summary: 'error',
            detail: `${data.message}`,
          });
        }
      },
    });
  }

  getAllManPowers() {
    this._ManPowerService.getAllManPowers().subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }

  getAllDepartmentType() {
    this._ManPowerService.getAllDepartmentType().subscribe({
      next: (data) => {
        this.typeList = data;
      },
    });
  }

  updateManPower() {
    const formData = this.ManPowerform.value;
    formData.id = this.productId;
    this._ManPowerService.updateManPower(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.ManPowerform.reset();
          this.getAllManPowers();
          this.productId = 0;
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

  dropped(files: NgxFileDropEntry[]) {
    const droppedFile = files[0]; // Access the first dropped file
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        // Here you can access the dropped file
        console.log('Dropped file:', file);
        // Assuming imageUrl is the URL to display the uploaded image
        this.imageUrl = URL.createObjectURL(file);

        this.uploadedFile = file;

        this.imageUploaded = true;
      });
    }
  }
  fileOver(event: any) {
    console.log(event);
  }
  fileLeave(event: any) {
    console.log(event);
  }
}
