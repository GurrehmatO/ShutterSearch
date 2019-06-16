import React, { Component } from 'react';
import {
  View, FlatList, Keyboard, TouchableHighlight, ActivityIndicator,
} from 'react-native';
import {
  Text, SearchBar, Button, Image,
} from 'react-native-elements';
import {
  APP_NAME, HOME_HEADING, SEARCH_PLACEHOLDER, SEARCH_BUTTON,
} from '../../constants/strings';
import getImages from '../../utils/getImages.util';
import styles from './HomeScreen.component.style';

class HomeScreen extends Component {
  static navigationOptions = {
    title: APP_NAME,
  };

  state = {
    searchKey: '',
    pages: 0,
    images: [],
  }

  onChangeText = (value) => {
    this.setState({
      searchKey: value,
      pages: 0,
      images: [],
    });
  }

  onSearch = () => {
    const { searchKey } = this.state;
    Keyboard.dismiss();
    getImages(1, searchKey)
      .then(({ data }) => {
        this.setState({
          pages: 1,
          images: data.data,
        });
      })
      .catch(console.error);
  }

  renderImage = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableHighlight
        style={styles.imageContainer}
        onPress={() => {
          navigation.navigate('FullImage', { item });
        }}
      >
        <Image
          source={{ uri: item.assets.huge_thumb.url }}
          PlaceholderContent={(<ActivityIndicator />)}
          style={styles.image}
        />
      </TouchableHighlight>
    );
  }

  getKey = item => item.id;

  onReachingEnd = () => {
    const { searchKey, pages, images } = this.state;
    getImages(pages + 1, searchKey)
      .then(({ data }) => {
        this.setState({
          pages: pages + 1,
          images: [
            ...images,
            ...data.data,
          ],
        });
      });
  }

  render() {
    const { searchKey, images, pages } = this.state;
    return (
      <View
        style={styles.HomeContainer}
        onPress={() => Keyboard.dismiss()}
      >
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
            onPress={this.onSearch}
          />
        </View>
        <View style={styles.resultContainer}>
          {(pages > 0) && (
          <FlatList
            data={images}
            horizontal={false}
            numColumns={3}
            renderItem={this.renderImage}
            keyExtractor={this.getKey}
            onEndReachedThreshold={0.5}
            onEndReached={this.onReachingEnd}
          />
          )}
        </View>
      </View>
    );
  }
}

export default HomeScreen;
