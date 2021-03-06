import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
baseUrl: string = 'http://localhost:24535/api/Data/';           //Replace this with ur ip address

constructor(public http: Http) {
}

GetRestaurants(locationId){
    return new Promise((resolve,reject) => {
     this.http.get(this.baseUrl + 'GetRestaurants/' + locationId)
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, error => {
         reject(error);
       });
   });
}

GetCoursesForRestaurants(restaurantId){
    return new Promise((resolve,reject) => {
     this.http.get(this.baseUrl + 'GetCoursesForRestaurants/' + restaurantId)
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, error => {
         reject(error);
       });
   });
}

GetItemsForCourse(courseId): Promise<any>{
    return new Promise((resolve,reject) => {
     this.http.get(this.baseUrl + 'GetItemsForCourse/' + courseId)
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, error => {
         reject(error);
       });
   });
}

}