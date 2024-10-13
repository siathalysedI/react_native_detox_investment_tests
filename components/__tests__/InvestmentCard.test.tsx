// __tests__/InvestmentCard.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import InvestmentCard from '../InvestmentCard';

describe('InvestmentCard', () => {
  it('displays the correct investment information', () => {
    const { getByText } = render(
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
    );

    expect(getByText('MXRF11')).toBeTruthy();
  });
});
