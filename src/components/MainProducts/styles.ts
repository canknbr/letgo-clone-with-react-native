import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    width: '92%',
    marginHorizontal: '4%',
  },
  titleProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailTitle: {
    fontSize: 14,
    color: '#FFC700',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:"flex-start",
    justifyContent:"center",
    width:"100%",

  },
});