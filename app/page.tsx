import Hero from "@/components/hero";
import LastWork from "@/components/last-work";
import Marks from "@/components/marks";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";

const page = () => {
  return (
    <main>
      <Hero />
      <Marks />
      <Services />
      <LastWork />
      <Marks />
      <Testimonial />
    </main>
  );
};

export default page;
