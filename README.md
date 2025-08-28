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
- **Deployment**: Vercel  

---

## 📸 Screenshots  
<img width="1854" height="939" alt="image" src="https://github.com/user-attachments/assets/bba5d159-71b3-4982-93b1-8df028081d2c" />

<img width="1859" height="935" alt="image" src="https://github.com/user-attachments/assets/8999736d-bbed-463a-bc0e-b8395c71ab5c" />

<img width="1900" height="852" alt="image" src="https://github.com/user-attachments/assets/6af9b0b4-1876-4f4e-bbd9-74d7330a7ee6" />

<img width="1885" height="919" alt="image" src="https://github.com/user-attachments/assets/3f621ca3-6532-4555-9bd9-9793095d0481" />

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
