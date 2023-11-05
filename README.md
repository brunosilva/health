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
- ` <FlatList>` Render just data in view
  ```js
    // data: array of data (reverse to render descending order)
    // renderItem: create formatted text to display
    // keyExtractor: unique key of list item
    <FlatList
      style={style.listImc}
      data={imcList.reverse()}
      renderItem={({item}) => {
        return (
          <Text style={style.resultImcItem}>
            <Text style={style.textResultItemList}>Resultado IMC: </Text>
            {item.imc}
          </Text>
        )
      }}
      keyExtractor={(item) => {item.id}}
    />
  ```




## API's

- ` Vibration` actived vibration when call it ` Vibration.vibrate()`
- ` Share` share with ex.: Whatsapp
  ```js
    const onShare = async () => {
      const result = await Share.share({
        message: `Meu imc hoje é: ${props.resultImc}`
      })
    }
  ```
- ` Pressable` is possible clickable and with an other api ` keyboard` you can hide the keyboard
  ```js
    <Pressable onPress={Keyboard.dismiss} ...>
      ...
    </Pressable>
  ```


## StyleSheet

Define the new file stylesheet with Css-in-Js, name like ` style.js` and the code here always have be camelCase pattern syntax.
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
