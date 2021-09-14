import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { SpectAddService } from '../spectadd.service';
@Component({
  selector: 'app-addspectacles',
  templateUrl: './addspectacles.component.html',
  styleUrls: ['./addspectacles.component.css']
})
export class AddspectaclesComponent implements OnInit {
  addSpects=new FormGroup({
    spectaclesNumber:new FormControl('',[Validators.pattern('10A[0-9]*'),Validators.required]),
    spectaclesModel:new FormControl('',[Validators.required,Validators.pattern('RB1[0-9]*')]),
    spectaclesDescription:new FormControl('',[Validators.required]),
    spectaclesCost:new FormControl('',[Validators.required]),
  });
  constructor(private _addspects:SpectAddService) { }
  ngOnInit(): void {
  }
  add(){
    this._addspects.add(this.addSpects.value).subscribe();
    alert("Added the new data");
  }

}
