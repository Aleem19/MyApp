import React from 'react';
import {Pressable, Image, View} from 'react-native';
import styles from './styles';
import {
  navBarDrink,
  navBarFood,
  navBarSpl,
  navBarFav,
} from '../../assests/icons/index';
const NavContainer = () => {
  const navIconArr = [
    {imgName: navBarFav, imgStyle: styles.navIconFirst},
    {imgName: navBarFood, imgStyle: styles.navIconSecond},
    {imgName: navBarDrink, imgStyle: styles.navIconThird},
    {imgName: navBarSpl, imgStyle: styles.navIconFourth},
  ];
  return (
    <View style={styles.navContainer}>
      <View style={styles.navBar}>
        {navIconArr.map((iconItem, i) => {
          return (
            <Pressable key={i} style={styles.iconBehave}>
              <Image style={iconItem.imgStyle} source={iconItem.imgName} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default NavContainer;
