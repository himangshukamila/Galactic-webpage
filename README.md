🚀 Galactic Explorer
A high-performance, interactive 3D-feeling space exploration dashboard. Galactic Explorer leverages the latest web technologies to bring the wonders of the universe to your browser using real-time data from NASA and high-fidelity planetary textures.

✨ Features
🪐 Interactive Solar System: A dynamic orbit view where planets glide around a glowing Sun with realistic CSS-based orbital paths.

📸 NASA Media Integration: Real-time fetching of "Astronomy Picture of the Day" (APOD) and Mars Rover imagery via NASA APIs.

🌌 Deep Space Gallery: High-resolution galleries of nebulae, stars, and galaxies using object-contain for full-fidelity visibility.

📡 Mission Tracking: Detailed information on humanity’s greatest missions like James Webb (JWST) and Artemis.

🧬 Responsive 3D UI: Powered by Framer Motion for smooth transitions and Tailwind v4 for modern, high-performance styling.

🛠️ Tech Stack
Core: React 19 (The latest React engine)

Bundler: Vite 6

Styling: Tailwind CSS v4 (Using the new @theme engine and bg-linear syntax)

Animations: Framer Motion 12

API: Axios for NASA Open API & Le Système Solaire API

🚀 Getting Started
Prerequisites
Node.js (v18.0 or higher)

npm or yarn

Installation
Clone the repository:

Bash

git clone https://github.com/your-username/galactic-explorer.git
cd galactic-explorer
Install dependencies:

Bash

npm install
Run Development Server:

Bash

npm run dev
Open the app: Navigate to http://localhost:5173 in your browser.

📁 Project Structure
Plaintext

├── public/              # High-res local planet PNGs
├── src/
│   ├── components/      # UI Components (SectionHeader, Modal, etc.)
│   ├── services/        # API fetching logic (NASA, Solar System)
│   ├── utils/           # Animation variants (effects.js)
│   ├── pages/           # Main views (Planets, Missions, Gallery)
│   ├── App.jsx          # Route configuration
│   └── index.css        # Tailwind v4 Unified Styles
└── vite.config.js       # Tailwind v4 Vite Plugin configuration
🛰️ Data Sources
This project stands on the shoulders of giants. Data is sourced from:

NASA Open APIs: For APOD and Mars Rover photos.

The Solar System OpenData: For accurate planetary gravity, density, and temperatures.

Wikimedia Commons: For high-fidelity, transparent planetary textures.

🛡️ License
Distributed under the MIT License. See LICENSE for more information.

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

👨‍🚀 Author
Your Name

GitHub: @your-username

LinkedIn: Your Name

"The cosmos is within us. We are made of star-stuff." — Carl Sagan
