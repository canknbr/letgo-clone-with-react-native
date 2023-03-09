import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get('window');
export default StyleSheet.create({
  favorite: {
    width: width * 0.29,
  },
  favoriteView: {
    width: width * 0.27,
    height: width * 0.27,
    overflow: 'hidden',
  },
  favoriteImage: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: 10,
  },
  favoriteText: {
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    top: 12,
    right: -25,
    backgroundColor: '#FFC700',
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  favoriteTextTitle: {
    fontSize: 10,
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  main: {
    width: width * 0.45,
    height: width * 0.45,
    alignItems: 'center',
  },
  mainView: {
    width: width * 0.43,
    height: width * 0.43,
    overflow: 'hidden',
  },
  mainImage: {
    width: width * 0.43,
    height: width * 0.43,
    borderRadius: 10,
  },
});