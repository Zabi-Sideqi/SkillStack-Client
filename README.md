
# 🧠 Quiz Web Application

An interactive Quiz Web App designed to help users test their knowledge and improve their skills through multiple-choice quizzes.  
The platform includes three difficulty levels — Beginner, Intermediate, and Advanced — allowing users to challenge themselves step by step.

The quiz covers general knowledge and logical thinking questions. Each quiz session provides instant feedback and a final score that is stored in the user’s profile. The app is ideal for learners, students, and anyone who enjoys brain-training challenges.

---

## 📝 How the Quiz Works

1. **Sign up or log in**  
   Users create an account or log in securely.

2. **Choose a difficulty level**  
   - 🟢 **Beginner** — simple questions, great for warming up.  
   - 🟡 **Intermediate** — moderate difficulty, more challenging.  
   - 🔴 **Advanced** — complex and timed questions for experienced users.

3. **Take the quiz**  
   Each quiz presents multiple-choice questions. Users select their answer and receive instant feedback.

4. **View results**  
   After completing the quiz, the app calculates the score and stores it in the user’s personal results history.

5. **Track progress**  
   Users can view their past scores and monitor their improvement over time.

---

## 🚀 Features

- 🧠 Three quiz levels – Beginner, Intermediate, Advanced  
- 👤 User authentication – Secure sign up and login  
- 📊 Result tracking – All scores are saved to the user’s account  
- 🔐 Protected routes – Only authenticated users can take the quiz  
- 🌐 RESTful API – Clean, modern backend architecture  
- ⚡ Responsive UI – Works on desktop and mobile  

---

## 🛠️ Tech Stack

**Frontend**  
- React.js (with Router)  
- Axios for API calls  
- CSS / Tailwind for styling  

**Backend**  
- Node.js & Express  
- MongoDB with Mongoose  
- JWT Authentication  
- bcrypt for password encryption  
- dotenv & CORS  

---

## 🏗️ Project Structure

QuizApp/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json


## ⚡ Installation & Setup

cd backend
npm install

cd ../client
npm install

Set environment variables
Create a .env file in backend/ and add:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

Run the app
Open two terminals:

# Terminal 1 - Run backend
cd backend
npm run dev

# Terminal 2 - Run frontend
cd client
npm start


| Method | Endpoint           | Description                 | Auth |
| ------ | ------------------ | --------------------------- | ---- |
| POST   | /api/auth/register | Register a new user         | ❌    |
| POST   | /api/auth/login    | Login user and return token | ❌    |
| GET    | /api/results       | Get user results            | ✅    |
| POST   | /api/results       | Save user quiz result       | ✅    |


🌱 Future Improvements

📚 Add topic-specific quizzes (math, history, science, etc.)

🧭 Timer and lifeline options (e.g., 50/50)

🧑‍🏫 Admin dashboard for quiz management

🏆 Leaderboard with rankings

📲 Progressive Web App (PWA) support

🎨 More animations and advanced UI design

👉 Built with ❤️ by Zabi