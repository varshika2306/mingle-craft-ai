import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Palette, User, Building, Shield } from "lucide-react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [selectedRole, setSelectedRole] = useState<"artisan" | "supplier" | "admin" | null>(null);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
              <Palette className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-primary-foreground">MingleMakers</span>
          </div>
          <p className="text-primary-foreground/80">Join the artisan cooperative</p>
        </div>

        <Card className="shadow-floating border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">
              {isSignUp ? "Create Your Account" : "Welcome Back"}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Role Selection (Sign Up Only) */}
            {isSignUp && (
              <div className="space-y-3">
                <Label className="text-sm font-medium">I am a...</Label>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant={selectedRole === "artisan" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedRole("artisan")}
                    className="flex flex-col h-auto py-3 space-y-1"
                  >
                    <User className="h-5 w-5" />
                    <span className="text-xs">Artisan</span>
                  </Button>
                  <Button
                    variant={selectedRole === "supplier" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedRole("supplier")}
                    className="flex flex-col h-auto py-3 space-y-1"
                  >
                    <Building className="h-5 w-5" />
                    <span className="text-xs">Supplier</span>
                  </Button>
                  <Button
                    variant={selectedRole === "admin" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedRole("admin")}
                    className="flex flex-col h-auto py-3 space-y-1"
                  >
                    <Shield className="h-5 w-5" />
                    <span className="text-xs">Admin</span>
                  </Button>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-4">
              {isSignUp && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Sarah" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Chen" />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="sarah@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              )}
            </div>

            {/* Note about backend */}
            <div className="bg-coral-light/20 border border-coral/30 rounded-lg p-4">
              <p className="text-sm text-foreground/80 text-center">
                <strong>Backend Required:</strong> Authentication functionality needs Supabase integration. 
                Connect your project to Supabase to enable user registration and login.
              </p>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-gradient-accent text-white" size="lg">
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>

            {/* Toggle Mode */}
            <div className="text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isSignUp 
                  ? "Already have an account? Sign in" 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </CardContent>
        </Card>
        
        {/* Role Benefits */}
        {isSignUp && selectedRole && (
          <Card className="mt-6 shadow-soft bg-white/90 backdrop-blur-sm border-0">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <Badge variant="secondary" className="mb-2">
                  {selectedRole === "artisan" && "Artisan Benefits"}
                  {selectedRole === "supplier" && "Supplier Benefits"}
                  {selectedRole === "admin" && "Admin Access"}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {selectedRole === "artisan" && "Access collaborative ordering, AI suggestions, and artisan community"}
                  {selectedRole === "supplier" && "Reach thousands of artisans and manage bulk orders efficiently"}
                  {selectedRole === "admin" && "Full platform management and analytics access"}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Auth;