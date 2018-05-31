export interface UserModel {
  id: number;
  email: string;
  forename: string;
  surname: string;
  created: Date;
}

export interface UserIndexModel {
  index: number;
  user: UserModel
}
