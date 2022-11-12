import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

import '@testing-library/jest-dom';

describe('NavBar', () => {
  let navBar;

  beforeEach(() => {
    render(<NavBar />, { wrapper: BrowserRouter });
    navBar = screen.getByTestId('nav-bar');
  });

  it('Deve renderizar o componente normalmente', () => {
    expect(navBar).toMatchSnapshot();
  });

  it('Deve renderizar a logo do Go Dev', () => {
    const logo = navBar.querySelector('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('class', 'logo-image');
    expect(logo).toHaveAttribute('alt', 'Logo Go Dev');
  });
});

describe('NavBar navegação', () => {
  let navBarNavigation, links;

  beforeEach(() => {
    render(<NavBar />, { wrapper: BrowserRouter });
    navBarNavigation = screen.getByTestId('nav-bar');
    links = screen.getAllByRole('link');
  });

  it('Deve encaminhar para a home', () => {
    const home = links[0];
    fireEvent.click(home);
    expect(home.toString()).toBe('http://localhost/');
  });

  it('Deve encaminhar para trilhas', () => {
    const trilhas = links[1];
    fireEvent.click(trilhas);
    expect(trilhas.toString()).toBe('http://localhost/trilhas');
  });

  it('Deve encaminhar para certificados', () => {
    const certificados = links[2];
    fireEvent.click(certificados);
    expect(certificados.toString()).toBe('http://localhost/certificados');
  });
});