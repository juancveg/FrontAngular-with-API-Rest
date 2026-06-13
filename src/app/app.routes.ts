import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id/comments', component: CommentListComponent },
  { path: '**', redirectTo: '/posts' }
];
