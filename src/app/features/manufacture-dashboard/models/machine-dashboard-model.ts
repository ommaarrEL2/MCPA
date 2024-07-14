export interface MachineDashboardModel {}

export interface materialList {
  code: number;
  name: string;
  quantity: number;
  warehouseID: number;
  date: Date;
}

export interface manpowerList {
  code: number;
  name: string;
  department: string;
}

export interface machineList {
  machineID: number;
  machineStatus: string;
  activeBeacons: number;
  inactiveBeacons: number;
  availability: string;
}

export interface machineSpeed {
  data: machineSpeedData[];
  sucess: true;
  code: string;
  message: string;
}

export interface machineSpeedData {
  speed: number;
  timeStamp: string;
}
