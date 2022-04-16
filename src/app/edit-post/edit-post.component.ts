import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  blogPost!: BlogPost;
  tags:string='';

  formSubmit(){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe(data => this.blogPost=data);
    this.route.navigate(['admin']);
  }

  deletePost(){
    this.postService.deletePostById(this.blogPost._id).subscribe(data=> this.blogPost=data);
    this.route.navigate(['admin']);
  }

  constructor(private postService:PostService, private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.postService.getPostbyId(id).subscribe(data => {
      this.blogPost = data;
      this.tags = this.blogPost.tags.toString();
    });
  }

}
