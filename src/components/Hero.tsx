import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import designerPortrait from "@/assets/designer-portrait.jpg";
import { ImageZoom } from "./ui/shadcn-io/image-zoom";
import { TiltEffect } from "@/components/ui/tilt-effect";
import { Card } from "./ui/card";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center gap-40 md:gap-0 px-10 py-20 container">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div
          className={`space-y-8 fade-in text-center lg:text-left ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="space-y-4">
            <h1 className="hero-text">
              Hi, I'm a
              <br />
              <span>Saleheen Uddin Sakin</span>
            </h1>
            <h2 className="text-4xl font-bold gradient-text">
              A Full Stack Developer
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/10rAURSFi2pdiu9tKR8vN99aRogdA4Qhn/view?usp=sharing"
              target="_blank"
            >
              <Button
                className="bg-hero-accent text-surface px-8 py-3 hover:bg-hero-accent/90 transition-all duration-300"
                size="lg"
              >
                Preview Resume
              </Button>
            </a>
            <a
              href="https://drive.usercontent.google.com/download?id=10rAURSFi2pdiu9tKR8vN99aRogdA4Qhn&export=download&authuser=0&confirm=t&uuid=0b87e517-b1f5-4035-a16a-e5d8a8ac1d38&at=AN8xHopxUfnJC9_-inDdpzFnw4_p:1756673107478"
              target="_blank"
            >
              <Button
                variant="outline"
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface px-8 py-3 transition-all duration-300"
                size="lg"
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div
          className={`flex justify-center lg:justify-end fade-in order-first lg:order-last ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            <ImageZoom>
              <TiltEffect>
                <Card className="overflow-hidden pt-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] bg-transparent border-0">
                  <img
                    alt="Portrait image"
                    className="h-auto w-full border-b-8 border-accent-warm rounded-lg"
                    src={designerPortrait}
                  />
                </Card>
              </TiltEffect>
            </ImageZoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
