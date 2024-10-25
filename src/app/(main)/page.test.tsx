import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostsPage from './page'; 
import { Post } from '@/types/type';
import services from '@/services/fetchAPI';

jest.mock('@/services/fetchAPI');

describe('PostsPage', () => {
  const mockPosts: Post[] = [
    { userId: 1, id: 1, title: 'Post One', body: 'Content of post one' },
    { userId: 2, id: 2, title: 'Post Two', body: 'Content of post two' },
  ];

  beforeAll(() => {
    (services.getPosts as jest.Mock).mockResolvedValue({ data: mockPosts });
  });

  it('renders posts correctly', async () => {
    render(<PostsPage />);

    await waitFor(() => screen.getByRole('heading', { name: 'Posts' }));

    const postTitleHeadings = await screen.findAllByRole('heading', { level: 5 });

    expect(postTitleHeadings).toHaveLength(mockPosts.length); 
    expect(screen.getByText('Post One')).toBeInTheDocument();
    expect(screen.getByText('Content of post one')).toBeInTheDocument();
    expect(screen.getByText('Post Two')).toBeInTheDocument();
    expect(screen.getByText('Content of post two')).toBeInTheDocument();
  });
});