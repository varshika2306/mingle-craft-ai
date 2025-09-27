import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Plus, 
  Calendar, 
  User, 
  Clock,
  CheckCircle2,
  Circle,
  AlertCircle
} from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  assignee?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'completed';
  labels: string[];
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Complete ceramic vase series",
    description: "Finish 12 vases for the gallery exhibition",
    assignee: "Sarah Chen",
    dueDate: "2024-01-15",
    priority: 'high',
    status: 'in-progress',
    labels: ['ceramics', 'exhibition']
  },
  {
    id: "2", 
    title: "Order glazes for next batch",
    description: "Need to restock cobalt blue and celadon green glazes",
    dueDate: "2024-01-10",
    priority: 'medium',
    status: 'todo',
    labels: ['materials', 'glazes']
  },
  {
    id: "3",
    title: "Photography session",
    description: "Take professional photos of completed pieces",
    assignee: "Sarah Chen", 
    dueDate: "2024-01-08",
    priority: 'low',
    status: 'completed',
    labels: ['marketing', 'photography']
  },
  {
    id: "4",
    title: "Kiln maintenance check",
    description: "Regular maintenance and temperature calibration",
    dueDate: "2024-01-12",
    priority: 'high',
    status: 'todo',
    labels: ['maintenance', 'equipment']
  }
];

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-slate-100', icon: Circle },
  { id: 'in-progress', title: 'In Progress', color: 'bg-teal-light', icon: Clock },
  { id: 'completed', title: 'Completed', color: 'bg-green-100', icon: CheckCircle2 }
] as const;

export const TaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500'; 
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityIcon = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return <AlertCircle className="h-3 w-3" />;
      case 'medium': return <Clock className="h-3 w-3" />;
      case 'low': return <Circle className="h-3 w-3" />;
      default: return <Circle className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Task Board</h2>
        <Button size="sm" className="bg-gradient-accent text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {columns.map((column) => {
          const columnTasks = getTasksByStatus(column.id);
          const Icon = column.icon;

          return (
            <Card key={column.id} className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Icon className="h-5 w-5 mr-2 text-primary" />
                  {column.title}
                  <Badge variant="secondary" className="ml-2">
                    {columnTasks.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {columnTasks.map((task) => (
                  <Card key={task.id} className="hover-lift cursor-pointer border border-border/50">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-sm line-clamp-2">{task.title}</h4>
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)} flex-shrink-0 ml-2`} />
                        </div>
                        
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {task.description}
                        </p>

                        {task.labels.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {task.labels.map((label) => (
                              <Badge key={label} variant="outline" className="text-xs px-2 py-0">
                                {label}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          {task.dueDate && (
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(task.dueDate).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                          )}
                          
                          {task.assignee && (
                            <div className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {task.assignee.split(' ')[0]}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            {getPriorityIcon(task.priority)}
                            <span className="ml-1 capitalize">{task.priority}</span>
                          </div>
                          
                          {task.status === 'completed' && (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button 
                  variant="ghost" 
                  className="w-full border-2 border-dashed border-border/50 hover:border-primary/50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};