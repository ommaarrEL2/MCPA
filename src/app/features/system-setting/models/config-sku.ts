export interface ISkuReq {
  name: string;
  code: string;
  createdBy: string;
  creationDate: string;
  uom: string;
  status: number;
  description: string;
  productCategoryId: number;
}

export interface ISkuResponse {
  name: string;
  code: string;
  createdBy: string;
  creationDate: string;
  uom: string;
  status: number;
  description: string;
  productCategoryName: string;
}
