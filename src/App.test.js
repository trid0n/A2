import React from 'react';
import { render } from '@testing-library/react';
import Main from './modules/Main/Main'; // Import your component

describe('Main', () => {
  it('renders a greeting message', () => {
    // Render the Main component
    const { getByText } = render(<Main />);

    // Check if the greeting message is present in the rendered component
    const greetingMessage = getByText('I LOVE FOOD');
    expect(greetingMessage).toBeInTheDocument();
  });
});
