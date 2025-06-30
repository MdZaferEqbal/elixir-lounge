import { About, Art, Cocktails, Hero } from "./components";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}
