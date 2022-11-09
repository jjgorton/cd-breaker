import {render, screen} from '@testing-library/react'

import CurrentCD from './CurrentCD'

test('renders current form', () => {
    render(<CurrentCD />)
    const principal = screen.getByTestId('principal')
    
    expect(principal).toBeInTheDocument();
})