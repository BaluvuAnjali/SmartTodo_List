# SmartTodo – Your Personal Learning and Placement Preparation Assistant

A full-stack student productivity platform combining task management, individual task streaks, a six-week placement roadmap, fresher interview preparation, MCQ practice, and progress analytics.

## Abstract
SmartTodo helps students organize academic and placement work in one place. It combines a MongoDB-backed task manager with a structured learning roadmap, interview question bank, quiz practice, and progress dashboard. The application provides a single view of daily work and learning progress.

## Problem statement
Students often use separate tools or informal notes to track assignments, technical learning, interview preparation, and practice tests. This makes it difficult to understand priorities and measure consistent progress.

## Objectives
- Manage tasks with categories, priorities, due dates, search, and filters.
- Track completion history and a separate streak for each task.
- Follow a six-week placement preparation roadmap.
- Revise beginner-to-intermediate technical interview questions.
- Practice MCQs with scoring and detailed answer review.
- View productivity and learning analytics.

## Proposed system
The React client communicates with an Express REST API. Express validates requests and uses Mongoose to store tasks in MongoDB. Roadmap completion, interview attempts/bookmarks, and quiz history are stored in browser localStorage in this initial release and are isolated behind frontend data modules for future API integration.

## Features
- Dashboard with live task totals and roadmap progress.
- Full task CRUD, search, category/priority/status filters.
- Individual task current/best streaks and completion history.
- Six-week roadmap with persistent topic checkboxes and suggestions.
- 53 interview questions across 13 categories; reveal answers, bookmark and mark attempted.
- 90 MCQs across nine categories; previous/next, submit, score, answer review, retake.
- Progress page with weekly activity, streaks, roadmap progress, quiz history and interview practice.
- Responsive purple-and-white interface.

## Technologies
- Frontend: React 18, Create React App (`react-scripts`), JavaScript, CSS, Lucide React.
- Backend: Node.js, Express, Mongoose, CORS, dotenv.
- Database: MongoDB Community Server or MongoDB Atlas.

## System architecture
```text
Student
  |
  v
React UI (Dashboard / Tasks / Roadmap / Interview / Quiz / Progress)
  |
  | HTTP JSON REST API
  v
Express + Node.js
  |
  v
Mongoose Task Model
  |
  v
MongoDB (tasks and completion dates)

Browser localStorage: roadmap topic progress, interview attempts/bookmarks, quiz history
```

## Folder structure
```text
SmartTodo_Placement_Ready/
  README.md
  backend/
    .env.example
    package.json
    server.js
    src/
      models/Task.js
      routes/taskRoutes.js
      controllers/taskController.js
      middleware/errorHandler.js
  frontend/
    package.json
    public/index.html
    src/
      index.js
      App.js
      styles.css
      components/
      pages/
      data/
      services/
```

## Database design
`tasks` collection:
- `title` (required string)
- `category` (enum)
- `priority` (High / Medium / Low)
- `dueDate` (optional date)
- `completed` (boolean)
- `completionDates` (array of unique `YYYY-MM-DD` date strings)
- `currentStreak`, `bestStreak` (numbers)
- `createdAt`, `updatedAt` (Mongoose timestamps)

Streaks are calculated per task. Completing a task more than once on the same calendar day does not add another completion date. A gap of one day continues a streak; otherwise the current streak restarts at one.

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API and database status |
| GET | `/api/tasks` | List tasks |
| POST | `/api/tasks` | Create a task |
| PATCH | `/api/tasks/:id` | Edit task or toggle completion |
| DELETE | `/api/tasks/:id` | Delete task |

## Installation
### Prerequisites
Install Node.js 18+ and MongoDB Community Server, or create a MongoDB Atlas database. Open this folder in VS Code.

### Backend
```bash
cd backend
copy .env.example .env
```
On macOS/Linux use `cp .env.example .env`. Edit `.env` and set `MONGO_URI`. Then:
```bash
npm install
npm run dev
```
Backend runs at `http://localhost:5000`.

Example `.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smarttodo
CLIENT_URL=http://localhost:3000
```
For Atlas, replace `MONGO_URI` with your Atlas connection string and keep credentials private.

### Frontend
Open a second VS Code terminal:
```bash
cd frontend
npm install
npm start
```
Create React App opens `http://localhost:3000`. The frontend proxy forwards `/api` requests to port 5000.

## How to use
1. Start MongoDB.
2. Start the backend terminal.
3. Start the frontend terminal.
4. Add a task from **My Tasks**; it is stored in MongoDB.
5. Tick roadmap topics and practice interview questions or quizzes.
6. View your learning and task metrics in **Progress Tracker**.

## Screenshots
Add screenshots of your running application here:
- `screenshots/dashboard.png`
- `screenshots/tasks.png`
- `screenshots/roadmap.png`
- `screenshots/quiz-review.png`

## Future enhancements
- User registration, authentication, and per-user task ownership.
- Move roadmap, interview, and quiz progress to MongoDB.
- Admin-managed question bank and custom roadmaps.
- Reminder notifications and calendar integration.
- Exportable reports and richer analytics.

## Conclusion
SmartTodo provides an integrated environment for student task planning and placement preparation. It combines persistent task management with structured learning and practice tools in a modular full-stack design.

## Notes and limitations
- MongoDB must be running and configured before task operations work.
- No authentication is included; this is intended as a local academic demo, not a public multi-user deployment.
- Roadmap, interview and quiz progress currently use this browser's localStorage. Task data is stored in MongoDB as required.
- The question bank is educational starter content; students should verify concepts against their course material.
