export interface ILineReq {
  name: string;
  plantId: number;
  linesPreShift: ILinesPreShift[];
}

export interface ILinesPreShift {
  lineId: number;
  shiftId: number;
}
