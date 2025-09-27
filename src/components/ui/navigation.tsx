import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Palette } from "lucide-react";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">MingleMakers</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-gradient-accent text-white">
                Get Started
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#marketplace" className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                Marketplace
              </a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                Community
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                Contact
              </a>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border/50">
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="justify-start w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm" className="bg-gradient-accent text-white justify-start w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};