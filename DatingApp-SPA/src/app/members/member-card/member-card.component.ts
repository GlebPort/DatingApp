import { Component, OnInit, Input } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  constructor(
    private auth: AuthService,
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  likeUser(recipientId: number) {
    this.userService
      .likeUser(this.auth.decodedToken.nameid, recipientId)
      .subscribe(
        (data) => {
          this.alertify.success('You have liked ' + this.user.knownAs);
        },
        (error) => {
          this.alertify.error('You have already liked ' + this.user.knownAs);
        }
      );
  }
}