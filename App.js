import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Profile from './avatar.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          size="xlarge"
          rounded
          title="CR"
          source={Profile}
        />
      </View>
      <View style={styles.input}>
        <View>
          <Text style={styles.texto}>Login</Text>
          <Input style={styles.inputStyle}
          />
        </View>

        <View>
          <Text style={styles.texto}>Senha</Text>
          <Input style={styles.inputStyle}
          />
        </View>

        <View>

          <View style={styles.buttonStyle}>
            <Button buttonStyle={styles.buttonColor1}
            />
            <Text style={styles.textoButton1}>Login</Text>
          </View>

          <View style={styles.buttonStyle}>
            <Button buttonStyle={styles.buttonColor2}
            />
            <Text style={styles.textoButton2}>Cadastre-se</Text>
          </View>

        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    top: '20%',
  },
  input: {
    top: '25%',
    width: '85%',
    height: '90%',
  },
  inputStyle: {
    borderWidth: 1,
  },
  texto: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    left: 10,
    marginEnd: 5,
  },
  buttonStyle: {
    width: '90%',
    left: '4.5%',
  },
  buttonColor1: {
    backgroundColor: '#0000FF',
    height: 70,
  },
  buttonColor2: {
    backgroundColor: 'red',
    height: 70,
  },
  textoButton1: {
    fontFamily: 'Helvetica',
    fontSize: 28,
    bottom: '50%',
    left: '38%',
    color: '#fff'
  },
  textoButton2: {
    fontFamily: 'Helvetica',
    fontSize: 28,
    bottom: '50%',
    left: '24%',
    color: '#fff'
  },
});
