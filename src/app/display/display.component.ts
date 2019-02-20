import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  private dataArray: any = [];
  constructor() { }

  ngOnInit() {
    this.dataArray = [
      {
        id: 1,
        imageUrl: "http://localhost:4200/assets/images/blueberries.jpg",
        likeImg: "http://localhost:4200/assets/icons/heart-icon.png",
        type: "fruits",
        itemName: "blue berries in mug",
        likesCount: 0
      },
      {
        id: 2,
        imageUrl: "http://localhost:4200/assets/images/camera.jpg",
        likeImg: "http://localhost:4200/assets/icons/heart-icon.png",
        type: "electronic",
        itemName: "Camera",
        likesCount: 0
      },
      {
        id: 3,
        imageUrl: "http://localhost:4200/assets/images/leather-chair.jpg",
        likeImg: "http://localhost:4200/assets/icons/heart-icon.png",
        type: "furniture",
        itemName: "Leather Chair",
        likesCount: 0
      },
      {
        id: 4,
        imageUrl: "http://localhost:4200/assets/images/orange-chair.jpg",
        likeImg: "http://localhost:4200/assets/icons/heart-icon.png",
        type: "furniture",
        itemName: "Orange Chair",
        likesCount: 0
      },
      {
        id: 5,
        imageUrl: "http://localhost:4200/assets/images/potted-plant.jpg",
        likeImg: "http://localhost:4200/assets/icons/heart-icon.png",
        type: "plant",
        itemName: "Potted Plant",
        likesCount: 0
      },
      {
        id: 6,
        imageUrl: "http://localhost:4200/assets/images/wood-stool.jpg",
        likeImg: "http://localhost:4200/assets/icons/heart-icon.png",
        type: "furniture",
        itemName: "Wood Stool",
        likesCount: 0
      }

    ];
  }

  public incrementLikes(id) {

    this.dataArray.filter(x => x.id == id).map(x => {
      x.likesCount++;
 return x;
    })
  }

}
