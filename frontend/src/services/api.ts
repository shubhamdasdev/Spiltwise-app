import axios from 'axios';

const API_BASE_URL = '/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export const authService = {
  register: async (name: string, email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/register', {
        name,
        email,
        password
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw error.response.data;
      }
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/login', {
        email,
        password
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw error.response.data;
      }
      throw error;
    }
  }
};

export const groupService = {
  createGroup: async (name: string, description?: string, members?: number[]) => {
    const response = await axiosInstance.post('/groups', { name, description, members });
    return response.data;
  },
  
  getUserGroups: async () => {
    const response = await axiosInstance.get('/groups');
    return response.data;
  },
  
  getGroupDetails: async (groupId: number) => {
    const response = await axiosInstance.get(`/groups/${groupId}`);
    return response.data;
  }
};

export const expenseService = {
  createExpense: async (
    description: string, 
    amount: number, 
    groupId: number, 
    splits: { [userId: number]: number }[]
  ) => {
    const response = await axiosInstance.post('/expenses', { 
      description, 
      amount, 
      group_id: groupId, 
      splits 
    });
    return response.data;
  },
  
  getGroupExpenses: async (groupId: number) => {
    const response = await axiosInstance.get(`/expenses/group/${groupId}`);
    return response.data;
  },
  
  getGroupBalances: async (groupId: number) => {
    const response = await axiosInstance.get(`/expenses/balances/group/${groupId}`);
    return response.data;
  }
};
