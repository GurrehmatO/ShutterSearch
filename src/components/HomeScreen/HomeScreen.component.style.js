import { Dimensions } from 'react-native';

const styles = {
  HomeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  Heading: {
    width: '100%',
    textAlign: 'center',
  },
  SearchContainer: {
    width: '100%',
  },
  SearchBar: {
    width: '100%',
    borderColor: 'transparent',
    marginBottom: 20,
  },
  SearchBarContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  SearchText: {
    color: 'white',
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  resultContainer: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    margin: 2,
    flex: 1,
  },
  image: {
    width: (Dimensions.get('window').width / 3) - 5,
    height: (Dimensions.get('window').width / 3) - 5,
  },
};

export default styles;
