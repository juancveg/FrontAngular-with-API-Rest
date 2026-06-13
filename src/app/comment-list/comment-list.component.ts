import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Comment } from '../../models/comment.model';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';

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
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.loadData();
    });
  }

  loadData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.getPostById(this.postId).pipe(
      catchError(() => {
        this.errorMessage = 'Failed to load post details.';
        return of(null);
      })
    ).subscribe((post: Post | null) => {
      this.post = post;
    });

    this.apiService.getCommentsByPost(this.postId).pipe(
      catchError(() => {
        this.errorMessage = 'Failed to load comments. Please try again later.';
        return of([]);
      })
    ).subscribe((comments: Comment[]) => {
      this.comments = comments;
      this.isLoading = false;
    });
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
