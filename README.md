# React Native Expo - Teste de Integração do Investment Card

Este projeto React Native Expo é focado no componente `InvestmentCard` e tem como objetivo ensinar como criar e corrigir testes de integração. Ele inclui dois exercícios de teste:

1. Adicionar verificações para garantir que os elementos de tela específicos sejam exibidos corretamente.
2. Identificar e corrigir um teste quebrado.

## Exercícios

1. **Verificação de elementos de tela**:
   - Assegure que os seguintes textos e valores estejam presentes:
     - **earnings**: `Rendimento: R$ 0,09`
     - **amount**: `R$ 11,52`
     - **date**: `DAQUI A 2 DIAS`

2. **Corrigir um teste quebrado**:
   - Um dos testes do `InvestmentCard` está quebrado. Encontre e corrija o problema para garantir que ele passe com sucesso.

## Requisitos

- Node.js e npm/yarn instalados
- Expo CLI (`npm install -g expo-cli`)

## Passos para Abrir e Executar o Projeto

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/jacksonsmith/react_native_test_integration.git
   cd react_native_test_integration
   ```
2. Instalar as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```
3. Abrir o projeto no Visual Studio Code:
Abra o Visual Studio Code e selecione File > Open Folder, depois escolha a pasta react_native_test_integration.

4. Iniciar o projeto:
   ```bash
   expo android
   # ou
   expo web
   ```
5. Executar os testes:
Abra um terminal dentro do Visual Studio Code e execute:
   ```bash
   npm test
   # ou
   yarn test
   ```

## Estrutura do Projeto
Componentes: O componente InvestmentCard está localizado na pasta src/components.
Testes: Os testes estão na pasta src/__tests__.
