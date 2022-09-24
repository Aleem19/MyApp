/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, Fragment } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';

import {
  navBarDrink,
  navBarFood,
  navBarSpl,
  navBarFav,
} from './assests/icons/index';

import { starBig, starMedium, starSmall, topCoffee, topFries, add, tray, plateCoffee } from './assests/images/index';
function App() {
  const navBarArray = [{ img: 'navBarFav', style: styles.nav1 }];
  // const mediumStarTranslation = useRef(new Animated.Value(0)).current;
  const mediumStarTranslation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const bigStarTranslation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const smallStarTranslation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const opacityTranslation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const opacity = useRef(new Animated.Value(0)).current;

  function onAddItem() {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        delay: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityTranslation.x, {
        toValue: -50,
        delay: 200,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityTranslation.y, {
        toValue: 140,
        delay: 200,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          {/* OVERALL: Scroll view main view */}
          <View style={styles.mainView}>
            {/* A. Left side view */}
            <View style={styles.firstContainer}>
              {/* 1. Medium size star - Left Side  */}
              <View style={{
                flex: 0.2,
                justifyContent: 'center',
                alignContent: 'center',
                marginLeft: 11,
                // borderWidth: 1,
                // borderColor: 'yellow',
              }}>
                <Animated.View
                  style={{
                    width: 15,
                    height: 17,
                    // borderWidth: 1,
                    // borderColor: 'red',
                    transform: [
                      { translateX: mediumStarTranslation.x },
                      { translateY: mediumStarTranslation.y },
                    ],
                  }}>
                  <Image style={styles.starMedium} source={starMedium} />
                </Animated.View>
              </View>

              {/* 2. Middle Top Image  */}
              <View style={{
                flex: 0.6,
                justifyContent: 'center',
                marginLeft: topFries ? "-30%" : 0,
                marginTop: topFries ? "-40%" : 0,
                // borderWidth: 1,
                // borderColor: 'black',
              }}>
                <Image style={styles.topMainImage} source={topFries} />
              </View>

              {/* 3. Two stars - Right Side  */}
              <View style={{
                flex: 0.2,
                // borderWidth: 1,
                // borderColor: 'purple',
              }}>
                {/* 3.1 Big Right Star - Top right */}
                <Animated.View
                  style={{
                    marginTop: 32,
                    position: 'absolute',
                    right: 20,
                    width: 25,
                    height: 27,
                    // borderWidth: 1,
                    // borderColor: 'blue',
                    transform: [
                      { translateX: bigStarTranslation.x },
                      { translateY: bigStarTranslation.y },
                    ],
                  }}>
                  <Image style={styles.starBig} source={starBig} />
                </Animated.View>

                {/* 3.2 Small Right Star - Bottom right */}
                <Animated.View
                  style={{
                    marginTop: 100,
                    position: 'absolute',
                    right: 4,
                    width: 11,
                    height: 12,
                    // borderWidth: 1,
                    // borderColor: 'blue',
                    transform: [
                      { translateX: smallStarTranslation.x },
                      { translateY: smallStarTranslation.y },
                    ],
                  }}>
                  <Image style={styles.starSmall} source={starBig} />
                </Animated.View>
              </View>

            </View>
            {/* B. Right side view */}
            <View style={styles.secondContainer}>
              <View style={styles.secondAContainer}>
                <Text style={styles.foodTypeText}>FRIES</Text>
                <Text style={styles.priceText}>4$</Text>
                <TouchableOpacity onPress={() => { onAddItem(); }}
                  style={styles.addButton}>
                  <Image style={styles.addButtonImage} source={add} />
                </TouchableOpacity>
              </View>

            </View>
          </View>

          {/* MIDDLE LINE */}
          <View style={{ width: "100%", height: 1, top: 75, backgroundColor: "#F2F1F1" }} />

          {/* TRAY VIEW */}
          <View style={{
            width: "100%", alignItems: 'center',
            justifyContent: 'center',
            top: 76,
          }}>
            <Image style={{ width: 260, height: 100, top: 40 }} source={tray} />
          </View>

          <Animated.Image
            style={{
              width: 130,
              height: 130,
              top: "-28%",
              marginLeft: 85,
              zIndex: 2,
              opacity,
              // position: 'absolute',
              right: -100,
              // left: "40%",
              // opacity: 1,
              // borderWidth: 1,
              // borderColor: 'red',
              transform: [
                // {scale: opacity.interpolate({inputRange:[0, 1], outputRange:[1, 1]})},
                { translateX: opacityTranslation.x },
                { translateY: opacityTranslation.y },
              ],
            }}
            source={plateCoffee}
          />
          <View style={styles.navContainer}>
            <View style={styles.navBar}>

              {/* 1st Nav Bar Button */}
              <Pressable
                style={styles.iconBehave}
                onPress={() => {
                  console.log('onPress Nav bar 1');
                  Animated.timing(mediumStarTranslation, {
                    toValue: 0,
                    delay: 200,
                    duration: 1000,
                    useNativeDriver: true,
                  }).start();
                  Animated.timing(bigStarTranslation, {
                    toValue: 0,
                    delay: 200,
                    duration: 1000,
                    useNativeDriver: true,
                  }).start();
                  Animated.timing(smallStarTranslation, {
                    toValue: 0,
                    delay: 200,
                    duration: 1000,
                    useNativeDriver: true,
                  }).start();
                }}>
                <Image style={styles.nav1} source={navBarFav} />
              </Pressable>

              {/* 2nd Nav Bar Button */}
              <Pressable
                style={styles.iconBehave}
                onPress={() => {
                  Animated.parallel([
                    Animated.timing(mediumStarTranslation.x, {
                      toValue: 170,
                      delay: 200,
                      duration: 1000,
                      useNativeDriver: true,
                    }),
                    Animated.timing(mediumStarTranslation.y, {
                      toValue: -50,
                      delay: 200,
                      duration: 1000,
                      useNativeDriver: true,
                    }),
                    Animated.timing(bigStarTranslation.x, {
                      toValue: -10,
                      delay: 200,
                      duration: 1000,
                      useNativeDriver: true,
                    }),
                    Animated.timing(bigStarTranslation.y, {
                      toValue: 170,
                      delay: 200,
                      duration: 1000,
                      useNativeDriver: true,
                    }),

                    Animated.timing(smallStarTranslation.x, {
                      toValue: -150,
                      delay: 200,
                      duration: 1000,
                      useNativeDriver: true,
                    }),
                    Animated.timing(smallStarTranslation.y, {
                      toValue: 120,
                      delay: 200,
                      duration: 1000,
                      useNativeDriver: true,
                    }),
                  ]).start();
                  console.log('onPress Nav bar 2');
                }}>
                <Image style={styles.nav2} source={navBarFood} />
              </Pressable>
              <Pressable
                style={styles.iconBehave}
                onPress={() => {
                  console.log('onPress Nav bar 3');
                }}>
                <Image style={styles.nav3} source={navBarDrink} />
              </Pressable>
              <Pressable
                style={styles.iconBehave}
                onPress={() => {
                  console.log('onPress Nav bar 4');
                }}>
                <Image style={styles.nav4} source={navBarSpl} />
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  mainView: {
    top: 75,
    height: 286,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'grey',
  },
  firstContainer: {
    zIndex: 1,
    // borderWidth: 1,
    // borderColor: 'green',
    flex: 0.55,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  secondContainer: {
    // borderWidth: 1,
    // borderColor: 'blue',
    flex: 0.45,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  secondAContainer: {
    // borderWidth: 1,
    // borderColor: 'blue',
    flex: 0.75,
    flexDirection: 'column',
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
    fontWeight: "600",
    top: "20%",
    fontSize: 32,
    color: "#EB5C77",
    textAlign: "right",
  },
  priceText: {
    fontWeight: "300",
    top: "20%",
    fontSize: 24,
    color: "#EB5C77",
    right: 0,
    textAlign: "right",
  },
  addButton: {
    position: "absolute",
    bottom: "15%",
    right: "-12%",
    width: 85,
    height: 85,
  },
  addButtonImage: {
    width: 85,
    height: 85,
  },
  middleLine: {
    width: "100%",
    height: 1,
  },
});

export default App;
