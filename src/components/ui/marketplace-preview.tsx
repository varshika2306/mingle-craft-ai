import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Package, MapPin, Users } from "lucide-react";

const featuredMaterials = [
  {
    id: 1,
    name: "Premium Oak Planks",
    supplier: "Mountain Wood Co.",
    price: "$45/board ft",
    rating: 4.9,
    location: "Oregon, USA",
    inStock: true,
    collaborators: 12,
    image: "🌳"
  },
  {
    id: 2,
    name: "Organic Cotton Canvas",
    supplier: "EcoTextile Supply",
    price: "$8.50/yard",
    rating: 4.8,
    location: "California, USA",
    inStock: true,
    collaborators: 8,
    image: "🧵"
  },
  {
    id: 3,
    name: "Artisan Clay Mix",
    supplier: "Terra Ceramics",
    price: "$12/25lb bag",
    rating: 5.0,
    location: "North Carolina, USA",
    inStock: false,
    collaborators: 15,
    image: "🏺"
  },
  {
    id: 4,
    name: "Sterling Silver Wire",
    supplier: "Noble Metals Inc.",
    price: "$3.20/oz",
    rating: 4.7,
    location: "Colorado, USA",
    inStock: true,
    collaborators: 6,
    image: "⚡"
  }
];

export const MarketplacePreview = () => {
  return (
    <section className="py-20 bg-background" id="marketplace">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Materials at Wholesale Prices
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Access verified suppliers, compare prices, and join group orders to unlock bulk pricing
          </p>
          <Button size="lg" className="bg-gradient-accent text-white hover-lift">
            Browse Full Marketplace
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {featuredMaterials.map((material) => (
            <Card key={material.id} className="hover-lift shadow-card border-border/50 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{material.image}</div>
                  <Badge 
                    variant={material.inStock ? "default" : "secondary"}
                    className={material.inStock ? "bg-green-100 text-green-800" : ""}
                  >
                    {material.inStock ? "In Stock" : "Pre-Order"}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{material.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{material.supplier}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{material.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-coral text-coral" />
                    <span className="text-sm font-medium">{material.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{material.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{material.collaborators} artisans interested</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Package className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button size="sm" className="flex-1 bg-teal text-white">
                    Join Group
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-card/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-soft">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Premium Materials</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Verified Suppliers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Average Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};