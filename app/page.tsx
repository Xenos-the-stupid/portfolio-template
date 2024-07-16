import Hero from "@/components/hero";
import LastWork from "@/components/last-work";
import Marks from "@/components/marks";
import Services from "@/components/services";

const page = () => {
  return (
    <main>
      <Hero />
      <Marks />
      <Services />
      <LastWork />
    </main>
  );
};

export default page;
