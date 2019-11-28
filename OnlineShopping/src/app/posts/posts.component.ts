import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostsService]
})
export class PostsComponent implements OnInit {

  constructor(public postsService: PostsService) { 
    this.postsService.getAllPosts();
  }

  ngOnInit() {
  }

}
