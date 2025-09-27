import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Package, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-artisans.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Artisans collaborating in workshop" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-primary/10" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            Empowering Artisans,
            <span className="block text-coral">One Material at a Time</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Connect, collaborate, and access premium materials at wholesale prices. 
            Join the cooperative that's revolutionizing how artisans source and create.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="group px-8 py-4 text-lg font-semibold hover-lift">
                Join as Artisan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Explore Marketplace
            </Button>
          </div>
          
          {/* Three Step Process */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift">
              <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Discover</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Find premium materials and connect with like-minded artisans in your area
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift">
              <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Collaborate</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Pool orders with other artisans to unlock wholesale pricing and bulk benefits
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift">
              <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Grow</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Scale your craft with AI-powered insights and cost-effective material sourcing
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-coral/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};