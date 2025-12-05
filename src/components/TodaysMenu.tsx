import { Leaf, ShieldCheck } from "lucide-react";
import menuRoti from "@/assets/menu-roti.jpg";
import menuSabzi from "@/assets/menu-sabzi.jpg";
import menuDal from "@/assets/menu-dal.jpg";
import menuRice from "@/assets/menu-rice.jpg";
import menuSweet from "@/assets/menu-sweet.jpg";

const TodaysMenu = () => {
  const menuItems = [
    {
      name: "Fresh Rotis",
      description: "Soft, fluffy chapatis made fresh with whole wheat flour",
      image: menuRoti,
      badge: "5 Pieces",
    },
    {
      name: "Seasonal Sabzi",
      description: "Colorful mixed vegetable curry with aromatic spices",
      image: menuSabzi,
      badge: "Gobi Mix",
    },
    {
      name: "Dal Tadka",
      description: "Creamy yellow lentils with ghee tempering",
      image: menuDal,
      badge: "Protein Rich",
    },
    {
      name: "Steamed Rice",
      description: "Fluffy basmati rice cooked to perfection",
      image: menuRice,
      badge: "Premium",
    },
    {
      name: "Gulab Jamun",
      description: "Sweet milk dumplings soaked in rose-flavored syrup",
      image: menuSweet,
      badge: "Sweet Treat",
    },
  ];

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-foreground">🍽️ Today's Menu</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What's <span className="text-secondary">Cooking Today</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fresh, healthy items prepared daily with love. Menu may vary based on
            seasonal availability.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="card-meal group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                
                {/* Badges */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs text-secondary">
                    <Leaf className="w-3 h-3" />
                    <span>Pure Veg</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-accent-foreground">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Hygienic</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        {/* <p className="text-center text-sm text-muted-foreground mt-8 animate-fade-up delay-500">
          * Menu items may vary based on seasonal availability. Contact us for today's exact menu.
        </p> */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
          {/* <p className="text-center text-sm text-muted-foreground mb-4 animate-fade-up delay-500"> */}
            *Menu changes daily to give you variety. Contact us for today's exact menu.
          </p>
          <a
            href="https://wa.me/917041590049?text=Hi%20MealNest!%20What's%20on%20today's%20menu?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ask About Today's Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default TodaysMenu;
