import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC0D6ARzV5bUdRNaS9r5xRRHsj7e_vETss',
      authDomain: 'auth-react-native-ca37b.firebaseapp.com',
      databaseURL: 'https://auth-react-native-ca37b.firebaseio.com',
      projectId: 'auth-react-native-ca37b',
      storageBucket: 'auth-react-native-ca37b.appspot.com',
      messagingSenderId: '94851579912'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{height: 46}}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
