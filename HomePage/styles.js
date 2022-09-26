import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    // flex: 1,
    zIndex: 1,
    // height: '100%',
    backgroundColor: '#fff',
  },
  mainView: {
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
});

export default styles;
