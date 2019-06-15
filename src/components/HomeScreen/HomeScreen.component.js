import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, SearchBar, Button } from 'react-native-elements';
import {
  APP_NAME, HOME_HEADING, SEARCH_PLACEHOLDER, SEARCH_BUTTON,
} from '../../constants/strings';
import styles from './HomeScreen.component.style';

class HomeScreen extends Component {
  static navigationOptions = {
    title: APP_NAME,
  };

  state = {
    searchKey: '',
  }

  onChangeText = (value) => {
    this.setState({ searchKey: value });
  }

  render() {
    const { searchKey } = this.state;
    return (
      <View style={styles.HomeContainer}>
        <Text h2 style={styles.Heading}>{HOME_HEADING}</Text>
        <View style={styles.SearchContainer}>
          <SearchBar
            style={styles.SearchBar}
            lightTheme
            placeholder={SEARCH_PLACEHOLDER}
            containerStyle={styles.SearchBarContainer}
            inputStyle={styles.SearchText}
            value={searchKey}
            onChangeText={this.onChangeText}
          />
          <Button
            title={SEARCH_BUTTON}
            buttonStyle={styles.button}
            disabled={(searchKey === '')}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
