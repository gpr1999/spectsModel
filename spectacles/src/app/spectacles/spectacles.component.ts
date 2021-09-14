import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpectacleService } from '../spectacle.service';
import { Spectacles } from './Spectacles';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-spectacles',
  templateUrl: './spectacles.component.html',
  styleUrls: ['./spectacles.component.css']
})
export class SpectaclesComponent implements OnInit {
 spec:Spectacles=new Spectacles();
 spec1:any=[];

 constructor(private _spectsService:SpectacleService,private route:ActivatedRoute){};
  ngOnInit(){
 this._spectsService.getSpects().subscribe(data => this.spec1=data);
 
    }
  updateSpects(body:Spectacles){
   this._spectsService.update(body).subscribe();
   alert("The Record is Successfully Updated");
   this._spectsService.getSpects().subscribe(data => this.spec1=data);
  } 
  deleteSpects(id:Spectacles){
    console.log(id);
    this._spectsService.delete(id).subscribe();
    alert("The Record is Successfully Deleted");
    this._spectsService.getSpects().subscribe(data => this.spec1=data);
  }

}
