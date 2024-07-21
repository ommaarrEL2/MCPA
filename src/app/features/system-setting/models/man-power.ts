export interface IManPowerReq {
  name: string;
  photo: string;
  qrCode: string;
  uid: string;
  createdby: string;
  status: number;
  departmantId: number;
}

export interface IManPowerResponse {
  id: number;
  name: string;
  photo: string;
  qrCode: string;
  uid: string;
  createdby: string;
  status: number;
  departmantId: number;
  departmant: IDepartmentList;
}

export interface IDepartmentList {
  id: number;
  name: string;
}
