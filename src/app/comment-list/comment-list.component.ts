import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Comment } from '../../models/comment.model';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CommentListComponent implements OnInit {
  postId: number = 0;
  post: Post | null = null;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.loadComments();
      this.loadPostDetails();
    });
  }

  loadComments(): void {
    this.apiService.getCommentsByPost(this.postId).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  loadPostDetails(): void {
    this.apiService.getPosts().subscribe((posts: Post[]) => {
      this.post = posts.find(p => p.id === this.postId) || null;
    });
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}