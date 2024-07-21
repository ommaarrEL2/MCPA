import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { SystemSettingService } from '../../services/systemSetting.service';

@Component({
  selector: 'app-configure-system-settings',
  templateUrl: './configure-system-settings.component.html',
  styleUrl: './configure-system-settings.component.scss',
})
export class ConfigureSystemSettingsComponent {
  systemForm!: FormGroup;
  systems!: any;
  constructor(
    private fb: FormBuilder,
    private _SystemSettingService: SystemSettingService,
    private _MessageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
    // this.getAllSystemSetting();
  }

  initForm() {
    this.systemForm = this.fb.group({
      serverIP: '',
      serverURL: '',
      databaseServerIP: '',
      customerLogo: '',
      customerName: '',
      licenseManager: '',
      softwareVersion: '',
      databaseCredentials: '',
    });
  }

  getAllSystemSetting() {
    this._SystemSettingService.getAllSystemSetting().subscribe({
      next: (data) => {
        this.systems = data;
      },
    });
  }

  onSubmit() {
    const formData = this.systemForm.value;
    this._SystemSettingService.createSystemSetting(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.systemForm.reset();
          // this.getAllSystemSetting();
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
