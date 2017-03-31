import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

}
