import React, { Component } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import { Card, Text, Image } from 'react-native-elements';

class FullImage extends Component {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    return (
      <Card>
        <Image
          source={{ uri: item.assets.preview_1500.url }}
          PlaceholderContent={(<ActivityIndicator />)}
          style={{
            width: '100%',
            height: Dimensions.get('window').width * 0.87 / item.aspect,
          }}
        />
        <Text>{item.description}</Text>
      </Card>
    );
  }
}

export default FullImage;
