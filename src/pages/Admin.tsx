import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  Search,
  Filter,
  Eye,
  Check,
  X,
  AlertCircle,
  BarChart3,
  Calendar,
  Settings
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: 'artisan' | 'supplier' | 'admin';
  status: 'pending' | 'active' | 'suspended';
  joinDate: string;
  location: string;
}

interface Material {
  id: string;
  name: string;
  supplier: string;
  category: string;
  status: 'pending' | 'approved' | 'rejected';
  price: number;
  submittedDate: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya@example.com",
    role: 'artisan',
    status: 'pending',
    joinDate: "2024-01-20",
    location: "Jaipur"
  },
  {
    id: "2",
    name: "Mumbai Clay Works",
    email: "contact@mumbaiclayworks.com",
    role: 'supplier',
    status: 'pending',
    joinDate: "2024-01-18",
    location: "Mumbai"
  },
  {
    id: "3",
    name: "Rahul Gupta", 
    email: "rahul@example.com",
    role: 'artisan',
    status: 'active',
    joinDate: "2024-01-15",
    location: "Delhi"
  }
];

const mockMaterials: Material[] = [
  {
    id: "1",
    name: "Organic Jute Fiber",
    supplier: "Kerala Natural Fibers",
    category: "Textiles",
    status: 'pending',
    price: 150,
    submittedDate: "2024-01-20"
  },
  {
    id: "2",
    name: "Recycled Copper Wire",
    supplier: "Green Metals Ltd",
    category: "Metals",
    status: 'pending',
    price: 380,
    submittedDate: "2024-01-19"
  }
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'materials' | 'analytics'>('overview');
  const [searchTerm, setSearchTerm] = useState("");

  const stats = {
    totalArtisans: 1247,
    activeClusters: 34,
    pendingApprovals: 12,
    totalRevenue: 45680
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'active': case 'approved': return 'bg-green-500';
      case 'suspended': case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const approveUser = (userId: string) => {
    console.log('Approving user:', userId);
  };

  const rejectUser = (userId: string) => {
    console.log('Rejecting user:', userId);
  };

  const approveMaterial = (materialId: string) => {
    console.log('Approving material:', materialId);
  };

  const rejectMaterial = (materialId: string) => {
    console.log('Rejecting material:', materialId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage users, materials, and platform analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Badge variant="secondary" className="flex items-center space-x-2">
                <AlertCircle className="h-3 w-3" />
                <span>{stats.pendingApprovals} pending</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'materials', label: 'Materials', icon: Package },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id as any)}
                className="flex items-center space-x-2"
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 pb-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Artisans</p>
                      <p className="text-3xl font-bold text-primary">{stats.totalArtisans.toLocaleString()}</p>
                    </div>
                    <div className="bg-gradient-hero w-12 h-12 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Clusters</p>
                      <p className="text-3xl font-bold text-primary">{stats.activeClusters}</p>
                    </div>
                    <div className="bg-teal w-12 h-12 rounded-xl flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Pending Approvals</p>
                      <p className="text-3xl font-bold text-primary">{stats.pendingApprovals}</p>
                    </div>
                    <div className="bg-coral w-12 h-12 rounded-xl flex items-center justify-center">
                      <AlertCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <p className="text-3xl font-bold text-primary">₹{stats.totalRevenue.toLocaleString()}</p>
                    </div>
                    <div className="bg-gradient-accent w-12 h-12 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: 'New supplier registered', detail: 'Mumbai Clay Works - Pending approval', time: '2 hours ago' },
                    { action: 'Material listing approved', detail: 'Organic Jute Fiber by Kerala Natural Fibers', time: '4 hours ago' },
                    { action: 'Bulk order completed', detail: 'Premium Clay Mix - 15 participants', time: '6 hours ago' },
                    { action: 'New artisan joined', detail: 'Priya Sharma from Jaipur', time: '1 day ago' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 py-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.detail}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            {/* Search & Filters */}
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Users List */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-gradient-card rounded-lg border border-border/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">{user.name}</h4>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {user.role}
                        </Badge>
                        <Badge className={`${getStatusColor(user.status)} text-white`}>
                          {user.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {user.status === 'pending' && (
                          <>
                            <Button size="sm" onClick={() => approveUser(user.id)} className="bg-green-600 hover:bg-green-700 text-white">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => rejectUser(user.id)}>
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Materials Tab */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Material Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockMaterials.map((material) => (
                    <div key={material.id} className="flex items-center justify-between p-4 bg-gradient-card rounded-lg border border-border/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                          <Package className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">{material.name}</h4>
                          <p className="text-sm text-muted-foreground">by {material.supplier}</p>
                        </div>
                        <Badge variant="outline">{material.category}</Badge>
                        <div className="text-sm">
                          <span className="font-medium">₹{material.price}</span>/kg
                        </div>
                        <Badge className={`${getStatusColor(material.status)} text-white`}>
                          {material.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {material.status === 'pending' && (
                          <>
                            <Button size="sm" onClick={() => approveMaterial(material.id)} className="bg-green-600 hover:bg-green-700 text-white">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => rejectMaterial(material.id)}>
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Platform Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Top 5 Materials Requested</h4>
                    {[
                      { name: 'Premium Clay Mix', requests: 127 },
                      { name: 'Organic Cotton Yarn', requests: 89 },
                      { name: 'Natural Indigo Dye', requests: 76 },
                      { name: 'Brass Sheet Metal', requests: 54 },
                      { name: 'Teak Wood Planks', requests: 43 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                        <span className="text-sm font-medium">{item.name}</span>
                        <Badge variant="secondary">{item.requests} requests</Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Active Regions</h4>
                    {[
                      { region: 'Maharashtra', artisans: 287 },
                      { region: 'Rajasthan', artisans: 234 },
                      { region: 'Gujarat', artisans: 198 },
                      { region: 'Karnataka', artisans: 156 },
                      { region: 'Tamil Nadu', artisans: 142 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                        <span className="text-sm font-medium">{item.region}</span>
                        <Badge variant="secondary">{item.artisans} artisans</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;