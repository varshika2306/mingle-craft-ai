import { Palette, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">MingleMakers</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering artisans worldwide through collaborative sourcing and community-driven innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground">
                Twitter
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground">
                Instagram
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground">
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Browse Materials
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Find Suppliers
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Join Groups
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                AI Insights
              </a>
            </div>
          </div>
          
          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Artisan Directory
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Success Stories
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Events & Workshops
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Help Center
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="h-5 w-5" />
                <span>hello@minglemakers.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="bg-gradient-accent text-white w-full">
                Join Our Newsletter
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 MingleMakers. All rights reserved. Built with passion for artisans worldwide.</p>
        </div>
      </div>
    </footer>
  );
};