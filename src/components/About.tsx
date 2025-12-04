import { ChefHat, Heart, ShieldCheck, Clock, Leaf, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Freshly Cooked",
      description: "Every meal is prepared fresh daily, never frozen or reheated",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Kitchen",
      description: "Clean, well-maintained kitchen following strict hygiene protocols",
    },
    {
      icon: Heart,
      title: "Homemade Taste",
      description: "Simple, healthy food that feels just like home",
    },
    {
      icon: Clock,
      title: "Daily Consistency",
      description: "Reliable delivery of wholesome meals every single day",
    },
  ];

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-secondary/20 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">About MealNest</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Wholesome Meals,{" "}
            <span className="text-secondary">Made with Care</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At MealNest, we believe everyone deserves access to fresh, healthy,
            home-cooked meals. Our mission is simple: to deliver the comfort of
            homemade food to your doorstep, every single day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-meal p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 animate-fade-up delay-100">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">100% Vegetarian</h4>
              <p className="text-sm text-muted-foreground">
                All our meals are pure vegetarian, prepared with fresh vegetables
                and premium ingredients.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 animate-fade-up delay-200">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Health First</h4>
              <p className="text-sm text-muted-foreground">
                Balanced, nutritious meals with minimal oil and spices for everyday
                healthy eating.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 animate-fade-up delay-300">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Quality Assured</h4>
              <p className="text-sm text-muted-foreground">
                Premium packaging, on-time delivery, and consistent quality you can
                trust daily.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-10 animate-fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">200+</p>
              <p className="text-cream/90 text-sm md:text-base">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">5000+</p>
              <p className="text-cream/90 text-sm md:text-base">Meals Delivered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">100%</p>
              <p className="text-cream/90 text-sm md:text-base">Hygienic Kitchen</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">4.8★</p>
              <p className="text-cream/90 text-sm md:text-base">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
