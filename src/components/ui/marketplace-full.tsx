import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Package, 
  ShoppingCart,
  Heart,
  TrendingUp,
  Clock
} from "lucide-react";

interface Material {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  supplier: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  trending: boolean;
  lowStock: boolean;
}

const mockMaterials: Material[] = [
  {
    id: "1",
    name: "Premium Stoneware Clay",
    category: "Clay & Ceramics",
    price: 45,
    unit: "kg",
    stock: 150,
    supplier: "Gujarat Ceramics Co.",
    location: "Ahmedabad",
    rating: 4.8,
    reviews: 127,
    image: "/placeholder.svg",
    trending: true,
    lowStock: false
  },
  {
    id: "2", 
    name: "Organic Cotton Yarn",
    category: "Textiles",
    price: 120,
    unit: "kg",
    stock: 8,
    supplier: "Rajasthan Textiles",
    location: "Jaipur",
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg",
    trending: false,
    lowStock: true
  },
  {
    id: "3",
    name: "Natural Indigo Dye",
    category: "Dyes & Colors",
    price: 280,
    unit: "kg",
    stock: 25,
    supplier: "Kerala Natural Dyes",
    location: "Kochi",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg",
    trending: true,
    lowStock: false
  },
  {
    id: "4",
    name: "Brass Sheet Metal",
    category: "Metals",
    price: 450,
    unit: "kg",
    stock: 75,
    supplier: "Mumbai Metals Ltd.",
    location: "Mumbai", 
    rating: 4.4,
    reviews: 67,
    image: "/placeholder.svg",
    trending: false,
    lowStock: false
  }
];

export const MarketplaceFull = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = ["Clay & Ceramics", "Textiles", "Dyes & Colors", "Metals", "Wood", "Glass"];
  const locations = ["Ahmedabad", "Jaipur", "Mumbai", "Delhi", "Kochi", "Bangalore"];

  const filteredMaterials = mockMaterials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || material.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || material.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const toggleCart = (materialId: string) => {
    setCartItems(prev => 
      prev.includes(materialId) 
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId]
    );
  };

  const toggleFavorite = (materialId: string) => {
    setFavorites(prev => 
      prev.includes(materialId) 
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-card border-b border-border/50">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Material Marketplace</h1>
            <p className="text-lg text-muted-foreground">
              Discover quality materials from trusted suppliers across India
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search materials or suppliers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Cart Button */}
              <Button variant="outline" className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({cartItems.length})
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Materials Grid */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredMaterials.length} materials
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Trending
            </Button>
            <Button variant="outline" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              Recently Added
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMaterials.map((material) => (
            <Card key={material.id} className="hover-lift shadow-card group relative overflow-hidden">
              {material.trending && (
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-gradient-accent text-white">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                </div>
              )}
              
              {material.lowStock && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="destructive">Low Stock</Badge>
                </div>
              )}

              <div className="aspect-square relative overflow-hidden bg-gradient-card">
                <img 
                  src={material.image} 
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  onClick={() => toggleFavorite(material.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(material.id) ? 'fill-coral text-coral' : ''}`} />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="text-xs mb-2">
                      {material.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground line-clamp-1">{material.name}</h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                      ₹{material.price}
                      <span className="text-sm text-muted-foreground font-normal">/{material.unit}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Stock</p>
                      <p className="font-medium">{material.stock} {material.unit}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(material.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {material.rating} ({material.reviews})
                    </span>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Package className="h-3 w-3 mr-1" />
                      {material.supplier}
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {material.location}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-accent text-white"
                      onClick={() => toggleCart(material.id)}
                    >
                      {cartItems.includes(material.id) ? 'In Cart' : 'Add to Cart'}
                    </Button>
                    <Button size="sm" variant="outline">
                      Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};