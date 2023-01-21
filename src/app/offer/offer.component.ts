import { MarkerManager } from '@agm/core';
import { Component } from '@angular/core';
import { Offer } from '../offer';
declare var google: any;

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent {
  lat = 7.7749;
  lng = 80.4194;
  map: any;
  category = 'Select the category';
  constructor() {}
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

  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.lat, lng: this.lng },
      zoom: 8,
    });
    this.offers.forEach((offer) => {
      var marker = new google.maps.Marker({
        position: { lat: offer.lat, lng: offer.lng },
        map: this.map,
        title: offer.name,
      });

      marker.addListener('click', () => {
        let content = `<h3>${offer.category}</h3>`;
        let img = `<img src= ${offer.link} alt="hotel image" width="100" height="100">`;
        let location = `<p style="color:blue">${offer.location}</p>`;
        content += img;
        content += location;
        this.offers.forEach((offer) => {
          content += `<p>${offer.name}: ${offer.description}</p>`;
        });
        let infoWindow = new google.maps.InfoWindow({
          content: content,
        });
        infoWindow.open(this.map, marker);
      });
    }); 
  }

  getOffers() {
    //refresh the map
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.lat, lng: this.lng },
      zoom: 8,
    });
    
    console.log(this.category); // This is printing the correct value
    //show offers of the selected category in the map
    this.offers.forEach((offer) => {
      if (offer.category == this.category) {
        var marker = new google.maps.Marker({
          position: { lat: offer.lat, lng: offer.lng },
          map: this.map,
          title: offer.name,
        });

        marker.addListener('click', () => {
          let content = `<h3>${offer.category}</h3>`;
          let img = `<img src= ${offer.link} alt="hotel image" width="100" height="100">`;
          content += img;
          this.offers.forEach((offer) => {
            content += `<p>${offer.name}: ${offer.description}</p>`;
          });
          let infoWindow = new google.maps.InfoWindow({
            content: content,
          });
          infoWindow.open(this.map, marker);
        });
      }
      //if the category is not selected, show all offers in the map
      else if (this.category == 'All') {
        var marker = new google.maps.Marker({
          position: { lat: offer.lat, lng: offer.lng },
          map: this.map,
          title: offer.name,
        });

        marker.addListener('click', () => {
          let content = `<h3>${offer.category}</h3>`;
          let img = `<img src= ${offer.link} alt="hotel image" width="100" height="100">`;
          content += img;
          this.offers.forEach((offer) => {
            content += `<p>${offer.name}: ${offer.description}</p>`;
          });
          let infoWindow = new google.maps.InfoWindow({
            content: content,
          });
          infoWindow.open(this.map, marker);
        });
      }
    });

  


  }
}
