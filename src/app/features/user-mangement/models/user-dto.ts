export interface userDto {
  full_Name: string;
  user_Name: string;
  email: string;
  phoneNumber: string;
  password: string;
  userRole: string;
  usergroup_Id: number;
  claims: Claim[];
}

export interface Claim {
  type: string;
  value: string;
}

export interface claimsList {
  label: string;
  value: string;
  items: Item[];
}

export interface Item {
  label: string;
  value: string;
}
