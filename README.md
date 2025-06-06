# Cymit

Cymit is a modern frontend project built with **React 19**, **Vite**, and **Tailwind CSS**. It leverages smooth animations via **Framer Motion**, carousel components via **Embla Carousel**, and routing via **React Router v7**. This project is structured with **TypeScript**.

## Features

- **Vite** for fast development and optimized builds
- **React 19** with concurrent rendering support
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for advanced animations
- **React Router v7** for SPA navigation
- **Embla Carousel** for customizable carousels
- **TypeScript** and **ESLint** for type safety and code linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)

### Installation

```bash
# using npm
npm install

# check that your code is ok
npm run build

# run the server
npm run dev
```

### Project Structure

The project follows a clean and modular structure to maintain scalability and clarity:

- `src/components/`: Contains reusable UI components used throughout the app.
- `src/context/`: Holds React Context providers and related state management logic.
- `src/routes/`: Defines route components and routing logic, organizing the app’s navigation.
- `src/services/`: Contains service modules responsible for API calls, data fetching, and business logic.
- `src/style/`: Includes global styles and other styling assets If needed.
- `src/main.tsx`: The main entry point of the application where the React app is initialized and rendered.

This structure helps keep concerns separated and makes it easier to navigate and maintain the codebase as the project grows.

### Route Validation and Redirection

In this project, we have implemented a check to verify if a route with a specific ID exists.

- If the ID corresponds to a valid resource, the app renders the appropriate content.
- If the ID does **not** exist, the user is automatically redirected to the homepage.

This ensures a better user experience by avoiding broken or empty pages and gracefully handling invalid URLs.

### Patterns Followed

This project follows several common design and development patterns to ensure code quality, maintainability, and scalability:

- **Component-Based Architecture:** The UI is broken down into small, reusable, and focused React components, promoting reusability and easier testing.
- **Separation of Concerns:** Different responsibilities are organized into dedicated folders like components, context, services, and routes, making the codebase more modular.
- **Context API for Global State:** React Context is used for state or data that needs to be shared across multiple components without prop drilling.
- **Routing with React Router:** Navigation is managed declaratively with React Router, enabling dynamic routing and route validation.
- **Type Safety with TypeScript:** Strict typing helps catch bugs early and improves developer experience.
- **CSS Utility Framework:** Tailwind CSS is used for styling with utility classes, avoiding deeply nested or complicated CSS.

These patterns together provide a solid foundation for building a scalable, maintainable React application.

## Decisions

### Why TypeScript?

TypeScript is used in this project to provide:

- **Type Safety**: It helps catch bugs at compile time instead of runtime, reducing the chances of unexpected errors in production.
- **Improved Developer Experience**: With features like autocompletion, inline documentation, and type inference, development becomes faster and more robust.
- **Scalability**: As the codebase grows, TypeScript makes it easier to manage complex types, interfaces, and contracts between components and modules.
- **Better Collaboration**: Teams benefit from clearer code structure, making it easier to understand and maintain even when working across multiple contributors.

### Why Not Using TanStack Query (Yet)

Currently, this project uses plain fetch combined with `useEffect` and `useState` for data fetching, which is totally valid for small or simple projects. It's quick to implement and doesn't add any extra dependencies.

However, TanStack Query (React Query) offers clear advantages when managing asynchronous data:

- Automatic caching and smart revalidation
- Easy management of loading, error, and success states
- Automatic refetching and synchronization across components
- Avoids repeated fetches if data is already cached

TanStack Query becomes especially useful as the app grows or when you need to optimize user experience and performance.

So, while this project doesn't use TanStack Query yet, it’s a solid option to consider if the project scales up.
