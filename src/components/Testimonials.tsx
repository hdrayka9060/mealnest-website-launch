import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bellandur",
      text: "Fresh and clean meals every day. Finally found healthy food that doesn't compromise on taste!",
      rating: 5,
    },
    {
      name: "Rahul Menon",
      location: "Kadubeesanahalli",
      text: "Healthy food without too much oil or spice. Perfect for my daily lunch at work.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      location: "Bellandur",
      text: "Feels like homemade. Very hygienic packaging and always delivered on time!",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      location: "HSR Layout",
      text: "The Standard Meal is amazing value. Dal, roti, rice, sabzi AND gulab jamun for ₹139!",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-foreground">Customer Love</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-secondary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy customers have
            to say about MealNest.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-meal p-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
