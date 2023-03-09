import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  scrollStyle: {
    // width: width,

    // backgroundColor: '#fff',
    // marginHorizontal: 10,
    // marginVertical: 10,
    // alignItems: 'center',
    height: height * 0.085,
    marginBottom: 22,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  categoryButton: {
 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 5,
    color:"#767575"
  },
});
