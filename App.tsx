/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {ChatClient, ChatOptions} from 'react-native-agora-chat';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const appKey = 'easemob#easeim';
const id = 'asterisk001';
const ps = 'qwerty';

function init() {
  ChatClient.getInstance().init(new ChatOptions({appKey}));
}

function login() {
  ChatClient.getInstance()
    .login(id, ps, true)
    .then(() => {
      console.log('login success');
    })
    .catch(e => {
      console.log(e);
    });
}
function logout() {
  ChatClient.getInstance()
    .logout()
    .then(() => {
      console.log('logout success');
    })
    .catch(e => {
      console.log(e);
    });
}
function custom() {
  ChatClient.getInstance()
    .chatManager.searchMsgFromDB('1')
    .then(res => {
      console.log(res);
    })
    .catch();
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Pressable style={styles.test} onPress={init}>
        <Text>{'init'}</Text>
      </Pressable>
      <Pressable style={styles.test} onPress={login}>
        <Text>{'login'}</Text>
      </Pressable>
      <Pressable style={styles.test} onPress={logout}>
        <Text>{'logout'}</Text>
      </Pressable>
      <Pressable style={styles.test} onPress={custom}>
        <Text>{'custom'}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  test: {
    height: 40,
    width: '100%',
    marginVertical: 5,
    backgroundColor: 'green',
  },
});

export default App;
