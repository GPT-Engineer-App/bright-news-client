# bright-news-client

# SpectaculrNews

A HackerNews client that shows a list of trending posts from YCombinator.
Make it look modern, sleek and simple. Use a vibrant orange as the highlight color, but also make sure the content is easy to read. Add dark mode.

## Screens

### Home Page

Displays a list of trending posts from HackerNews.

- **Behavior:** Fetches and updates the posts from the HackerNews API.
- **Layout:** Contains a `Header` and a `PostList`.

## Components

### Header

Displays the app title and a refresh button.

- **Behavior:** On tap, triggers the `PostList` to refresh the posts.
- **Styling:** Fixed at the top, with a large font size and a background color.

### PostList

Displays a list of posts in a scrollable format.

- **Behavior:**
  - Renders a list of `PostItem` components.
  - Supports pull-to-refresh and infinite scrolling.
- **Styling:** Occupies the remaining space below the `Header`.

### PostItem

Displays an individual post with its title, score, and author.

- **Behavior:** On tap, opens the post URL in a web browser.
- **Styling:**
  - Displays the title in a bold font and the score and author in a smaller font.
  - Has some padding and a separator line.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/bright-news-client.git
cd bright-news-client
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
