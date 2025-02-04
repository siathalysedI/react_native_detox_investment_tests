# **E2E poc with detox in react native**

This repository was created to demonstrate how to configure and execute end-to-end tests (E2E) in an application **react native** using **detox**. It includes a practical example of test scenario that covers an important flow of the application, focused on displaying investment information on different screens.

---

## **Objectives**

1. Demonstrate how to configure detox on a React Native application.
2. Teach writing and execution practices of E2E tests.
3. Identify and correct errors introduced in the tests, practicing debugging.
4. Validate main flow flows, ensuring the user experience.

---

## **Tools**

- **React Native**: Framework for Mobile Development.
- **Detox**: E2E test framework for React Native applications.
- **Jest**: Used as a test performer.

---

## Instructions to run the project

### Tools Used

 - Native React: Framework for mobile development.
 - Detox: E2E testing framework for React Native applications.
 - Jest: Used as a test runner.


### Dependencies

 - Java 17 Temurin
    Install vía sdkman, configure SDKMAN_DIR and sdkman-init on ~/.zshrc and check installation:
    `sdk current java`
    `java -version`
    `echo $SDKMAN_DIR`

    <br>
 - Nvm and node 20.18.2
    Install npm via nvm via brew, configure NVM_DIR AND nvm loading on ~/.zshrc and check installation:
    `brew info nvm`
    `nvm version`
    `npm -version`
    `node -version`
    `echo $NVM_DIR`

    <br>
 - Applesimutils
    Install via brew and check installation:
    `brew info applesimutils`
    `applesimutils -v`

    <br>
 - Adb
    Install via Android Studio, configure ANDROID_HOME on ~/.zshrc and check installation:
    `echo $ANDROID_HOME`
    `$ANDROID_HOME/platform-tools/adb version`

    <br>
 - Xcode
    Install via Appstore and check installation:
    `xcodebuild -version`

    <br>
 - Cocoapods via gems via rbenv 2.7.8 vía brew and check installation:
    `brew info rbenv`
    `rbenv version`
    `ruby -v`
    `gem query --local | grep cocoapods`

    <br>

### Repository

#### Cloning

Clone the repository

`git@github.com:siathalysedI/react_native_detox_investment_tests.git`


#### Dependencies

Install the dependencies for the project

`npm install`


#### Building

Build the app for the desired platform 

`npm run detox:build:ios`
`npm run detox:build:android`


#### Build the app for the desired platform 

Run the E2E test in Detox for the desired platform

`npm run detox:test:ios`
`npm run detox:test:android`