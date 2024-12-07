import { Card } from "@/components/ui/card";
import { TTSForm } from "@/components/tts-form";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
      <Hero />
      
      <div className="container px-4 py-16 mx-auto">
        <Card className="p-6 md:p-8 shadow-xl bg-card/50 backdrop-blur-sm">
          <TTSForm />
        </Card>

        <Features />
        <Testimonials />
        <FAQ />

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p className="max-w-md mx-auto">
            Powered by advanced AI technology. Experience natural-sounding speech synthesis without any registration required.
          </p>
        </footer>
      </div>
    </main>
  );
}