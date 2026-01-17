# ProfitWise Accountancy

A modern React application built with Vite, TypeScript, and state-of-the-art tools and libraries.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Zustand** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Unit testing
- **ESLint & Prettier** - Code quality and formatting

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── store/          # Zustand stores
├── services/       # API services
├── types/          # TypeScript type definitions
├── assets/         # Static assets
├── test/           # Test setup and utilities
├── App.tsx         # Main app component
└── main.tsx        # Application entry point
```

## 🔧 Configuration

- **Path Aliases**: Configured in `tsconfig.json` and `vite.config.ts`
  - `@/components` → `src/components`
  - `@/pages` → `src/pages`
  - `@/hooks` → `src/hooks`
  - `@/utils` → `src/utils`
  - `@/store` → `src/store`
  - `@/services` → `src/services`
  - `@/types` → `src/types`
  - `@/assets` → `src/assets`

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=ProfitWise Accountancy
```

## 📝 Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `lint` - Run ESLint
- `lint:fix` - Fix ESLint errors
- `format` - Format code with Prettier
- `format:check` - Check code formatting
- `test` - Run tests
- `test:ui` - Run tests with UI
- `test:coverage` - Run tests with coverage
- `type-check` - Type check without emitting

## 🎨 Styling

This project uses Tailwind CSS with a custom design system. The color scheme supports both light and dark modes.

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [React Router Documentation](https://reactrouter.com)
- [TanStack Query Documentation](https://tanstack.com/query)
- [Zustand Documentation](https://zustand-demo.pmnd.rs)
- [Tailwind CSS Documentation](https://tailwindcss.com)










