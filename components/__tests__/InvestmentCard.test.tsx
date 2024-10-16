// __tests__/InvestmentCard.test.tsx
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import InvestmentCard from '../InvestmentCard';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

describe('InvestmentCard', () => {
  it('displays the correct investment information', () => {
    const { getByText } = render(
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
    );

    expect(getByText('MXRF11')).toBeTruthy();
  });

  it('displays alert', () => {
    //mocks
    const mockAlert = jest.fn()
    global.alert = mockAlert;


    const {getByText} = render(
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
    );

    const botao_mais_detalhes = getByText("MXRF11")

    //presiona o botão
    fireEvent(getByText("Rendimento: R$ 0,09"), 'click')

    expect(Alert.alert).toHaveBeenCalled();
  });
});
