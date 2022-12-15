import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserProfile } from 'src/app/core/interfaces/IUser';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userId = '';
  user = {} as IUserProfile;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId') as string;
    this.fetchUser();
  }

  fetchUser() {
    this.userService.getUser(this.userId).subscribe((res: any) => {
      this.user = res;
      console.log(res);
    });
  }
}
