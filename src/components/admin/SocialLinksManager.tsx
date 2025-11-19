import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SocialLinks {
  instagram: string;
  youtube: string;
  linkedin: string;
}

const SocialLinksManager = () => {
  const [links, setLinks] = useState<SocialLinks>({
    instagram: '',
    youtube: '',
    linkedin: '',
  });

  useEffect(() => {
    loadLinks();
  }, []);

  const loadLinks = () => {
    const stored = localStorage.getItem('socialLinks');
    if (stored) {
      setLinks(JSON.parse(stored));
    }
  };

  const handleSave = () => {
    localStorage.setItem('socialLinks', JSON.stringify(links));
    toast.success('Social links saved successfully!');
  };

  return (
    <Card className="bg-card border-white/10 max-w-2xl">
      <CardHeader>
        <CardTitle className="text-primary">Social Media Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="instagram">Instagram URL</Label>
          <Input
            id="instagram"
            type="url"
            value={links.instagram}
            onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
            placeholder="https://instagram.com/..."
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="youtube">YouTube URL</Label>
          <Input
            id="youtube"
            type="url"
            value={links.youtube}
            onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
            placeholder="https://youtube.com/..."
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="linkedin">LinkedIn URL</Label>
          <Input
            id="linkedin"
            type="url"
            value={links.linkedin}
            onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
            placeholder="https://linkedin.com/..."
            className="mt-2"
          />
        </div>

        <Button onClick={handleSave} className="w-full">
          Save Social Links
        </Button>
      </CardContent>
    </Card>
  );
};

export default SocialLinksManager;
