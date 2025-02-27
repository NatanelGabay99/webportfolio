import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNavBar } from "@/components/ui/FloatingNavBar";
import { IoHome } from "react-icons/io5";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-7-xl w-full">
      <FloatingNavBar navItems={[{name: 'Home', link: '/', icon: <IoHome />}]}/>
      <Hero />
      <Grid />
    </div>
   </main>
  )
};
