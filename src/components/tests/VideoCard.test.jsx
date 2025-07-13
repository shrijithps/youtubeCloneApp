import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import VideoCard from '../VideoCard';

const mockVideo = {
    id: '123abc',
    title: 'Awesome Video',
    thumbnail: 'https://example.com/thumbnail.jpg',
    channelTitle: 'Cool Channel',
    channelAvatar: 'https://example.com/avatar.jpg',
    views: '1M views',
    publishedAt: '2 days ago',
};

const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('VideoCard Component', () => {
    test('renders video title', () => {
        renderWithRouter(<VideoCard video={mockVideo} />);
        expect(screen.getByText('Awesome Video')).toBeInTheDocument();
    });

    test('renders channel title', () => {
        renderWithRouter(<VideoCard video={mockVideo} />);
        expect(screen.getByText('Cool Channel')).toBeInTheDocument();
    });

    test('renders views and published date', () => {
        renderWithRouter(<VideoCard video={mockVideo} />);
        expect(screen.getByText(/1M views \* 2 days ago/i)).toBeInTheDocument();
    });

    test('renders thumbnail image with correct src and alt', () => {
        renderWithRouter(<VideoCard video={mockVideo} />);
        const thumbnail = screen.getByAltText('Awesome Video');
        expect(thumbnail).toBeInTheDocument();
        expect(thumbnail).toHaveAttribute('src', mockVideo.thumbnail);
    });

    test('renders channel avatar image with correct src and alt', () => {
        renderWithRouter(<VideoCard video={mockVideo} />);
        const avatar = screen.getByAltText('Cool Channel');
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute('src', mockVideo.channelAvatar);
    });

    test('links to correct video watch page', () => {
        renderWithRouter(<VideoCard video={mockVideo} />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', `/watch/${mockVideo.id}`);
    });
});
