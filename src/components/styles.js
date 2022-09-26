import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
