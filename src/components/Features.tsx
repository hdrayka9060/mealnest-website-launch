import { Leaf, ChefHat, ShieldCheck, Package, Heart, Truck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: "Pure Veg Meals",
      description: "100% vegetarian meals made with fresh, quality ingredients",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: ChefHat,
      title: "Freshly Prepared",
      description: "Cooked fresh every day, never frozen or stored overnight",
      color: "bg-primary/20 text-primary-foreground",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Kitchen",
      description: "Strict hygiene protocols in our clean, well-maintained kitchen",
      color: "bg-accent text-accent-foreground",
    },
    {
      icon: Package,
      title: "Premium Packaging",
      description: "Leak-proof, food-safe containers that keep meals fresh",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Heart,
      title: "Balanced & Healthy",
      description: "Nutritious meals with minimal oil for everyday wellness",
      color: "bg-primary/20 text-primary-foreground",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Fast, reliable delivery to Bellandur & Kadubeesanahalli",
      color: "bg-accent text-accent-foreground",
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-secondary">MealNest?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to delivering healthy, delicious meals that make your
            daily routine easier and more enjoyable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-background shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
