import { Component } from '@angular/core';

@Component({
  selector: 'app-blogcomp',
  templateUrl: './blogcomp.component.html',
  styleUrls: ['./blogcomp.component.css']
})
export class BlogcompComponent {
  title : string = "";
  atext : string = "";
  afecha : Date = new Date();
  aurl : string = "";
  arrArticles : any[] = [];

  constructor() {
    this.arrArticles = [
      { titulo : "Daniel",
        texto : "Articulo de daniel",
        fecha : new Date(2021,4,20) ,
        url : "https://via.placeholder.com/150",},
      { titulo : "Rafael",
        texto : "Articulo de Rafael",
        fecha: new Date(2022,4,21),
        url:"https://via.placeholder.com/150",
     }

    ]
  }

  guardar ():void {
    let article = {
      titulo: this.title,
      texto: this.atext,
      fecha: this.afecha,
      url: this.aurl
    }
    this.arrArticles.push(article);
    this.title = "";
    this.atext = "";
    this.afecha = new Date();
    this.aurl = "";

  }

}
