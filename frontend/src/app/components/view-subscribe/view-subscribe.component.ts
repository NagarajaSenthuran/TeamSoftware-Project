import { SubscribeService } from './../../services/subscribe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-subscribe',
  templateUrl: './view-subscribe.component.html',
  styleUrls: ['./view-subscribe.component.scss']
})
export class ViewSubscribeComponent implements OnInit {
  subscribekArray:any;
  p:any;
  email:'';
  constructor(private subscribeservice : SubscribeService) { }

  ngOnInit(): void {
    this.getSubscribeData();
  }

  getSubscribeData(){
    this.subscribeservice.getAllSubscribe().subscribe(res=>{
    //console.log(res);
    this.subscribekArray = res;
  
    });
  }

  deleteData(id){
   this.subscribeservice.deleteData(id).subscribe(res=>{
   this.getSubscribeData();
   });
  }

  Search(){
    if(this.email !=""){
      this.subscribekArray = this.subscribekArray.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
       });
     }
     else if(this.email ==""){
       this.ngOnInit();
     }
  }
}
