type AwardType = {
  id: number;
  name: string;
  type: string;
  holder: number;
  retired: boolean;
};

export type NewAwardType = {
  name: string;
  type?: string;
  holder?: number;
  retired?: boolean;
};

export default AwardType;