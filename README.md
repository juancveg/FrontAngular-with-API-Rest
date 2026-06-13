# Posts & Comments Web App

An Angular 19 application that consumes the [JSONPlaceholder](https://jsonplaceholder.typicode.com) REST API to display posts, filter them by user, and browse their comments.

---

## 📸 Features

- **Post listing** — displays all posts from the API in a responsive table
- **Filter by user** — dropdown to filter posts by a specific author
- **Comments view** — navigate to a dedicated page to see all comments for a post
- **Angular SSR ready** — server-side rendering configured via `@angular/ssr`
- **Bootstrap 5** — clean, mobile-friendly UI out of the box

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18.x |
| npm | ≥ 9.x |
| Angular CLI | 19.x |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/FrontAngular-with-API-Rest.git
cd FrontAngular-with-API-Rest

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Open your browser and navigate to **http://localhost:4200/posts**

The app will automatically reload on any source file change.

---

## 🧭 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | — | Redirects to `/posts` |
| `/posts` | `PostListComponent` | List and filter all posts |
| `/posts/:id/comments` | `CommentListComponent` | Comments for a specific post |
| `**` | — | Redirects to `/posts` |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── post-list/              # Post listing & user filter
│   │   ├── post-list.component.ts
│   │   ├── post-list.component.html
│   │   └── post-list.component.css
│   ├── comment-list/           # Comments for a single post
│   │   ├── comment-list.component.ts
│   │   ├── comment-list.component.html
│   │   └── comment-list.component.css
│   ├── services/
│   │   └── api.service.ts      # All HTTP calls to JSONPlaceholder
│   ├── app.module.ts
│   ├── app.routes.ts
│   └── app.component.ts
├── models/
│   ├── post.model.ts           # Post interface
│   ├── comment.model.ts        # Comment interface
│   └── user.model.ts           # User interface
└── styles.css
```

---

## 🌐 API Reference

Base URL: `https://jsonplaceholder.typicode.com`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Fetch all posts |
| GET | `/users` | Fetch all users |
| GET | `/users/:userId/posts` | Fetch posts by user |
| GET | `/posts/:postId/comments` | Fetch comments for a post |

---

## 🛠️ Available Scripts

```bash
npm start          # Start dev server at localhost:4200
npm run build      # Production build → dist/
npm test           # Run unit tests with Karma
npm run watch      # Build in watch mode (development)
```

---

## 🏗️ Building for Production

```bash
npm run build
```

Output is placed in `dist/`. For SSR, run the compiled server:

```bash
node dist/test/server/server.mjs
```

---

## 🧪 Running Tests

```bash
npm test
```

Uses [Karma](https://karma-runner.github.io) + [Jasmine](https://jasmine.github.io/).

---

## 🧰 Tech Stack

- [Angular 19](https://angular.dev)
- [Bootstrap 5](https://getbootstrap.com)
- [RxJS 7](https://rxjs.dev)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)
- [Angular SSR](https://angular.dev/guide/ssr)

---

## 👤 Author

**Juan Vega**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
