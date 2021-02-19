import { Component, OnInit} from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
declare function join(role:any,channel:any):void;
declare function leave():void;
@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let channel = this.route.snapshot.queryParamMap.get('channel');
    join("host", channel);
  }
  
 OnLeave(){
   leave();
   this.router.navigate(['']);
 }
}
