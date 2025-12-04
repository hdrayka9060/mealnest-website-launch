import { Button } from "./ui/button";
import { Leaf, ShieldCheck, Truck, Sparkles } from "lucide-react";
import heroThali from "@/assets/hero-thali.jpg";

const WHATSAPP_LINK = "https://wa.me/917041590049";

const Hero = () => {
  const badges = [
    { icon: Sparkles, text: "Fresh" },
    { icon: ShieldCheck, text: "Hygienic" },
    { icon: Leaf, text: "Pure Veg" },
    { icon: Truck, text: "Free Delivery" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-cream to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-secondary/20">
              <Leaf className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                100% Vegetarian Meals
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Fresh, Healthy Meals{" "}
              <span className="text-secondary">Delivered Daily</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Pure vegetarian, hygienic, homemade-style meals prepared fresh
              every day. Experience the taste of home in Bellandur.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order Now on WhatsApp
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#menu">View Today's Menu</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              {badges.map((badge, index) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <badge.icon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroThali}
                  alt="Delicious vegetarian thali with rice, dal, roti, sabzi and gulab jamun"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-background rounded-2xl p-4 shadow-lg border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Free Delivery</p>
                    <p className="text-sm text-muted-foreground">Bellandur Area</p>
                  </div>
                </div>
              </div>

              {/* Price Badge */}
              <div className="absolute -top-4 -right-4 bg-primary rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-sm font-medium text-primary-foreground/80">Starting at</p>
                <p className="text-2xl font-bold text-primary-foreground">₹99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
