export interface IMachineReq {
  name: string;
  location: string;
  function: string;
  standerdSpeed: string;
  code: string;
  lineId: number;
  plantId: number;
  machineTypeId: number;
}
export interface IMachineType {
  id: number;
  type: string;
}
