import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages = [];

  constructor() { }

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
  {"id":1, "category": "boats", "caption": "Maca sa parama.", "url":"https://i.imgur.com/4AiXzf8.jpg"},
  {"id":2, "category": "boats", "caption": "Maca #2", "url":"https://i.imgur.com/rFBiyeR.jpg"},
  {"id":3, "category": "boats", "caption": "Maca #3", "url":"https://i.imgur.com/CAvnrUl.jpg"},
  {"id":4, "category": "boats", "caption": "Maca #4", "url":"https://i.imgur.com/8L65b0y.jpg"},
  {"id":5, "category": "boats", "caption": "Maca #5", "url":"https://i.imgur.com/latQmjr.jpg"},
  {"id":6, "category": "camping", "caption": "Maca #6", "url":"https://i.imgur.com/Lh6sQtz.jpg"},
  {"id":7, "category": "camping", "caption": "Maca #7", "url":"https://i.imgur.com/FxSkUVK.jpg"},
  {"id":8, "category": "camping", "caption": "Maca #8", "url":"https://i.imgur.com/Jvh1OQm.jpg"},
  {"id":9, "category": "camping", "caption": "Maca #9", "url":"https://i.imgur.com/9l1A4OS.jpg"},
  {"id":10, "category": "camping", "caption": "Maca #10", "url":"https://i.imgur.com/kwZFyk8.jpg"},
]

