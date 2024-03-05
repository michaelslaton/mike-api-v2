import EmployeeType from "./employee.type";

type ProjectType = {
  id: number;
  name: string;
  host: string;
  hostId: number;
  attending?: EmployeeType[];
  date: string;
  type: string;
  description: string;
  locked: boolean;
  status: boolean;
};

export type NewProjectType = {
  name: string;
  host: number;
  type: string;
  date: string;
  description: string;
};

export default ProjectType;