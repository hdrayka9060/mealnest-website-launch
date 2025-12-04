import { Package, Leaf, ShieldCheck, Truck, Recycle } from "lucide-react";
import packagingImg from "@/assets/packaging.jpg";

const Packaging = () => {
  const features = [
    { icon: Leaf, text: "Pure Veg" },
    { icon: ShieldCheck, text: "Food Safe" },
    { icon: Package, text: "Leak-Proof" },
    { icon: Truck, text: "Fast Delivery" },
    { icon: Recycle, text: "Eco-Friendly" },
  ];

  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-secondary/20 mb-6">
              <Package className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Premium Packaging</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Delivered <span className="text-secondary">Fresh & Safe</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our meals arrive in premium, leak-proof containers designed to keep
              your food fresh, hot, and delicious. Every package reflects our
              commitment to quality and hygiene.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-secondary text-sm">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Food-grade containers</span> —
                  Safe, BPA-free materials for your health
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-secondary text-sm">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Leak-proof design</span> —
                  No spills, no mess, perfect every time
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-secondary text-sm">✓</span>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Branded packaging</span> —
                  MealNest quality you can trust
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={packagingImg}
                  alt="MealNest premium food packaging with compartments for Indian meals"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-secondary rounded-2xl p-4 shadow-lg">
                <p className="text-sm font-medium text-secondary-foreground/80">Quality</p>
                <p className="text-xl font-bold text-secondary-foreground">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
