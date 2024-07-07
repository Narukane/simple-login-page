import React, {useState, useCallback, useMemo} from 'react';
import {View, Alert, StyleSheet, Text} from 'react-native';
import {login} from '../../services/api';
import {Button, TextInput} from '../../components/Index';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  const handleLogin = useCallback(async () => {
    if (!isEmailValid) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      const response = await login(email, password);
      console.log('Login Successful:', response.data);
    } catch (error) {
      console.error('Error Logging In:', error);
    }
  }, [email, password, isEmailValid]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi, Welcome</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default LoginPage;
