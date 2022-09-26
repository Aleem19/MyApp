import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    zIndex: 1,
    // height: '100%',
    backgroundColor: '#FFEDED',
  },
  flatList: {
    height: 500,
    top: 75,
    zIndex: 2,
  },
  overallMainView: {
    width: Dimensions.get('screen').width,
    height: '100%',
  },
  overallSubMainView: {
    flex: 1,
    flexDirection: 'row',
  },
  foodItemDisplay: {
    flex: 0.55,
    flexDirection: 'row',
  },
  foodItemSubView: {
    flex: 1,
    marginLeft: 0,
    marginTop: 0,
  },
  foodItemImgView: {
    width: 245,
    height: 270,
  },
  mediumSizedView: {
    flex: 0.2,
    justifyContent: 'center',
    alignContent: 'center',
    // marginLeft: 11,
    top: '-90%',
    marginLeft: '10%',
  },
  starsView: {
    flex: 0.8,
  },
  bigSizedAnimatedView: {
    marginTop: '-155%',
    position: 'absolute',
    right: 22,
    width: 25,
    height: 27,
  },
  smallSizedAnimatedView: {
    marginTop: '-100%',
    position: 'absolute',
    right: 4,
    width: 11,
    height: 12,
  },
  mediumSizedAnimatedView: {
    width: 15,
    height: 17,
  },
  cartItemsDisplay: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 18,
    zIndex: -60,
  },
  separatorLine: {
    width: '100%',
    height: 1,
    top: 18,
    backgroundColor: '#F2F1F1',
    zIndex: -99,
  },
  cartItem1: {
    zIndex: -20,
    width: 90,
    height: 90,
    top: '-30%',
    marginLeft: 145,
    right: -100,
  },
  cartItem2: {
    width: 110,
    height: 110,
    top: '-41%',
    marginLeft: 145,
    zIndex: -50,
    right: -100,
  },
  cartItem3: {
    width: 120,
    height: 120,
    top: '-55%',
    marginLeft: 140,
    zIndex: -30,
    right: -100,
  },
  cartImg: {width: 260, height: 100, top: 40},
  mainView: {
    flex: 1,
    top: 75,
    height: 286,
    flexDirection: 'row',
  },
  firstContainer: {
    zIndex: 1,
    flex: 0.55,
    flexDirection: 'row',
  },
  secondContainer: {
    flex: 0.45,
    flexDirection: 'row',
    zIndex: 1,
  },
  secondAContainer: {
    flex: 0.75,
    flexDirection: 'column',
    zIndex: 1,
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    height: 73,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#FD003C',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  nav1: {
    height: 32,
    width: 21,
  },
  nav2: {
    height: 32,
    width: 31,
  },
  nav3: {
    height: 35,
    width: 25,
  },
  nav4: {
    height: 34,
    width: 34,
  },
  iconBehave: {
    padding: 20,
  },
  screenText: {
    fontSize: 30,
    color: 'blue',
  },
  starMedium: {
    width: 15,
    height: 17,
  },
  starBig: {
    width: 25,
    height: 27,
  },
  starSmall: {
    width: 11,
    height: 12,
  },
  topMainImage: {
    width: 245,
    height: 270,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  foodTypeText: {
    fontWeight: '600',
    top: '20%',
    fontSize: 32,
    color: '#EB5C77',
    textAlign: 'right',
  },
  priceText: {
    fontWeight: '300',
    top: '20%',
    fontSize: 24,
    color: '#EB5C77',
    right: 0,
    textAlign: 'right',
  },
  addButton: {
    position: 'absolute',
    bottom: '15%',
    right: '-12%',
    width: 85,
    height: 85,
    zIndex: 1,
  },
  addButtonImage: {
    width: 85,
    height: 85,
  },
  middleLine: {
    width: '100%',
    height: 1,
  },
  bottomMainView: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    height: 115,
    width: '100%',
  },
  directionsInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  addressPin: {
    width: 25,
    height: 33,
  },
  addressPinView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  addressDescMainView: {
    flex: 0.6,
  },
  phoneView: {
    alignItems: 'center',
    flex: 0.2,
  },
  phoneImg: {
    width: 32,
    height: 32,
  },
  payMainView: {
    width: '100%',
    height: 55,
    backgroundColor: 'gray',
    justifyContent: 'center',
    flexDirection: 'row',
    // position: 'absolute', //Here is the trick
    // bottom: 0, //Here is the trick
  },
  paySubView: {
    backgroundColor: 'white',
    flex: 0.6,
    justifyContent: 'center',
    height: 55,
  },
  getPrice: {
    height: '100%',
    justifyContent: 'center',
    paddingTop: 7,
    paddingLeft: 22,
    fontWeight: '600',
    fontSize: 32,
    color: '#4F4F4F',
  },
  payButtonView: {
    backgroundColor: '#FF5D79',
    flex: 0.4,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payText: {
    fontWeight: '600',
    fontSize: 32,
    color: '#ffffff',
  },
});

export default styles;
