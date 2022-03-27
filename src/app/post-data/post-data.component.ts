import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  @Input() post:BlogPost[]=[{
    "_id": "5e46083efc13ae440e000000",
    "title": "Die Another Day",
    "postDate": "1/13/2020",
    "featuredImage": "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=360&w=480",
    "post": "<p>In congue. Etiam justo. Etiam pretium iaculis justo.</p><p>In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.</p><p>Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.</p><p>Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.</p><p>Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.</p><p>Phasellus in felis. Donec semper sapien a libero. Nam dui.</p>",
    "postedBy": "WEB422 Student",
    "comments": [
      {
        "_id": "5e46113dfc13ae285c000000",
        "author": "aflecknoe0",
        "comment": "<p>Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.</p>",
        "date": "9/11/2019"
      },
      {
        "_id": "5e46113dfc13ae285c000001",
        "author": "esaffe1",
        "comment": "<p>Phasellus in felis. Donec semper sapien a libero. Nam dui.</p><p>Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.</p>",
        "date": "10/24/2019"
      }
    ],
    "category": "Crime",
    "tags": [
      "#funny",
      "#dramatic",
      "#rental",
      "#seeagain"
    ],
    "isPrivate": false,
    "views": 24
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
