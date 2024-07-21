import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AddUserService } from '../../services/add-user.service';
import { claimsList, userDto } from '../../models/user-dto';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  displayModal: boolean = false;
  form!: FormGroup;
  imageUrl: string = '';
  uploadedFile!: File; // Property to store the uploaded file
  imageUploaded: boolean = false;
  files: any[] = [];
  typeList!: any[];
  userId!: number;
  usersList!: any[];
  selectedClaims: any;
  claimsList!: claimsList[];
  rolesList!: any[];

  user: userDto = {
    full_Name: '',
    user_Name: '',
    email: '',
    phoneNumber: '',
    password: '',
    userRole: '',
    usergroup_Id: 0,
    claims: [],
  };

  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private addUserService: AddUserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm(0);
    this.getAllUsers();
    this.getAllClaims();
    this.getAllRoles();
  }

  initForm(data: any) {
    this.form = this.fb.group({
      full_Name: [data.userAccessName || '', [Validators.required]],
      user_Name: [data.userName || '', [Validators.required]],
      email: [data.email || '', [Validators.email]],
      password: [
        data.password || '',
        [
          Validators.pattern(
            /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Z][A-Za-z\d!@#$%^&*(),.?":{}|<>]*$/
          ),
        ],
      ],
      phoneNumber: [
        data.phoneNumber || '',
        Validators.pattern(/^(010|011|012|015)\d{8}$/),
      ],
      userRole: data.userRole || null,
      usergroup_Id: 0,
    });
  }

  transformData(data: any[], checked: string[]): any[] {
    return data.reduce((acc, item) => {
      const categoryClaims = item.items.map((claim: { label: string }) => ({
        type: claim.label,
        value: `${checked.includes(claim.label)}`,
      }));
      return acc.concat(categoryClaims);
    }, []);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    if (this.userId) {
      this.updateUser();
      return;
    }
    this.user = this.form.value;
    const res = this.transformData(this.claimsList, this.selectedClaims);
    this.user.claims = res;
    this.addUserService.addUser(this.user).subscribe({
      next: (data) => {
        if (data.statusCode == 200) {
          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: `${data.message}`,
          });
          this.reset();
          this.getAllUsers();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'error',
            detail: `${data.message}`,
          });
        }
      },
    });
  }

  reset() {
    this.form.reset();
    this.selectedClaims = [];
  }

  confirmDelete(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this User?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteUser(id);
      },
    });
  }

  getAllClaims() {
    this.addUserService.getAllClaims().subscribe({
      next: (data) => {
        const transformedData = data.data.map(
          (item: { category: string; claims: any[] }) => ({
            label: item.category,
            value: item.category.toLowerCase().replace(/ /g, '-'),
            items: item.claims.map((claim) => ({
              label: claim,
              value: claim,
            })),
          })
        );
        this.claimsList = transformedData;
      },
    });
  }

  getAllRoles() {
    this.addUserService.getAllRoles().subscribe({
      next: (data) => {
        this.rolesList = data.data;
      },
    });
  }

  deleteUser(id: string) {
    this.addUserService.deleteUser(id).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: `${data.message}`,
          });
          this.getAllUsers();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'error',
            detail: `${data.message}`,
          });
        }
      },
    });
  }

  getAllUsers() {
    this.addUserService.getAllUsers().subscribe({
      next: (data) => {
        this.usersList = data;
      },
    });
  }

  updateUser() {
    const formData = this.form.value;
    formData.id = this.userId;
    console.log(formData);

    this.addUserService.updateUser(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.form.reset();
          this.getAllUsers();
          this.userId = 0;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${data.message}`,
          });
        }
      },
    });
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
}
