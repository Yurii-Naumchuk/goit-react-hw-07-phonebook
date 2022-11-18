import { createAsyncThunk } from '@reduxjs/toolkit';
import {instanceContacts} from "../../shared/api/api"



export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instanceContacts.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newContacts, { rejectWithValue }) => {
    try {
      const { data } = await instanceContacts.post('/contacts', newContacts);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instanceContacts.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);