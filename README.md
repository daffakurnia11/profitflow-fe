# ProfitFlow Front-End

ProfitFlow is a web application designed to help entrepreneurs track daily stock movements and profits. It features a tier-based system where customers can subscribe to different levels of functionality, such as data analysis, Excel export, and AI predictions.

This repository contains the front-end of the ProfitFlow app built using **Next.js** and **Tailwind CSS**. The project includes responsive components like About, Pricing, Contact, and Login, as well as reusable components structured as per the design.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/profitflow-fe.git
   cd profitflow-fe
   ```

2. Install the dependencies:

   ```bash
   npm install
   # OR
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # OR
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Project Structure

```
.
├── .next                         # Next.js build output (auto-generated)
├── public
│   └── img                       # Public images (SVGs used in components)
│       ├── about-img.svg
│       ├── blobs1.svg
│       ├── blobs2.svg
│       ├── blobs3.svg
│       └── jumbotron-img.svg
├── src
│   ├── app
│   │   └── login
│   │       ├── page.tsx          # Login page
│   │   ├── favicon.ico
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Layout page
│   ├── components
│   │   ├── Button
│   │   │   └── index.tsx         # Button component
│   │   ├── Card
│   │   │   └── index.tsx         # Card component
│   │   ├── Layout
│   │   │   ├── Footer.tsx        # Footer component
│   │   │   ├── Navbar.tsx        # Navbar component
│   │   ├── Typography
│   │   │   ├── Heading.tsx       # Typography components
│   │   │   ├── Paragraph.tsx
│   │   │   └── Small.tsx
│   │   └── Pages
│   │       └── Home
│   │           ├── About.tsx     # About section component
│   │           ├── Contact.tsx   # Contact section component
│   │           ├── Hero.tsx      # Hero section component
│   │           └── Pricing.tsx   # Pricing section component
│   ├── styles
│   │   ├── components
│   │   │   ├── button.css        # Button-specific CSS
│   │   │   ├── style.css         # Global style file
│   │   │   └── typography.css    # Typography-specific CSS
│   │   ├── fonts
│   │   │   ├── Inter-Black.ttf   # Button-specific CSS
│   │   │   ├── ...               # Other font family file
│   │   │   └── typography.css    # Typography-specific CSS
│   │   ├── fonts
│   │   └── globals.css           # Global styles
│   ├── types
│       ├── Button.d.ts           # TypeScript definitions for Button
│       └── Typography.d.ts       # TypeScript definitions for Typography
├── .eslintrc.json                # ESLint configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Auto-generated dependency tree lock file
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
```

## Technologies Used

### 1. **Next.js**

- **Reason**: Next.js provides built-in support for server-side rendering (SSR) and static site generation (SSG), improving performance and SEO. It also simplifies file-based routing and offers great flexibility for building modern web applications.

### 2. **React.js**

- **Reason**: React is a popular JavaScript library for building component-based user interfaces. It allows developers to create reusable components, making the code more maintainable and scalable.

### 3. **Tailwind CSS**

- **Reason**: Tailwind CSS is a utility-first CSS framework that allows for rapid styling. Its utility-based approach helps build responsive, clean designs without writing extensive custom CSS.

### 4. **TypeScript**

- **Reason**: TypeScript introduces strong typing to JavaScript, reducing potential runtime errors. It ensures better code structure and maintainability by providing type-checking during development.

### 5. **React Icons**

- **Reason**: `react-icons` is a library that provides a collection of popular icons from FontAwesome, Material Icons, and other sources. It simplifies the process of adding high-quality icons to the UI.

### 6. **Headless UI**

- **Reason**: Headless UI provides unstyled, accessible components that can be customized with Tailwind CSS. It enables building functional and accessible UI elements without imposing design restrictions.

## Folder Structure Overview

- **public/**: Contains static assets like images and icons.
- **src/**: Contains the source code of the application.
  - **app**: The component of pages and layouts.
  - **components/**: Reusable UI components like Button, Card, Layout, and Typography.
  - **styles/**: CSS files specific to components and global styles.
  - **types/**: TypeScript declaration files to define types for the components.

## Dependencies

Below is the list of dependencies used in the project:

```json
"dependencies": {
  "@headlessui/react": "^2.1.5",
  "classnames": "^2.5.1",
  "next": "14.2.8",
  "react": "^18",
  "react-dom": "^18",
  "react-icons": "^5.3.0"
},
"devDependencies": {
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "eslint": "^8",
  "eslint-config-next": "14.2.8",
  "postcss": "^8",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
```

### Key Dependencies:

- **`@headlessui/react`**: Provides unstyled, accessible UI components.
- **`classnames`**: Utility to conditionally join class names for easier style management.
- **`next`**: The core framework for building the app with server-side rendering and static site generation.
- **`react-icons`**: Provides a collection of icons for use in the app.
- **`tailwindcss`**: A utility-first CSS framework for rapid UI development.

## Design Choices

- **Responsiveness**: The design is fully responsive, adjusting seamlessly for mobile and desktop views using Tailwind's responsive classes.
- **Reusable Components**: Components like `Button`, `Card`, `Typography`, and `Layout` were designed to be reusable and flexible, enhancing code modularity and reducing repetition.
