import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto-service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
carDetailDtos:CarDetailDto[]=[]
dataLoaded=false;
constructor(private carDetailDtoService:CarDetailDtoService){}
ngOnInit(): void {
  this.getCarDetails();
}
getCarDetails(){
  this.carDetailDtoService.getCarDetails().subscribe(response=>{
    this.carDetailDtos=response.data;
    this.dataLoaded=true;
  });
}
}
