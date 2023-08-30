export interface IBp {
  _id: string;
  diastolic: number;
  systolic: number;
  pulse: number;
  date: Date;
  user: string;
}

export interface IBpInputDTO {
  diastolic: number;
  systolic: number;
  pulse: number;
  date: Date;
  user: string;
}
