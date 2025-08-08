📱 SocialApp – Frontend
A simple React-based social media frontend where users can create posts, delete posts, and navigate seamlessly between pages without full reloads — thanks to React’s Single Page Application (SPA) architecture.

🚀 Features
Add a Post – Create and publish new posts instantly.

Delete a Post – Remove unwanted posts with a single click.

SPA Navigation – Navigate between Home and Create Post without page reloads.

Real-time UI Updates – See changes immediately after actions.

💡 Biggest Advantage of React SPA
React’s Single Page Application model allows instant navigation and dynamic UI updates without the browser refreshing the entire page.
This leads to:

Faster Performance – Only the necessary components are updated.

Better User Experience – No flickering or full-page reloads.

State Preservation – Your app retains state between navigations.

Reduced Server Load – Fewer full-page requests to the backend.

📂 Project Structure
pgsql
Copy
Edit
socialApp/
│
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── CreatePost.jsx
│   │   └── PostCard.jsx
│   │
│   ├── App.jsx
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md
🛠️ Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/socialApp.git
cd socialApp
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm start
Open in browser

arduino
Copy
Edit
http://localhost:3000
📸 Screenshots
Home Page	Create Post Page
