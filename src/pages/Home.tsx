import Counter from "../components/Counter";
import SignupForm from "../components/SignupForm";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold tracking-tight">my-app</h1>
      <Counter />
      <SignupForm />
    </section>
  );
}
