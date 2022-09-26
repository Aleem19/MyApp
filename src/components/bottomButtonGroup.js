import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import {addressPin, phone} from '../../assests/images/index';

const BottomButtonGroup = ({cartData}) => {
  let finalPrice = 0;

  const getPrice = () => {
    cartData
      .filter((v, i, a) => a.findIndex(v2 => v2.imgName === v.imgName) === i)
      .map(priceItem => {
        if (priceItem.index === 0) {
          finalPrice += 4;
        } else if (priceItem.index === 1) {
          finalPrice += 3;
        } else if (priceItem.index === 2) {
          finalPrice += 6;
        }
      });
    return finalPrice;
  };
  return (
    <View style={styles.bottomMainView}>
      <View style={styles.directionsInfo}>
        <View style={styles.addressPinView}>
          <Image source={addressPin} style={styles.addressPin} />
        </View>
        <View style={styles.addressDescMainView}>
          <Text>Dongcheng District Metro Cultural Building</Text>
        </View>
        <View style={styles.phoneView}>
          <Image source={phone} style={styles.phoneImg} />
        </View>
      </View>
      <View style={styles.payMainView}>
        <View style={styles.paySubView}>
          <Text style={styles.getPrice}>
            {`${getPrice()}`}
            {'$'}
          </Text>
        </View>
        <View style={styles.payButtonView}>
          <Text style={styles.payText}>Pay</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomButtonGroup;
