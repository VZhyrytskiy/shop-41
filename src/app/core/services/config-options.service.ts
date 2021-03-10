import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
   }

  // тут задача стояла так, чтобы не все данные сохранять, а например какое-то подмножество данных
  // предполагал использование спред оператора и утилиты Partial
  setUser(
    id: number,
    login: string,
    email: string,
    passwordHash: string,
    dateOfBirth: Date
  ): void {
    this.userModel.id = id;
    this.userModel.login = login;
    this.userModel.email = email;
    this.userModel.passwordHash = passwordHash;
    this.userModel.dateOfBirth = dateOfBirth;
  }

  getUser(): UserModel {
    return this.userModel;
  }
}
