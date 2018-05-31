import {Injectable} from '@nestjs/common';
import {UserModel} from './user.model';
import {CreateUserDto} from './create-user.dto';

@Injectable()
export class UserService {
  private readonly users: Array<UserModel>;

  constructor() {
    this.users = [];
  }

  /**
   * Returns all existing users
   *
   * @returns {UserModel[]}
   */
  list(): UserModel[] {
    return this.users;
  }

  /**
   * Returns user array filtered by specified id or false
   *
   * @param {number} id
   * @returns {UserModel[] | boolean}
   */
  get(id: number): UserModel[] {
    return this.users && this.users.filter(user => user.id === id);
  }

  /**
   * Returns newly created user
   *
   * @param params
   * @returns {UserModel}
   */
  create(params: CreateUserDto): UserModel {
    const user: UserModel = {
      id: this.users.length + 1,
      email: params.email,
      forename: params.forename,
      surname: params.surname,
      created: params.created,
    };
    this.users.push(user);
    return user;
  }

  /**
   * Updates specified user
   *
   * @param {number} id
   * @param params
   * @returns {UserModel}
   */
  update(id: number, params: any): UserModel {
    const index = this.users.findIndex((user) => user.id === id);
    const updated = {...this.users[index], ...params};
    this.users.splice(index, 1, updated);
    return updated;
  }

  /**
   * Deletes specified user
   *
   * @param {number} id
   * @returns {boolean}
   */
  delete(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    return !!this.users.splice(index, 1);
  }

}
