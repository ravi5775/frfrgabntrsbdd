import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Internship {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  totalSeats: number;
  availableSeats: number;
  skills: string[];
  googleFormLink: string;
  active: boolean;
  createdAt: string;
}

const InternshipsManager = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    duration: '',
    totalSeats: 10,
    availableSeats: 10,
    skills: [] as string[],
    googleFormLink: '',
    active: true,
  });
  const [currentSkill, setCurrentSkill] = useState('');

  useEffect(() => {
    loadInternships();
  }, []);

  const loadInternships = () => {
    const stored = localStorage.getItem('internships');
    if (stored) {
      setInternships(JSON.parse(stored));
    }
  };

  const saveInternships = (data: Internship[]) => {
    localStorage.setItem('internships', JSON.stringify(data));
    setInternships(data);
  };

  const handleAddSkill = () => {
    if (currentSkill.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, currentSkill.trim()],
      });
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (index: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing internship
      const updatedInternships = internships.map((internship) =>
        internship.id === editingId
          ? { ...internship, ...formData }
          : internship
      );
      saveInternships(updatedInternships);
      toast.success('Internship updated successfully!');
      setEditingId(null);
    } else {
      // Add new internship
      const newInternship: Internship = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      saveInternships([...internships, newInternship]);
      toast.success('Internship created successfully!');
    }
    
    // Reset form
    setFormData({
      title: '',
      category: '',
      description: '',
      duration: '',
      totalSeats: 10,
      availableSeats: 10,
      skills: [],
      googleFormLink: '',
      active: true,
    });
  };

  const handleEdit = (internship: Internship) => {
    setFormData({
      title: internship.title,
      category: internship.category,
      description: internship.description,
      duration: internship.duration,
      totalSeats: internship.totalSeats,
      availableSeats: internship.availableSeats,
      skills: internship.skills,
      googleFormLink: internship.googleFormLink,
      active: internship.active,
    });
    setEditingId(internship.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      duration: '',
      totalSeats: 10,
      availableSeats: 10,
      skills: [],
      googleFormLink: '',
      active: true,
    });
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    saveInternships(internships.filter((i) => i.id !== id));
    toast.success('Internship deleted successfully!');
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card border-white/10">
        <CardHeader>
          <CardTitle className="text-primary">
            {editingId ? 'Edit Internship' : 'Add New Internship'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Machine Learning Intern"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10 z-50">
                    <SelectItem value="machine-learning-engineer">🤖 Machine Learning Engineer</SelectItem>
                    <SelectItem value="data-scientist">📊 Data Scientist</SelectItem>
                    <SelectItem value="data-analyst">📈 Data Analyst</SelectItem>
                    <SelectItem value="web-developer">💻 Web Developer</SelectItem>
                    <SelectItem value="cybersecurity-engineer">🔒 Cybersecurity Engineer</SelectItem>
                    <SelectItem value="blockchain-engineer">⛓️ Blockchain Engineer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the internship..."
                required
                className="mt-2 min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g., 3 months"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="totalSeats">Total Seats *</Label>
                <Input
                  id="totalSeats"
                  type="number"
                  value={formData.totalSeats}
                  onChange={(e) => setFormData({ ...formData, totalSeats: parseInt(e.target.value) })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="availableSeats">Available Seats *</Label>
                <Input
                  id="availableSeats"
                  type="number"
                  value={formData.availableSeats}
                  onChange={(e) => setFormData({ ...formData, availableSeats: parseInt(e.target.value) })}
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label>Skills Required</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  placeholder="Add a skill"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                />
                <Button type="button" onClick={handleAddSkill}>Add</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(index)}
                      className="hover:text-destructive"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="googleFormLink">Google Form Link</Label>
              <Input
                id="googleFormLink"
                value={formData.googleFormLink}
                onChange={(e) => setFormData({ ...formData, googleFormLink: e.target.value })}
                placeholder="https://forms.google.com/..."
                className="mt-2"
              />
            </div>

            <div className="flex items-center gap-3">
              <Switch
                checked={formData.active}
                onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
              />
              <Label>Active (visible on website)</Label>
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                {editingId ? 'Update Internship' : 'Create Internship'}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-card border-white/10">
        <CardHeader>
          <CardTitle className="text-primary">Existing Internships ({internships.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {internships.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No internships yet</p>
          ) : (
            <div className="space-y-4">
              {internships.map((internship) => (
                <div
                  key={internship.id}
                  className="bg-background/50 p-6 rounded-lg border border-white/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{internship.title}</h3>
                      <p className="text-sm text-primary">{internship.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(internship)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(internship.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{internship.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p className="text-foreground">{internship.duration}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Seats:</span>
                      <p className="text-foreground">{internship.availableSeats}/{internship.totalSeats}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status:</span>
                      <p className={internship.active ? 'text-primary' : 'text-muted-foreground'}>
                        {internship.active ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                  </div>
                  {internship.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {internship.skills.map((skill, idx) => (
                        <span key={idx} className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InternshipsManager;
