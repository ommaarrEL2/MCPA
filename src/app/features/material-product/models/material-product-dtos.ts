export interface activeBatches {
  id: number;
  batchCode: string;
  productName: string;
}

export interface scaleStatus {
  scaleId: string;
  scaleStatus: string;
  capacity: number;
  availability: number;
}
