# **Projeto de Prática de Testes E2E com Detox em React Native**

Este repositório foi criado para demonstrar como configurar e executar testes end-to-end (E2E) em um aplicativo **React Native** utilizando o **Detox**. Ele inclui um exemplo prático de cenário de teste que cobre um fluxo importante da aplicação, focado em exibir informações de investimentos em diferentes telas.

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
3. Validar fluxos principais do aplicativo, garantindo a experiência do usuário.

---

## 🛠 **Ferramentas Utilizadas**

- **React Native**: Framework para desenvolvimento mobile.
- **Detox**: Framework de testes E2E para aplicativos React Native.
- **Jest**: Utilizado como executor de testes.

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

### **Expo CLI**

Instale globalmente:
```bash
npm install -g expo-cli
```

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

### Configuração Detox para iOS

Edite o arquivo `.detoxrc.js`:
```javascript
module.exports = {
  configurations: {
    "ios.sim.debug": {
      type: "ios.simulator",
      binaryPath: "ios/build/Build/Products/Debug-iphonesimulator/YourApp.app",
      build: "xcodebuild -workspace ios/YourApp.xcworkspace -scheme YourApp -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      device: {
        type: "iPhone 15"
      }
    }
  }
};
```

Liste simuladores disponíveis:
```bash
xcrun simctl list devices
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

### Configuração Detox para Android

Edite o arquivo `.detoxrc.js`:
```javascript
module.exports = {
  configurations: {
    "android.emu.debug": {
      type: "android.emulator",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      build: "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      device: {
        avdName: "Pixel_3a_API_30"
      }
    }
  }
};
```

---

## 🚀 **Executando os Testes**

### Passos Comuns

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Compile o app:
   - Para iOS:
     ```bash
     detox build -c ios.sim.debug
     ```
   - Para Android:
     ```bash
     detox build -c android.emu.debug
     ```
3. Execute os testes:
   - Para iOS:
     ```bash
     detox test -c ios.sim.debug
     ```
   - Para Android:
     ```bash
     detox test -c android.emu.debug
     ```

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

