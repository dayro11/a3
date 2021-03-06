import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.css']
})
export class LatestPostComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(1, '', '').subscribe(data => this.posts = data.slice(0,3));
  }

}
