import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    zIndex: 1,
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
});

export default styles;
