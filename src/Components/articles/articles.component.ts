import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/Services/image.service';
import { PostService } from 'src/app/Services/post.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  Image:any;
  Post:any;
  Card:any;
  constructor(private img:ImageService, private post:PostService) { 
    this.img.Image().subscribe((data)=>{
      this.Image = data;      
    });
    this.post.Posts().subscribe((data)=>{
      console.log(data);
      this.Post = data;
    });
  }

  ngOnInit(): void {
  }

}
