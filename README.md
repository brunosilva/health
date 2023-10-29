# React Native

Project to IMC Calculator - mobile


## Create a new project

```js
  npx create-expo-app my-app
```


## Start the project

```js
  npm install --global expo-cli
  expo init github-mobile
```



## Components

- ` <Text>` Render a new text
- ` <TextInput>` Create a new field to input information
- ` <View>` Just to show something in the screen
- ` <TouchableOpacity>` Create a button with effect after clicking it


## StyleSheet

Define the new file stylesheet with Css-in-Js
```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  boxTitle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textTitle: {
    color: "#FF0043",
    fontSize: 24,
    fontWeight: "bold",
  }
});

export default styles
```

After, import on your `index.js`.
```js
  import styles from "./style";

  ...

  <View style={styles.boxTitle}>
    <Text style={styles.textTitle}>Health 2.0</Text>
  </View>
```
