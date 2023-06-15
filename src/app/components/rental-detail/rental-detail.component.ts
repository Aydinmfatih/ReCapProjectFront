import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalDetailDtoServiceService } from 'src/app/services/rental-detail-dto-service.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit{
rentalDetailDtos:RentalDetailDto[]=[];
dataLoaded=false;
constructor(private rentalDetailDtoService:RentalDetailDtoServiceService){};

ngOnInit(): void {
  this.getRentalDetails();
}
getRentalDetails(){
  this.rentalDetailDtoService.getRentalDetails().subscribe(response=>{
    this.rentalDetailDtos=response.data;
    this.dataLoaded=true;
  })
}
}
