export interface VictimDetail {
  id: string;
  lat: string;
  lon: string;
  medicalNeeded: boolean;
  numberOfPeople: number;
  victimName: string;
  victimPhoneNumber: string;
  timeStamp: number;
  status: string;
}

export default interface SearchInput {
  name: string;
}
