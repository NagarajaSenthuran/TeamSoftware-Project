import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor (private router:Router) { }

  ngOnInit(): void {
  }
  goToPage(PageName:String):void{
    this.router.navigate([`${PageName}`]);

  }

}
