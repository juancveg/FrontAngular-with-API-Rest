import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  selectedUserId: number | null = null;
  isLoading = false;
  errorMessage = '';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPosts();
    this.loadUsers();
  }

  loadPosts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.apiService.getPosts().pipe(
      catchError(() => {
        this.errorMessage = 'Failed to load posts. Please try again later.';
        return of([]);
      })
    ).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.isLoading = false;
    });
  }

  loadUsers(): void {
    this.apiService.getUsers().pipe(
      catchError(() => of([]))
    ).subscribe((users: User[]) => {
      this.users = users;
    });
  }

  filterPostsByUser(): void {
    this.isLoading = true;
    this.errorMessage = '';
    if (this.selectedUserId) {
      this.apiService.getPostsByUser(this.selectedUserId).pipe(
        catchError(() => {
          this.errorMessage = 'Failed to filter posts. Please try again later.';
          return of([]);
        })
      ).subscribe((posts: Post[]) => {
        this.posts = posts;
        this.isLoading = false;
      });
    } else {
      this.loadPosts();
    }
  }

  viewComments(post: Post): void {
    this.router.navigate(['/posts', post.id, 'comments']);
  }
}
