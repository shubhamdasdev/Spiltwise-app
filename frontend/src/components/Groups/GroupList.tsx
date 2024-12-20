import React, { useState, useEffect } from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Container, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField 
} from '@mui/material';
import { groupService } from '../../services/api';

interface Group {
  id: number;
  name: string;
  description?: string;
  members: { id: number; username: string }[];
}

const GroupList: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const userGroups = await groupService.getUserGroups();
        setGroups(userGroups);
      } catch (error) {
        console.error('Failed to fetch groups', error);
      }
    };

    fetchGroups();
  }, []);

  const handleCreateGroup = async () => {
    try {
      const newGroup = await groupService.createGroup(
        newGroupName, 
        newGroupDescription
      );
      setGroups([...groups, newGroup]);
      setOpenCreateDialog(false);
      setNewGroupName('');
      setNewGroupDescription('');
    } catch (error) {
      console.error('Failed to create group', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Groups
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setOpenCreateDialog(true)}
      >
        Create New Group
      </Button>
      <List>
        {groups.map((group) => (
          <ListItem key={group.id}>
            <ListItemText
              primary={group.name}
              secondary={`${group.members.length} members`}
            />
          </ListItem>
        ))}
      </List>

      <Dialog 
        open={openCreateDialog} 
        onClose={() => setOpenCreateDialog(false)}
      >
        <DialogTitle>Create New Group</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Group Name"
            fullWidth
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description (Optional)"
            fullWidth
            value={newGroupDescription}
            onChange={(e) => setNewGroupDescription(e.target.value)}
          />
          <Button 
            onClick={handleCreateGroup} 
            color="primary" 
            variant="contained"
          >
            Create
          </Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default GroupList;
