import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cards = [
    {
      type: "TYPE",
      headline: "HEADLINE",
      description: "Description",
      image: "https://glowvarietyshow.com/wp-content/uploads/2017/03/placeholder-image.jpg"
    },
    {
      type: "TUTORIAL",
      headline: "BUILD WEBSITE",
      description: "Description",
      image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png"
    },
    {
      type: "VIDEO",
      headline: "NEW YOUTUBE VIDEO",
      description: "Description",
      image: "https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q"
    },
    {
      type: "ANNOUNCEMENT",
      headline: "HALO TOURNAMENT",
      description: "Description",
      image: "https://content.halocdn.com/media/Default/Halo.gg/542x305_Module_Images/hcs-5ya-bde5e39fc4b141b1a423213bbefabe7f.png"
    }
  ]

  ngOnInit() {
  }

}
