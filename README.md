# Cinema Guru

A React application for discovering and managing movies. Users can browse titles, mark favorites, and build a watch-later list.

## Features

- **Authentication** — Sign in or sign up with a username and password. Session is persisted via a JWT stored in `localStorage`.
- **Home** — Browse all available titles with search, year range filters, genre tags, and sort options (latest, oldest, highest/lowest rated).
- **Favorites** — View movies you have starred as favorites.
- **Watch Later** — View movies you have queued to watch later.
- **Activity feed** — Sidebar shows recent activity from all users (hover to expand).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Bundler | Vite |
| Routing | React Router v7 |
| HTTP client | Axios |
| Icons | FontAwesome |
| Styling | CSS modules + normalize.css |

## Getting Started

### Prerequisites

- Node.js >= 18
- Yarn (or npm)
- A running backend API at `/api` (handles auth, titles, favorites, watch later, activity)

### Install dependencies

```bash
yarn install
```

### Start the development server

```bash
yarn dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
yarn build
```

## Project Structure

```
src/
├── App.jsx                         # Root component — auth gate
├── routes/
│   ├── auth/
│   │   ├── Authentication.jsx      # Login / Register container
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   └── dashboard/
│       ├── Dashboard.jsx           # Layout with header, sidebar, router
│       ├── home/
│       │   └── HomePage.jsx        # Movie browsing with filters
│       ├── favorites/
│       │   └── Favorites.jsx       # Favorited movies
│       └── watchlater/
│           └── WatchLater.jsx      # Watch-later queue
└── components/
    ├── Activity.jsx                # Single activity entry
    ├── general/
    │   ├── Button.jsx
    │   ├── Input.jsx
    │   ├── SearchBar.jsx
    │   └── SelectInput.jsx
    ├── movies/
    │   ├── Filter.jsx              # Search + year + genre + sort controls
    │   ├── MovieCard.jsx           # Movie tile with favorite/watch-later toggles
    │   └── Tag.jsx                 # Genre tag (clickable when filtering)
    └── navigation/
        ├── Header.jsx              # Top bar with username and logout
        └── SideBar.jsx             # Collapsible nav + activity feed
```

## API Endpoints

The frontend expects the following REST endpoints:

| Method | Path | Description |
|---|---|---|
| POST | `/api/auth/` | Verify token (returns `{ username }`) |
| POST | `/api/auth/login` | Login (returns `{ accessToken }`) |
| POST | `/api/auth/register` | Register (returns `{ accessToken }`) |
| GET | `/api/titles/` | List titles (supports query params) |
| GET | `/api/titles/favorite/` | List favorited titles |
| POST | `/api/titles/favorite/:imdbId` | Add to favorites |
| DELETE | `/api/titles/favorite/:imdbId` | Remove from favorites |
| GET | `/api/titles/watchlater/` | List watch-later titles |
| POST | `/api/titles/watchlater/:imdbId` | Add to watch later |
| DELETE | `/api/titles/watchlater/:imdbId` | Remove from watch later |
| GET | `/api/activity` | Recent activity feed |

All authenticated endpoints require an `Authorization: Bearer <token>` header.

## Author

**AxelNAY** — [Holberton School](https://www.holbertonschool.com)
