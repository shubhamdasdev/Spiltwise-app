import React, { useState } from 'react';
import { 
  Button, 
  TextField, 
  Container, 
  Typography, 
  Grid 
} from '@mui/material';
import { expenseService } from '../../services/api';

interface ExpenseFormProps {
  groupId: number;
}

interface Split {
  userId: string;
  amount: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ groupId }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [splits, setSplits] = useState<Split[]>([{ userId: '', amount: '' }]);

  const handleSplitChange = (index: number, field: keyof Split, value: string) => {
    const newSplits = [...splits];
    newSplits[index] = { ...newSplits[index], [field]: value };
    setSplits(newSplits);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await expenseService.createExpense(
        description,
        parseFloat(amount),
        groupId,
        splits.map(split => ({
          userId: parseInt(split.userId),
          amount: parseFloat(split.amount)
        }))
      );
      // Reset form
      setDescription('');
      setAmount('');
      setSplits([{ userId: '', amount: '' }]);
    } catch (error) {
      console.error('Failed to create expense:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Add New Expense
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Grid>
          {splits.map((split, index) => (
            <Grid item xs={12} key={index} container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="User ID"
                  value={split.userId}
                  onChange={(e) => handleSplitChange(index, 'userId', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Split Amount"
                  type="number"
                  value={split.amount}
                  onChange={(e) => handleSplitChange(index, 'amount', e.target.value)}
                  required
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Add Expense
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ExpenseForm;
