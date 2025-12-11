export interface Guest {
  name: string;
  count: number;
  message: string;
}

export interface PartyDetails {
  date: string;
  time: string;
  location: string;
  address: string;
  mapLink: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}