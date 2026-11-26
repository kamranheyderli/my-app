import { Link, Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-50 p-8 text-slate-900">
      <nav className="flex gap-4 text-sm font-medium">
        <Link className="text-slate-600 hover:text-slate-900" to="/">
          Home
        </Link>
        <Link className="text-slate-600 hover:text-slate-900" to="/about">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
