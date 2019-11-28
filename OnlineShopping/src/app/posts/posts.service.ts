import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './posts.model';

@Injectable()
export class PostsService{

    constructor(public httpClientObj: HttpClient){

    }

    //Using Observables
    // getAllPosts(){
    //     console.log("getAllPosts() Called")
    //     return this.httpClientObj.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    // }

    //Using Promises
    getAllPosts(){
        return this.httpClientObj.get<Post[]>("https://jsonplaceholder.typicode.com/posts").toPromise();
    }
}