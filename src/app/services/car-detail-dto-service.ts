import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetailDtoResponseModel } from '../models/carDetailDtoResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarDetailDtoService {
  apiUrl = 'https://localhost:44319/api/cars/getcardetaildtos';
  constructor(private httpClient: HttpClient) {}

  getCarDetails():Observable<CarDetailDtoResponseModel>{
    return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl);
  }
}
