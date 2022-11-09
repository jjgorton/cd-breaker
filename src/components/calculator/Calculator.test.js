import {render, screen} from '@testing-library/react'

import Calculator from './Calculator'

test('renders calculator', () => {
    render(<Calculator />);

    const current = screen.getByText(/current cd/i)
    const penalty = screen.getByTest(/penalty/i)
    const equality = screen.getByTestId('equality-sign')
    const other = screen.getByText(/other cd/i)

    expect(current).toBeInTheDocument()
    expect(penalty).toBeInTheDocument()
    expect(equality).toBeInTheDocument()
    expect(other).toBeInTheDocument()
})