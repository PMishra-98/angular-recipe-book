import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
