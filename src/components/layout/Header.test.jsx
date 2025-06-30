import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the agency name', () => {
    render(<Header />);
    expect(screen.getByText('My Creative Agency')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
}); 