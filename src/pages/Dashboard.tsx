import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Package, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Bell,
  Settings,
  Upload,
  Calendar,
  BarChart3
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back, Sarah!</h1>
              <p className="text-muted-foreground">Ceramic Artist • Member since Jan 2024</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                3 New
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Savings</p>
                      <p className="text-3xl font-bold text-primary">$1,247</p>
                    </div>
                    <div className="bg-gradient-accent w-12 h-12 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-600">+12%</span>
                    <span className="text-muted-foreground ml-2">vs last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Orders</p>
                      <p className="text-3xl font-bold text-primary">8</p>
                    </div>
                    <div className="bg-teal w-12 h-12 rounded-xl flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-muted-foreground">3 arriving this week</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Group Orders</p>
                      <p className="text-3xl font-bold text-primary">24</p>
                    </div>
                    <div className="bg-coral w-12 h-12 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-muted-foreground">5 new opportunities</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Suggestions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  AI-Powered Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-card rounded-lg p-4 border border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Bulk Clay Order Opportunity</h4>
                    <Badge variant="secondary">Save 35%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Join 12 other ceramic artists for a group order of premium stoneware clay. 
                    Minimum order met - ready to proceed.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Button size="sm" className="bg-gradient-accent text-white">
                      Join Group Order
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-card rounded-lg p-4 border border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">New Supplier Alert</h4>
                    <Badge variant="outline">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Mountain Ceramics Co. now ships to your area with competitive prices on glazes.
                  </p>
                  <Button size="sm" variant="outline">
                    Explore Supplier
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Joined group order", item: "Organic Cotton Canvas", time: "2 hours ago", status: "success" },
                    { action: "Order shipped", item: "Premium Oak Planks", time: "1 day ago", status: "info" },
                    { action: "Payment processed", item: "Sterling Silver Wire", time: "3 days ago", status: "success" },
                    { action: "Quote requested", item: "Artisan Clay Mix", time: "1 week ago", status: "pending" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 py-2">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.item}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Profile Card */}
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Sarah Chen</h3>
                <p className="text-sm text-muted-foreground mb-4">Ceramic Artist • San Francisco, CA</p>
                <Button variant="outline" size="sm" className="w-full mb-3">
                  <Upload className="h-4 w-4 mr-2" />
                  Update Portfolio
                </Button>
                <div className="text-left space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Profile Complete</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-accent text-white">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Browse Materials
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Collaborators
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  Track Orders
                </Button>
              </CardContent>
            </Card>

            {/* Collaboration Opportunities */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Group Orders Available</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Premium Clay Mix", participants: 8, needed: 12, savings: "30%" },
                  { name: "Organic Glazes", participants: 15, needed: 20, savings: "25%" },
                  { name: "Kiln Supplies", participants: 6, needed: 10, savings: "40%" }
                ].map((order, index) => (
                  <div key={index} className="border border-border/50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{order.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        Save {order.savings}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>{order.participants}/{order.needed} participants</span>
                    </div>
                    <Progress value={(order.participants / order.needed) * 100} className="h-1 mb-3" />
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      Join Group
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;