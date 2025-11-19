import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

const MessagesManager = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingMessage, setEditingMessage] = useState<Message | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'read' | 'replied'>('all');

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = () => {
    const stored = localStorage.getItem('contactMessages');
    if (stored) {
      const parsedMessages = JSON.parse(stored);
      setMessages(parsedMessages.sort((a: Message, b: Message) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ));
    }
  };

  const saveMessages = (updatedMessages: Message[]) => {
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
  };

  const handleDelete = (id: string) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    saveMessages(updatedMessages);
    toast.success('Message deleted successfully!');
    setDeleteId(null);
  };

  const handleUpdateMessage = () => {
    if (!editingMessage) return;

    const updatedMessages = messages.map((msg) =>
      msg.id === editingMessage.id ? editingMessage : msg
    );
    saveMessages(updatedMessages);
    toast.success('Message updated successfully!');
    setEditingMessage(null);
  };

  const handleStatusChange = (id: string, status: Message['status']) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, status } : msg
    );
    saveMessages(updatedMessages);
    toast.success('Status updated successfully!');
  };

  const filteredMessages = messages.filter((msg) =>
    filterStatus === 'all' ? true : msg.status === filterStatus
  );

  const getStatusBadge = (status: Message['status']) => {
    const variants = {
      new: 'default',
      read: 'secondary',
      replied: 'outline',
    } as const;

    const labels = {
      new: '🆕 New',
      read: '👁️ Read',
      replied: '✅ Replied',
    };

    return (
      <Badge variant={variants[status]} className="font-semibold">
        {labels[status]}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Contact Messages</h2>
          <p className="text-muted-foreground mt-2">
            Manage enquiries from the contact form ({messages.length} total)
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={filterStatus === 'all' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('all')}
            size="sm"
          >
            All ({messages.length})
          </Button>
          <Button
            variant={filterStatus === 'new' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('new')}
            size="sm"
          >
            New ({messages.filter(m => m.status === 'new').length})
          </Button>
          <Button
            variant={filterStatus === 'read' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('read')}
            size="sm"
          >
            Read ({messages.filter(m => m.status === 'read').length})
          </Button>
          <Button
            variant={filterStatus === 'replied' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('replied')}
            size="sm"
          >
            Replied ({messages.filter(m => m.status === 'replied').length})
          </Button>
        </div>
      </div>

      {filteredMessages.length === 0 ? (
        <Card className="bg-card/50 border-white/10">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground text-lg">
              {filterStatus === 'all' 
                ? 'No messages yet. Messages from the contact form will appear here.'
                : `No ${filterStatus} messages found.`}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredMessages.map((msg) => (
            <Card key={msg.id} className="bg-card border-white/10 hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl text-white">{msg.name}</CardTitle>
                      {getStatusBadge(msg.status)}
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>📧 {msg.email}</p>
                      <p>📞 {msg.phone}</p>
                      {msg.program && <p>🎯 Interested in: <span className="text-primary font-semibold">{msg.program}</span></p>}
                      <p className="text-xs">📅 {new Date(msg.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingMessage(msg)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setDeleteId(msg.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Label className="text-sm text-muted-foreground">Message:</Label>
                  <p className="text-foreground mt-2 p-3 bg-background/50 rounded-lg border border-white/5">
                    {msg.message}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(msg.id, 'new')}
                    disabled={msg.status === 'new'}
                  >
                    Mark New
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(msg.id, 'read')}
                    disabled={msg.status === 'read'}
                  >
                    Mark Read
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(msg.id, 'replied')}
                    disabled={msg.status === 'replied'}
                  >
                    Mark Replied
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editingMessage} onOpenChange={() => setEditingMessage(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Message</DialogTitle>
          </DialogHeader>
          {editingMessage && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Full Name</Label>
                <Input
                  id="edit-name"
                  value={editingMessage.name}
                  onChange={(e) =>
                    setEditingMessage({ ...editingMessage, name: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={editingMessage.email}
                  onChange={(e) =>
                    setEditingMessage({ ...editingMessage, email: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="edit-phone">Phone</Label>
                <Input
                  id="edit-phone"
                  value={editingMessage.phone}
                  onChange={(e) =>
                    setEditingMessage({ ...editingMessage, phone: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="edit-program">Program Interest</Label>
                <Input
                  id="edit-program"
                  value={editingMessage.program}
                  onChange={(e) =>
                    setEditingMessage({ ...editingMessage, program: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="edit-message">Message</Label>
                <Textarea
                  id="edit-message"
                  value={editingMessage.message}
                  onChange={(e) =>
                    setEditingMessage({ ...editingMessage, message: e.target.value })
                  }
                  rows={5}
                  className="mt-2"
                />
              </div>
              <div className="flex gap-2 justify-end pt-4">
                <Button variant="outline" onClick={() => setEditingMessage(null)}>
                  Cancel
                </Button>
                <Button onClick={handleUpdateMessage}>
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this message. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MessagesManager;
