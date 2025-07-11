# Zerodha Stock Trading Platform

A full-stack stock trading platform inspired by Zerodha, built with React, Node.js, and MongoDB.

## 🚀 Features

### Frontend (React)
- **Landing Page**: Modern, responsive design with hero sections
- **Product Showcase**: Detailed product information and features
- **Pricing Plans**: Transparent brokerage and pricing information
- **User Authentication**: Sign up and login functionality

### Dashboard (React)
- **Portfolio Overview**: holdings and positions
- **Order Management**: Buy/sell orders
- **Analytics**: Charts and performance metrics

### Backend (Node.js + MongoDB)
- **RESTful API**: Complete CRUD operations
- **User Authentication**: Secure login/signup with bcrypt
- **Database Models**: Holdings, Positions, Orders, Users
- **Funds Management**: transactions

## 📁 Project Structure

```
Zerodha/
├── backend/                 # Node.js API server
│   ├── index.js            # Main server file
│   ├── model/              # MongoDB models
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── UserModel.js
│   ├── schemas/            # Database schemas
│   └── .env               # Environment variables (not in git)
├── frontend/               # Main React application
│   ├── src/
│   │   ├── landing_page/   # Landing page components
│   │   │   ├── home/       # Home page sections
│   │   │   ├── about/      # About page
│   │   │   ├── pricing/    # Pricing page
│   │   │   ├── products/   # Products page
│   │   │   ├── signup/     # Signup page
│   │   │   └── support/    # Support page
│   │   └── dashboard/      # Dashboard components
└── dashboard/              # Separate React dashboard app
    ├── src/
    │   ├── components/     # Dashboard components
    │   │   ├── Dashboard.js
    │   │   ├── Holdings.js
    │   │   ├── Orders.js
    │   │   ├── Positions.js
    │   │   └── WatchList.js
    │   └── data/           # Static data
```

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI framework
- **CSS3** - Styling
- **JavaScript (ES6+)** - Programming language

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **dotenv** - Environment variables

### Development Tools
- **Nodemon** - Development server
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Zerodha
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Configuration**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your MongoDB connection string
   MONGO_URL = your_mongodb_connection_string_here
   ```

4. **Start Backend Server**
   ```bash
   npm start
   # Server runs on http://localhost:3002
   ```

5. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm start
   # Frontend runs on http://localhost:3000
   ```

6. **Dashboard Setup**
   ```bash
   cd ../dashboard
   npm install
   npm start
   # Dashboard runs on http://localhost:3001
   ```

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=3002
NODE_ENV=development

# Database Configuration
MONGO_URL=your_mongodb_connection_string

# JWT Configuration (optional)
JWT_SECRET=your_jwt_secret_key
```

## 🗄️ Database Schema

### Holdings
- `name` - Stock name
- `qty` - Quantity held
- `avg` - Average price
- `price` - Current price
- `net` - Net profit/loss percentage

### Orders
- `name` - Stock name
- `qty` - Quantity
- `price` - Order price
- `mode` - BUY/SELL

### Positions
- `product` - Product type
- `name` - Stock name
- `qty` - Quantity
- `avg` - Average price
- `price` - Current price
- `net` - Net profit/loss
- `isLoss` - Loss indicator

### Users
- `email` - User email
- `password` - Hashed password

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **Environment Variables**: Sensitive data protected
- **CORS Configuration**: Cross-origin resource sharing
- **Input Validation**: Request body validation

## 🎨 UI Components

### Landing Page
- Product showcases
- Pricing tables
- Team information
- Support forms

### Dashboard
- Portfolio overview
- Real-time charts
- Order management interface
- Watchlist functionality
- Fund management

**Note**: This is a demo project inspired by Zerodha Company.