# 🎬 Movie Finder Web Application  

A React-based web app that allows users to search and explore movies with details like title, poster, release year, rating, and overview.  
Built as part of my journey to learn **React fundamentals** including components, props, hooks, and API integration.  

---

## 🚀 Features  
- 🔍 Search for movies by title  
- 🎥 Display movie details (poster, release year, rating, overview)  
- 🌐 Real-time data from [TMDB API]
- 📱 Responsive design for desktop and mobile  
- 🎨 Simple, clean, beginner-friendly UI  

---

## 🛠️ Tech Stack  
- **Frontend**: React (Hooks, Props, State)  
- **Styling**: CSS 
- **API**: The Movie Database (TMDB) API  
- **Deployment**: Netlify / Vercel  

---

## 📸 Screenshots  

---

## 🔗 Live Demo  
👉 [Try it here](https://movie-finder-tau-olive.vercel.app/)  

## 📂 Repository  
👉 [GitHub Repo](https://github.com/Akhi1praveen/Movie_Finder)  

---

## 🛠️ Setup & Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/movie-finder.git
   cd movie-finder
2. **Install dependencies**
   ```bash
   npm install
4. **Add TMDB API Key**
   - create api from tmdb site using your email

   - Go to api.jsx file in services folder

   - Add your TMDB API key inside it:
```bash
   const API_KEY = "Your_api_key_here";
```
   - Note: For security you need to create an environmental variable for api key at the time of deployment and make it sensitive then paste the variable name instead of key.
5. **Start the project**
   ```bash
   npm run dev
