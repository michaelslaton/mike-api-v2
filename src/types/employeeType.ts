type EmployeeType = {
  id: number;
  name: string;
  birthday?: Date | null;
  rank: number;
  description: string;
  status: boolean;
  locked: boolean;
  uid: string;
  admin: boolean;
};

export type NewEmployeeType = {
  name: string;
  birthday?: Date | null;
  uid: string;
  description: string;
};

export default EmployeeType;