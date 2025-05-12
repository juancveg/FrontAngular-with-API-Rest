import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPosts();
    this.loadUsers();
  }

  loadPosts(): void {
    this.apiService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  loadUsers(): void {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  filterPostsByUser(): void {
    if (this.selectedUserId) {
      this.apiService.getPostsByUser(this.selectedUserId).subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    } else {
      this.loadPosts();
    }
  }

  viewComments(post: Post): void {
    this.router.navigate(['/posts', post.id, 'comments']);
  }
}