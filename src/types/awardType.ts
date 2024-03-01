type AwardType = {
  id: number;
  name: string;
  type: string;
  holder: number;
  awardedFor?: string;
  retired: boolean;
};

export type NewAwardType = {
  name: string;
  type?: string;
  holder?: number;
  awardedFor?: string;
  retired?: boolean;
};

export default AwardType;