export interface UserInfo {
  email: string | undefined;
}

export interface Subcription {
  setSubscription: React.Dispatch<React.SetStateAction<boolean>>;
}
