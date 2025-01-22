# **Projeto de Prática de Testes E2E com Detox em React Native**

Este repositório foi criado para demonstrar como configurar e executar testes end-to-end (E2E) em um aplicativo **React Native** utilizando o **Detox**. Ele inclui um exemplo prático de cenário de teste que cobre um fluxo importante da aplicação, focado em exibir informações de investimentos em diferentes telas. Durante a aula, os alunos deverão corrigir um erro proposital introduzido no teste.

---

## 📚 **O que são Testes E2E?**

Testes end-to-end verificam o funcionamento completo de um aplicativo, do início ao fim, simulando o comportamento do usuário. Esses testes:

- Garantem que todos os fluxos principais estão funcionando corretamente.
- Identificam problemas em interações entre diferentes camadas do aplicativo (UI, lógica de negócios, APIs).
- Oferecem confiança no produto final ao validar a experiência do usuário.

---

## 🎯 **Objetivos do Projeto**

1. Demonstrar como configurar o Detox em um aplicativo React Native.
2. Ensinar práticas de escrita e execução de testes E2E.
3. Identificar e corrigir erros introduzidos nos testes, praticando debugging.
4. Validar fluxos principais do aplicativo, garantindo a experiência do usuário.

---

## 🛠 **Ferramentas Utilizadas**

- **React Native**: Framework para desenvolvimento mobile.
- **Detox**: Framework de testes E2E para aplicativos React Native.
- **Jest**: Utilizado como executor de testes.

---

## 📝 **Atividades da Aula**

A aula é dividida em 3 atividades práticas que devem ser realizadas seguindo os passos abaixo:

### **Atividade 1: Configuração do Ambiente**
1. Instale as dependências do projeto:
   ```bash
   npm install
   ```
2. Compile o app para a plataforma desejada utilizando os comandos customizados:
   - Para iOS:
     ```bash
     npm run detox:build:ios
     ```
   - Para Android:
     ```bash
     npm run detox:build:android
     ```

---

### **Atividade 2: Execução do Teste E2E**
1. Execute o teste E2E no Detox utilizando os comandos customizados:
   - Para iOS:
     ```bash
     npm run detox:test:ios
     ```
   - Para Android:
     ```bash
     npm run detox:test:android
     ```

2. Observe que o teste para a aba **Wallet** falha de propósito.

---

### **Atividade 3: Debugging e Correção**
1. Abra o arquivo de teste localizado em `e2e/tests/earning_wallet.test.js`.
2. Analise o seguinte código com erro:
   ```javascript
   it('should display MXRF11 on Earnings screen and in Wallet', async () => {
     await element(by.text('Earnings')).tap();
     await expect(element(by.text('MXRF11'))).toBeVisible();

     await element(by.text('Wallet')).tap();
     await expect(element(by.text('MXRF10'))).toBeVisible();
   });
   ```
3. Corrija o código para que ele valide corretamente a presença de "MXRF11" na aba Wallet.
4. Reexecute o teste utilizando os comandos customizados para confirmar que o problema foi solucionado.

---

## 📋 **Dependências Necessárias (Comum)**

### **Java 17**

Instale o Java Development Kit (JDK) versão 17:

- Links de download: [Windows](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_windows-x64_bin.zip), [Mac AArch64](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_macos-aarch64_bin.tar.gz), [Mac x64](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_macos-x64_bin.tar.gz), [Linux AArch64](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_linux-aarch64_bin.tar.gz), [Linux x64](https://download.java.net/java/GA/jdk17/0d1cfde4252546c6931946de8db48ee2/9/GPL/openjdk-17.0.2_linux-x64_bin.tar.gz).

Verifique a instalação:
```bash
java -version
```

### **Node.js**

Requer **Node.js** versão 18 ou superior: [Baixe aqui](https://nodejs.org/).

---

## 🖥 **Configuração iOS**

### Pré-requisitos

1. Instale o **Xcode**: [Baixe aqui](https://developer.apple.com/xcode/).
2. Configure o simulador no Xcode (recomenda-se o iPhone 13 ou superior com iOS 15.5+).

Verifique se o `xcodebuild` está funcionando:
```bash
xcodebuild -version
```

### Instalando Dependências iOS

1. Instale o Detox:
   ```bash
   npm install -g detox-cli
   ```
2. Instale o `applesimutils`:
   ```bash
   brew tap wix/brew
   brew install applesimutils
   ```

---

## 🤖 **Configuração Android**

### Pré-requisitos

1. Instale o **Android Studio**: [Baixe aqui](https://developer.android.com/studio).
2. Configure um emulador (exemplo: Pixel 3a com API Level 30+).

Verifique se o `adb` está funcionando:
```bash
adb --version
```

### Seleção do Java 17 no Android Studio

1. Abra o Android Studio.
2. Vá para **File > Project Structure > SDK Location**.
3. Selecione **Java 17** como versão do JDK.

---

## 📂 **Estrutura do Projeto**

```
react_native_detox_investment_tests/
├── e2e/
│   ├── tests/
│   │   └── earning_wallet.test.js
│   └── jest.config.js
├── src/
├── ios/
├── android/
├── package.json
└── README.md
```

---

## 📧 **Contato**

- **Email**: [jackson.96@gmail.com](mailto:jackson.96@gmail.com)
- **LinkedIn**: [linkedin.com/in/3jacksonsmith](https://linkedin.com/in/3jacksonsmith)

Divirta-se explorando e testando! 🚀

