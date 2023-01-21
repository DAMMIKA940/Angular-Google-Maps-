import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  id = 0;
  name = '';
  category = 'Select the category';
  description = '';
  location = '';
  link = '';
  editMode: boolean = false;
  offers: Offer[] = [
    {
      id: 1,
      name: 'Offer 1',
      category: 'Food',
      description: 'This is a description of offer 1',
      location: 'Colombo',
      lat: 6.9271,
      lng: 79.8612,
      link: 'https://icon-library.com/images/hotel-icon-map/hotel-icon-map-15.jpg',
    },
    {
      id: 2,
      name: 'Offer 2',
      category: 'Clothes',
      description: 'This is a description of offer 2',
      location: 'Kandy',
      lat: 7.2906,
      lng: 80.6337,
      link: 'https://thumbs.dreamstime.com/b/clothing-store-location-blue-map-pin-icon-element-map-point-mobile-concept-web-apps-icon-website-design-109712516.jpg',
    },
    {
      id: 3,
      name: 'Offer 3',
      category: 'Electronics',
      description: 'This is a description of offer 3',
      location: 'Galle',
      lat: 6.0535,
      lng: 80.2201,
      link: 'https://previews.123rf.com/images/deimosz/deimosz1412/deimosz141200339/35812189-blue-map-pointer-icon-with-electrical-plug-electric-shop-or-electrical-mechanic-sign-isolated-on-whi.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  deleteOffer(){
    this.offers.pop();

  }
//click editOffer button link editoffer
  editOffer(editOffer:any){
    console.log(editOffer);
    this.editMode = true;
    this.id = editOffer.id;
    this.name = editOffer.name;
    this.category = editOffer.category;
    this.description = editOffer.description;
    this.link = editOffer.link;

   
  }

  uploadImage(event:any){

  }
  onSubmit(){
    if(this.editMode){
      this.offers.forEach((offer) => {
        if(offer.id == this.id){
          offer.name = this.name;
          offer.category = this.category;
          offer.description = this.description;
          offer.link = this.link;
        }
      });
      this.editMode = false;
    }else{
      this.offers.push({
        id: this.offers.length + 1,
        name: this.name,
        category: this.category,
        description: this.description,
        location: this.location,
        lat: 6.9271,
        lng: 79.8612,
        link: this.link,
      });
    }
    this.name = '';
    this.category = 'Select the category';
    this.description = '';
    this.location = '';
    this.link = '';

  }


 

}
