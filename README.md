# User Management Dashboard

A modern, responsive React-based dashboard for managing and displaying user data. Built with React, TypeScript, and Material-UI, this application demonstrates clean, modular development practices with a focus on performance and user experience.

![User Management Dashboard](https://i.imgur.com/example.png)

## Features

- 📊 **Responsive Table Display**
  - Clean and modern table layout
  - Sortable columns (Name, Email, Company Name)
  - Real-time search functionality
  - Beautiful user avatars with initials

- 🔍 **Advanced Search**
  - Search across name and email fields
  - Real-time filtering
  - Intuitive search interface

- 🎨 **Modern UI/UX**
  - Material Design components
  - Gradient text effects
  - Smooth animations
  - Responsive layout
  - Beautiful color scheme

- ⚡ **Performance**
  - Optimized rendering
  - Efficient state management
  - TypeScript for type safety

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- Vite
- Axios

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-management-dashboard.git
cd user-management-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   └── UserTable.tsx      # Main table component
├── services/
│   └── userService.ts     # API service
├── types/
│   └── user.ts           # TypeScript interfaces
├── App.tsx               # Main application component
├── main.tsx             # Application entry point
└── theme.ts             # Material-UI theme configuration
```

## Features in Detail

### Table Functionality
- Sortable columns with ascending/descending order
- Real-time search filtering
- Responsive design for all screen sizes
- Beautiful user avatars with dynamic colors
- Company name chips with icons

### UI Components
- Modern gradient text effects
- Material Design components
- Custom theme configuration
- Responsive layout
- Loading states and error handling

## API Integration

The application uses the JSONPlaceholder API to fetch user data:
- Endpoint: `https://jsonplaceholder.typicode.com/users`
- Data includes: name, email, company, phone, website, and address

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Material-UI](https://mui.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
