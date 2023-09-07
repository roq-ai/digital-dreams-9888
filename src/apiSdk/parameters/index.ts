import axios from 'axios';
import queryString from 'query-string';
import { ParameterInterface, ParameterGetQueryInterface } from 'interfaces/parameter';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getParameters = async (
  query?: ParameterGetQueryInterface,
): Promise<PaginatedInterface<ParameterInterface>> => {
  const response = await axios.get('/api/parameters', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createParameter = async (parameter: ParameterInterface) => {
  const response = await axios.post('/api/parameters', parameter);
  return response.data;
};

export const updateParameterById = async (id: string, parameter: ParameterInterface) => {
  const response = await axios.put(`/api/parameters/${id}`, parameter);
  return response.data;
};

export const getParameterById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/parameters/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteParameterById = async (id: string) => {
  const response = await axios.delete(`/api/parameters/${id}`);
  return response.data;
};
