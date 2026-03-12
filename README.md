# 🌲 The Wild Oasis - Internal Management Dashboard

<img width="1876" height="886" alt="image" src="https://github.com/user-attachments/assets/ff31e445-5f9f-4764-a250-8a757d470b1d" />


![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

A full-stack internal hotel management dashboard built with **React & Vite**. This application is specifically designed for hotel staff to seamlessly manage cabins, bookings, guests, and application settings.

🔗 **[Live Demo](https://the-wild-oasis-kohl-eight.vercel.app/dashboard)**

## ✨ Key Features

* **📊 Interactive Dashboard:** Visualizes recent bookings, sales, and occupancy rates using custom charts (`Recharts`).
* **🏕️ Cabin Management:** Full CRUD operations for cabins, including uploading high-quality images directly to Supabase Storage.
* **📅 Booking System:** Manage guest reservations, filter by status, and handle the check-in and check-out processes smoothly.
* **🔐 Authentication:** Secure staff login and user management powered by Supabase Auth.
* **⚙️ App Settings:** Dynamically update global settings like pricing, breakfast costs, and booking lengths.
* **🌙 Dark/Light Mode:** Built-in theme toggle for a better user experience.
* **🚀 Optimized Data Fetching:** Utilizes `TanStack React Query` for seamless remote state management, caching, and automatic UI updates.

## 🛠️ Tech Stack & Dependencies

Based on the project architecture, here are the core technologies powering this application:

* **Core Framework:** React 19, Vite, React Router DOM v7
* **State & Data Fetching:** TanStack React Query v5
* **Backend & Database:** Supabase (PostgreSQL, Authentication, Storage)
* **Styling:** Styled Components
* **Forms & Validation:** React Hook Form
* **UI/UX:** React Hot Toast (Notifications), React Icons, Recharts (Data Visualization)
* **Date Handling:** `date-fns`

## 🚀 Getting Started (Local Development)

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/mohamed-samy0/the-wild-oasis.git](https://github.com/mohamed-samy0/the-wild-oasis.git)

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up Environment Variables:**
   
  Create a .env file in the root directory and add your Supabase credentials: 
  
     ```bash
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_KEY=your_supabase_anon_key

4. **Run the development server:**
   ```bash
   npm run dev
  Open http://localhost:5173 to view it in your browser.

👨‍💻 Author
Mohamed Samy

React / Next.js Front-End Developer & Artificial Intelligence Student.

GitHub:[ @mohamed-samy0](https://github.com/Mohamed-samy0)

LinkedIn: [Mohamed Samy](https://www.linkedin.com/in/mohamed-samy-886516377/)
