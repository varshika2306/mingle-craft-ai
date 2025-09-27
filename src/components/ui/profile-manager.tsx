import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { 
  Upload, 
  User, 
  Camera, 
  Plus,
  X,
  Star,
  MapPin,
  Calendar,
  Award
} from "lucide-react";

interface PortfolioImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

interface ArtisanProfile {
  name: string;
  bio: string;
  location: string;
  joinDate: string;
  specialties: string[];
  portfolio: PortfolioImage[];
  totalProjects: number;
  rating: number;
  certifications: string[];
}

const mockProfile: ArtisanProfile = {
  name: "Sarah Chen",
  bio: "Passionate ceramic artist specializing in traditional stoneware and modern sculptural pieces. I blend ancient techniques with contemporary design to create functional art that tells a story.",
  location: "San Francisco, CA",
  joinDate: "January 2024",
  specialties: ["Ceramics", "Pottery", "Sculpture", "Glazing"],
  portfolio: [
    {
      id: "1",
      url: "/placeholder.svg",
      title: "Zen Garden Vase Collection",
      description: "A series of minimalist vases inspired by Japanese aesthetics"
    },
    {
      id: "2", 
      url: "/placeholder.svg",
      title: "Rustic Dinnerware Set",
      description: "Handcrafted plates and bowls with earthy glazes"
    },
    {
      id: "3",
      url: "/placeholder.svg", 
      title: "Abstract Sculptural Forms",
      description: "Experimental ceramic sculptures exploring organic shapes"
    }
  ],
  totalProjects: 47,
  rating: 4.8,
  certifications: ["Certified Ceramic Artist", "Traditional Pottery Master"]
};

export const ProfileManager = () => {
  const [profile, setProfile] = useState<ArtisanProfile>(mockProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [newSpecialty, setNewSpecialty] = useState("");

  const addSpecialty = () => {
    if (newSpecialty.trim() && !profile.specialties.includes(newSpecialty.trim())) {
      setProfile(prev => ({
        ...prev,
        specialties: [...prev.specialties, newSpecialty.trim()]
      }));
      setNewSpecialty("");
    }
  };

  const removeSpecialty = (specialty: string) => {
    setProfile(prev => ({
      ...prev,
      specialties: prev.specialties.filter(s => s !== specialty)
    }));
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Profile Picture */}
            <div className="relative group">
              <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">{profile.name}</h2>
                  <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {profile.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Member since {profile.joinDate}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  variant={isEditing ? "default" : "outline"}
                  size="sm"
                >
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profile.totalProjects}</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-2xl font-bold text-primary">{profile.rating}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profile.certifications.length}</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">About</h4>
                {isEditing ? (
                  <Textarea
                    value={profile.bio}
                    onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    className="min-h-20"
                  />
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Specialties & Certifications */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Specialties */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Specialties
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {profile.specialties.map((specialty) => (
                <Badge key={specialty} variant="secondary" className="flex items-center space-x-2">
                  <span>{specialty}</span>
                  {isEditing && (
                    <button onClick={() => removeSpecialty(specialty)}>
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>
            
            {isEditing && (
              <div className="flex space-x-2">
                <Input
                  placeholder="Add specialty..."
                  value={newSpecialty}
                  onChange={(e) => setNewSpecialty(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addSpecialty()}
                />
                <Button size="sm" onClick={addSpecialty}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {profile.certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-gradient-card rounded-lg">
                <Award className="h-4 w-4 text-coral" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Portfolio */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Camera className="h-5 w-5 mr-2 text-primary" />
              Portfolio ({profile.portfolio.length})
            </CardTitle>
            <Button size="sm" className="bg-gradient-accent text-white">
              <Upload className="h-4 w-4 mr-2" />
              Add Images
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.portfolio.map((item) => (
              <Card key={item.id} className="hover-lift cursor-pointer overflow-hidden">
                <div className="aspect-square relative bg-gradient-card">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3">
                  <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
            
            {/* Add New Card */}
            <Card className="border-2 border-dashed border-border/50 hover:border-primary/50 cursor-pointer flex items-center justify-center aspect-square">
              <div className="text-center p-4">
                <Plus className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Add New Work</p>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};