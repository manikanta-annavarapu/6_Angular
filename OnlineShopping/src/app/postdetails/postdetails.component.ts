import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts/posts.service';
import { Post } from '../posts/posts.model';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  postId: number;
  postData: Post;
  constructor( public route:ActivatedRoute, public postService: PostsService) { 
    
  }

  ngOnInit() {
    this.postData = new Post();

    this.route.params.subscribe(p=>
      {
        this.postId = p.id;
        this.postService.getPostById(this.postId).subscribe((response:Post) => {
          this.postData = response;
          console.log(this.postData);
        });
      
      });
  }

}
