import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare function join(role:any,channel:any):void;
declare function leave():void;
@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let channel = this.route.snapshot.queryParamMap.get('channel');
    join("audience",channel);
  }

  OnLeave(){
    leave();
    this.router.navigate(['']);
  }
}
