const perPage = 6;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getPosts(page:number, tag:string, category:string):Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>('https://murmuring-savannah-25972.herokuapp.com/api/posts?page=' + page + '&perPage=' + perPage + '&category=' + category + '&tag=' + tag);
  }

  getPostbyId(id:string):Observable<BlogPost>{
    return this.http.get<BlogPost>('https://murmuring-savannah-25972.herokuapp.com/api/posts/' + id);
  }

  getCategories():Observable<any>{
    return this.http.get<any>('https://murmuring-savannah-25972.herokuapp.com/api/categories');
  }

  getTags():Observable<string[]>{
    return this.http.get<string[]>('https://murmuring-savannah-25972.herokuapp.com/api/tags');
  }
}
