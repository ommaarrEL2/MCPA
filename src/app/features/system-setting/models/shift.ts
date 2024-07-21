export interface IShiftReq {
  startTime: string;
  endTime: string;
  orderName: string;
}
export interface IShiftResponse {
  id: number;
  orderName: string;
  startTime: string;
  endTime: string;
  durationTime: string;
}
