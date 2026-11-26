export default function About() {
  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="max-w-md text-center text-slate-600">
        Built with React 19, Vite, TypeScript, Tailwind CSS, Redux Toolkit,
        React Router, TanStack Form, Zod, Prettier.
      </p>
    </section>
  );
}
