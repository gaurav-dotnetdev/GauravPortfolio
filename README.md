# Gaurav Yadav - Senior .NET Core Developer Portfolio

Modern, responsive personal developer portfolio website designed for **Gaurav Yadav**, Senior .NET Core Developer with 6+ years of experience. Built using standard HTML5, CSS3, and JavaScript, ready for **100% free hosting on GitHub Pages**.

---

## 📁 Project Structure

```
GauravPortfolio/
├── index.html              # Main HTML5 portfolio single page
├── css/
│   ├── style.css           # Core theme variables, typography, and base layout
│   ├── components.css      # Header, Hero, Cards, Timeline, Badges, Buttons, Contact
│   └── animations.css      # Scroll reveal animations & micro-interactions
├── js/
│   ├── main.js             # Theme switcher, mobile menu, scroll spy active link highlighter
│   └── animations.js       # IntersectionObserver scroll reveal setup
├── assets/
│   └── docs/
│       └── RESUME_INSTRUCTIONS.txt # Guidance for adding Gaurav_Yadav_Resume.pdf
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML Sitemap for SEO
└── README.md               # Project documentation and deployment guide
```

---

## ⚡ How to Preview Locally

You do not need any backend or complex build tools to run this portfolio.

### Option 1: Double-Click / Browser Direct
- Simply double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
Using Node.js static server:
```bash
npx serve .
```
Or using Python:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 📝 Placeholders to Customize Before Deployment

1. **Resume File**: Place your PDF resume in `assets/docs/Gaurav_Yadav_Resume.pdf`.
2. **GitHub URL**: In `index.html`, replace `https://github.com/your-username` with your actual GitHub profile link.
3. **LinkedIn URL**: In `index.html`, replace `https://linkedin.com/in/your-username` with your actual LinkedIn profile link.

---

## 🚀 How to Deploy for FREE on GitHub Pages

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository (e.g., `gaurav-portfolio` or `gauravyadav.github.io`).

2. **Push Code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release for Gaurav Yadav"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Select **Branch**: `main` and **Folder**: `/ (root)`.
   - Click **Save**.

4. **Live Site**:
   - Within 1–2 minutes, your website will be live at `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`!
