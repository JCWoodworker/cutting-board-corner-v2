import axios, { type AxiosResponse } from 'axios';
import apiClient from './api-client';
import { ensureCsrfHeader } from './csrf';

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    throw {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    };
  }
  throw error;
};

const csrfRequired = (method: string): boolean =>
  ['post', 'put', 'patch', 'delete'].includes(method.toLowerCase());

const request = async <T>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  endpoint: string,
  payload?: T,
  headers?: Record<string, string>
): Promise<AxiosResponse> => {
  try {
    // Handle CSRF headers for methods that require it
    const baseHeaders = csrfRequired(method) ? await ensureCsrfHeader(headers) : headers;

    // Handle FormData content type
    const isFormData = payload instanceof FormData;
    const finalHeaders = {
      ...baseHeaders,
      ...(isFormData ? { 'Content-Type': undefined } : {}),
    };

    const config = { headers: finalHeaders };

    const response =
      method === 'get' || method === 'delete'
        ? await apiClient[method](endpoint, config)
        : await apiClient[method]<T>(endpoint, payload, config);

    return response;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const GET = async <T>(endpoint: string, headers?: Record<string, string>) =>
  await request<T>('get', endpoint, undefined, headers);

export const POST = async <T>(endpoint: string, payload: T, headers?: Record<string, string>) =>
  await request<T>('post', endpoint, payload, headers);

export const PUT = async <T>(endpoint: string, payload: T, headers?: Record<string, string>) =>
  await request<T>('put', endpoint, payload, headers);

export const PATCH = async <T>(endpoint: string, payload: T, headers?: Record<string, string>) =>
  await request<T>('patch', endpoint, payload, headers);

export const DELETE = async <T>(endpoint: string, headers?: Record<string, string>) =>
  await request<T>('delete', endpoint, undefined, headers);
