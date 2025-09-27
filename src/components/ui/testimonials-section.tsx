import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    craft: "Ceramic Artist",
    image: "👩‍🎨",
    content: "MingleMakers helped me reduce material costs by 40% while connecting me with amazing fellow artisans. The collaborative ordering feature is a game-changer!",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    craft: "Woodworker",
    image: "👨‍🔧",
    content: "The AI suggestions saved me hours of research. I discovered new suppliers I never would have found on my own, all with verified quality ratings.",
    rating: 5
  },
  {
    name: "Elena Petrov",
    craft: "Textile Designer",
    image: "🧵",
    content: "Being part of this cooperative transformed my business. I can now afford premium materials and my products stand out in the market.",
    rating: 5
  },
  {
    name: "James Thompson",
    craft: "Metalsmith",
    image: "🔨",
    content: "The bulk ordering system is brilliant. What used to be expensive individual purchases are now affordable group orders with fellow makers.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Artisans Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of makers who've transformed their craft through collaborative sourcing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover-lift shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-coral text-coral" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.craft}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};