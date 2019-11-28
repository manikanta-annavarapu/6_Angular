import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService{

    constructor(public httpClientObj: HttpClient){

    }

    getAllPosts(){
        this.httpClientObj.get('https://jsonplaceholder.typicode.com/posts').subscribe( (response) => {
            console.log(response);
        });
    }
}