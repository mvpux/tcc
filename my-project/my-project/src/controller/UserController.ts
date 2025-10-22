// Controller: Handles user input and updates model/view
// This is a simple controller for the User
import { User } from '../model/User';
import { UserView } from '../view/UserView';

export class UserController {
  private user: User;
  private view: UserView;

  constructor(user: User, view: UserView) {
    this.user = user;
    this.view = view;
  }

  // Updates the user's name and age, then shows a greeting
  updateUser(name: string, age: number): void {
    this.user.name = name;
    this.user.age = age;
    this.view.showMessage(this.user.getGreeting());
  }
}
