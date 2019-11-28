import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';
import { Post } from './posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostsService]
})
export class PostsComponent implements OnInit {

  allPosts:Post[];

  constructor(public postsService: PostsService) { 
    console.log("calling getAllPosts()");
    //Using Observables
    // var o = this.postsService.getAllPosts();
    // o.subscribe( (response:Post[]) => {
    //       console.log("Response Received");
    //       console.log(response);
    //       this.allPosts = response;
    // });

    //Using Promises
    var thePromise = this.postsService.getAllPosts();
    thePromise.then(
      (response) => {this.allPosts = response;},
      (err) => {console.log(err)}
    );

    console.log("Some more code")
  }

  ngOnInit() {
  }

}
