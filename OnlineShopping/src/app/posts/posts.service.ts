import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './posts.model';

@Injectable()
export class PostsService{

    constructor(public httpClientObj: HttpClient){

    }

    getAllPosts(){
        console.log("getAllPosts() Called")
        return this.httpClientObj.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }
}