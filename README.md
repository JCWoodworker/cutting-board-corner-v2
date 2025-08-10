# Cutting Board Corner - Frontend

Welcome to the frontend repository for Cutting Board Corner, a global online community dedicated to cutting board enthusiasts, makers, and curators. This application provides a platform for users to catalog their collections, share care techniques, discover new recipes, and connect with artisans and suppliers from around the world.

This project is built with a modern, scalable, and developer-friendly tech stack, designed for rapid development and a fantastic user experience.

## ✨ Features

- **Dual User Roles**: Separate account types for Enthusiasts (board owners) and Makers (businesses/artisans).
- **Comprehensive Board Profiles**: Create detailed profiles for each cutting board, including wood species, construction type, origin story, and a photo gallery.
- **Maintenance Logging**: Log oiling, waxing, and other care activities to help preserve boards.
- **Interactive Community Hubs**:
  - **The Workshop**: Discussions on woodworking, repair, and maintenance techniques.
  - **The Kitchen**: Recipe sharing, food safety discussions, and culinary tips.
  - **The Gallery**: A visual showcase for users to share photos of their boards in action.
- **Business Directory ("The Marketplace")**: Searchable and filterable directory of makers, wood suppliers, and care product companies.
- **Robust Rating & Review System**: Rate and review businesses based on product quality, customer service, and more.
- **Secure Authentication**: JWT-based authentication for secure user login and session management.

## 🛠️ Tech Stack

This project is built using a modern frontend stack designed for performance, type safety, and an excellent developer experience.

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/))
- **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) for managing server state, caching, and synchronization.
- **API Client**: [Axios](https://axios-http.com/) for HTTP requests.
- **Routing**: [React Router](https://reactrouter.com/)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20 or newer recommended)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/the-board-room-frontend.git
cd the-board-room-frontend
```

Install dependencies:

```bash
# with npm
npm install
# or with yarn
yarn
```

Set up environment variables:

Create a `.env.local` file in the root of the project. If an example file exists, copy it:

```bash
cp .env.example .env.local
```

Add the URL for your backend API:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

Run the development server:

```bash
# with npm
npm run dev
# or with yarn
yarn dev
```

The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` / `yarn dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build` / `yarn build`: Bundles the app for production into the `dist` folder.
- `npm run lint` / `yarn lint`: Runs ESLint to find and fix problems in the code.
- `npm run preview` / `yarn preview`: Serves the production build locally for previewing.

## 📁 Project Structure

The project follows a feature-based architecture to keep the codebase organized, modular, and scalable.

```text
src/
├── App.css
├── App.tsx
├── assets/
│   └── react.svg
├── auth/
├── features/
├── index.css
├── main.tsx
├── shared/
│   ├── api/
│   │   ├── api-client.ts
│   │   ├── csrf.ts
│   │   └── requests.ts
│   ├── ui/
│   └── utils/
└── vite-env.d.ts
```

## 🌐 API & State Management

Data fetching is handled by TanStack Query, which provides robust caching, background refetching, and server state synchronization.

- A global Axios instance is configured in `src/shared/api/api-client.ts`.
- Generic request handlers (GET, POST, etc.) are defined in `src/shared/api/requests.ts` for reuse across the application.
- Each feature can have its own API module that defines specific data-fetching functions for that feature's endpoints, and related React hooks can use `useQuery`/`useMutation` to manage data in components.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the project, please feel free to create an issue or submit a pull request.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m "Add some AmazingFeature"`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the `LICENSE` file for details.
