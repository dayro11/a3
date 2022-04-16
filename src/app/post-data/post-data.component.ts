import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  post:any=[];

  querySub:any=[];

  commentName!: string;
  commentText!: string;

  submitComment(){
    this.post.comments.push({author:this.commentName, comment:this.commentText, date:new Date().toLocaleDateString()});
    this.postService.updatePostById(this.post._id, this.post).subscribe(data => this.post = data);
    this.commentName = '';
    this.commentText = '';
  }

  constructor(private postService:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this.getPost(params['id']);
    })
  }

  getPost(id: string){
    this.postService.getPostbyId(id).subscribe(data => this.post = data);
  }

  ngOnDestroy(): void {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
