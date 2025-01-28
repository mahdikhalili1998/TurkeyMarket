export interface IUserDetail {
  name: string;
  lastName: string;
  nationalId: string;
  email: string;
  phoneNumber: string;
  contry: string;
  city: string;
  PostalCode: string;
  addresTitle: string;
  address: string;
}

export interface IInpuFill {
  userPhoneNumber?: string;
  userCountry?: string;
  userCity?: string;
  nextStep?: boolean;
  setUserDetail: any;
}
