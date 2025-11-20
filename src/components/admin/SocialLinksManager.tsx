import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SocialLink {
  enabled: boolean;
  url: string;
}

interface SocialLinks {
  facebook: SocialLink;
  twitter: SocialLink;
  linkedin: SocialLink;
  instagram: SocialLink;
}

const SocialLinksManager = () => {
  const [links, setLinks] = useState<SocialLinks>({
    facebook: { enabled: false, url: '' },
    twitter: { enabled: false, url: '' },
    linkedin: { enabled: false, url: '' },
    instagram: { enabled: false, url: '' },
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

  const handleToggle = (platform: keyof SocialLinks) => {
    setLinks({
      ...links,
      [platform]: {
        ...links[platform],
        enabled: !links[platform].enabled,
      },
    });
  };

  const handleUrlChange = (platform: keyof SocialLinks, url: string) => {
    setLinks({
      ...links,
      [platform]: {
        ...links[platform],
        url,
      },
    });
  };

  const handleSave = () => {
    localStorage.setItem('socialLinks', JSON.stringify(links));
    toast.success('Social links saved successfully!');
  };

  const socialPlatforms = [
    { key: 'facebook' as const, label: 'Facebook', placeholder: 'https://facebook.com/...' },
    { key: 'twitter' as const, label: 'Twitter', placeholder: 'https://twitter.com/...' },
    { key: 'linkedin' as const, label: 'LinkedIn', placeholder: 'https://linkedin.com/...' },
    { key: 'instagram' as const, label: 'Instagram', placeholder: 'https://instagram.com/...' },
  ];

  return (
    <Card className="bg-card border-white/10 max-w-2xl">
      <CardHeader>
        <CardTitle className="text-primary">Social Media Links</CardTitle>
        <p className="text-sm text-muted-foreground">
          Enable/disable social media links and manage their URLs
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {socialPlatforms.map(({ key, label, placeholder }) => (
          <div key={key} className="space-y-3 p-4 border border-white/10 rounded-lg">
            <div className="flex items-center justify-between">
              <Label htmlFor={`${key}-toggle`} className="text-base font-semibold">
                {label}
              </Label>
              <Switch
                id={`${key}-toggle`}
                checked={links[key].enabled}
                onCheckedChange={() => handleToggle(key)}
              />
            </div>
            <div>
              <Label htmlFor={`${key}-url`} className="text-sm text-muted-foreground">
                Redirect URL
              </Label>
              <Input
                id={`${key}-url`}
                type="url"
                value={links[key].url}
                onChange={(e) => handleUrlChange(key, e.target.value)}
                placeholder={placeholder}
                disabled={!links[key].enabled}
                className="mt-2"
              />
            </div>
          </div>
        ))}

        <Button onClick={handleSave} className="w-full">
          Save Social Links
        </Button>
      </CardContent>
    </Card>
  );
};

export default SocialLinksManager;
