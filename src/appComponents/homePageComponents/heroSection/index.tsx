import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroComponent = () => {
  return (
    <section className="bg-primary text-white min-h-[100vh] flex items-center">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="max-w-4xl">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              PLS Services - <span className="text-[#FF6B35]">Cloud and DevOps</span>
            </h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud-Powered Scalability</h1>

          <p className="text-lg md:text-xl mb-10">CI/CD pipelines, cloud migrations, and DevOps automation for seamless infrastructure.</p>

          <Button
            variant="secondary"
            size="lg"
            asChild
            className="px-6 py-6 text-lg rounded-md bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
            <Link href="/discover-more">Discover More</Link>
          </Button>
        </div>
      </div>

      {/* Navigation dots on the right - purely decorative */}
      <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white opacity-60 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroComponent;

