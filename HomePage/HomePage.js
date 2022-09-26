import React, {useRef, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Pressable,
  SafeAreaView,
  Text,
  Image,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';

import {setCardItems} from '../Redux/index';
import {
  navBarDrink,
  navBarFood,
  navBarSpl,
  navBarFav,
} from '../assests/icons/index';

import {
  starBig,
  starMedium,
  starSmall,
  topBurger,
  topCoffee,
  topFries,
  add,
  tray,
  plateCoffee,
  plateFries,
  plateBurger,
  addressPin,
  phone,
} from '../assests/images/index';
import styles from './styles';
function HomePage() {
  const dispatch = useDispatch();
  const {cartData} = useSelector(state => state.indexReducer);

  const foodTypeTextTranslation = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const foodTypeOpacity = useRef(new Animated.Value(1)).current;

  const mediumStarTranslation = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const bigStarTranslation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const smallStarTranslation = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;

  const opacityTranslation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const opacity1 = useRef(new Animated.Value(0)).current;

  const plateCoffeeTranslation = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const opacity2 = useRef(new Animated.Value(0)).current;

  const plateBurgerTranslation = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const opacity3 = useRef(new Animated.Value(0)).current;

  const currentIndex = useRef(0);
  const previousIndex = useRef(0);
  let finalPrice = 0;
  let data = [
    {
      name: 'FRIES',
      price: '4$',
      key: 1,
      imageName: topFries,
      bottomImageName: plateFries,
    },
    {
      name: 'LATTE',
      price: '3$',
      key: 2,
      imageName: topCoffee,
      bottomImageName: plateCoffee,
    },
    {
      name: 'BURGER',
      price: '6$',
      key: 4,
      imageName: topBurger,
      bottomImageName: plateBurger,
    },
  ];

  const getSelectedData = selectedItem => {
    dispatch(setCardItems(selectedItem));
    console.log('getSelectedData....', selectedItem);
  };

  const onAddItem = item => {
    if (cartData.length) {
      if (cartData && cartData.includes(currentIndex.current)) {
        //do nothing
      } else {
        console.log('else inside....', currentIndex.current);
        const payload = {
          index: currentIndex.current,
          imgName: item.bottomImageName,
        };
        getSelectedData(payload);
      }
    } else {
      console.log('else outside....', currentIndex.current);
      const payload = {
        index: currentIndex.current,
        imgName: item.bottomImageName,
      };
      getSelectedData(payload);
    }

    if (currentIndex.current === 0) {
      Animated.parallel([
        Animated.timing(opacity1, {
          toValue: 1,
          delay: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityTranslation.x, {
          toValue: -45,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityTranslation.y, {
          toValue: 175,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (currentIndex.current === 1) {
      Animated.parallel([
        Animated.timing(opacity2, {
          toValue: 1,
          delay: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(plateCoffeeTranslation.x, {
          toValue: -95,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(plateCoffeeTranslation.y, {
          toValue: 130,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (currentIndex.current === 2) {
      Animated.parallel([
        Animated.timing(opacity3, {
          toValue: 1,
          delay: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(plateBurgerTranslation.x, {
          toValue: -144,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(plateBurgerTranslation.y, {
          toValue: 168,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  function zeroToOne() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(foodTypeOpacity, {
          //fade Out
          toValue: 0,
          delay: 10,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.x, {
          toValue: 0,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.y, {
          toValue: -100,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(mediumStarTranslation.x, {
          toValue: 140,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(mediumStarTranslation.y, {
          toValue: -90,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bigStarTranslation.x, {
          toValue: -28,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bigStarTranslation.y, {
          toValue: 100,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(smallStarTranslation.x, {
          toValue: -170,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(smallStarTranslation.y, {
          toValue: 47,
          delay: 200,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(foodTypeOpacity, {
          toValue: 1,
          delay: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.x, {
          toValue: 0,
          delay: 20,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.y, {
          toValue: 0,
          delay: 20,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  function evenToAdd() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(foodTypeOpacity, {
          //fade Out
          toValue: 0,
          delay: 10,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.x, {
          toValue: 0,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.y, {
          toValue: -100,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(mediumStarTranslation, {
          toValue: 0,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bigStarTranslation, {
          toValue: 0,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(smallStarTranslation, {
          toValue: 0,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(foodTypeOpacity, {
          toValue: 1,
          delay: 20,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.x, {
          toValue: 0,
          delay: 20,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.y, {
          toValue: 0,
          delay: 20,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  function oddToEven() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(foodTypeOpacity, {
          //fade Out
          toValue: 0,
          delay: 10,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.x, {
          toValue: 0,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.y, {
          toValue: -100,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(mediumStarTranslation.x, {
          toValue: 10,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(mediumStarTranslation.y, {
          toValue: -120,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bigStarTranslation.x, {
          toValue: -145,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bigStarTranslation.y, {
          toValue: 100,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(smallStarTranslation.x, {
          toValue: -20,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(smallStarTranslation.y, {
          toValue: 62,
          delay: 200,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(foodTypeOpacity, {
          toValue: 1,
          delay: 20,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.x, {
          toValue: 0,
          delay: 20,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(foodTypeTextTranslation.y, {
          toValue: 0,
          delay: 20,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  const onViewCallBack = React.useCallback(viewableItems => {
    viewableItems &&
      viewableItems.changed &&
      viewableItems.changed.map(items => {
        if (items.isViewable === true) {
          previousIndex.current = currentIndex.current
            ? currentIndex.current
            : 0;
          currentIndex.current = items.index;
        }
      });
  }, []);

  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

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
    <Fragment>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Animated.FlatList
            data={data}
            style={styles.flatList}
            horizontal
            pagingEnabled
            bounces={false}
            onViewableItemsChanged={onViewCallBack}
            viewabilityConfig={viewConfigRef.current}
            onScrollBeginDrag={() => {
              if (previousIndex.current === 0 && currentIndex.current === 0) {
                zeroToOne();
              } else if (
                currentIndex.current % 2 !== 0 &&
                previousIndex.current === 0
              ) {
                oddToEven();
              } else if (
                currentIndex.current === 0 &&
                previousIndex.current % 2 !== 0
              ) {
                zeroToOne();
              } else if (
                currentIndex.current % 2 === 0 &&
                previousIndex.current % 2 !== 0
              ) {
                zeroToOne();
              } else if (
                currentIndex.current % 2 !== 0 &&
                previousIndex.current % 2 === 0
              ) {
                evenToAdd();
              }
            }}
            onScrollEndDrag={() => {
              //
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
            renderItem={({item, index}) => {
              return (
                <View style={styles.overallMainView}>
                  <View style={styles.overallSubMainView}>
                    {/* A. Left side view */}
                    <View style={styles.foodItemDisplay}>
                      {/* 2. Middle Top Image  */}
                      <Animated.View style={styles.foodItemSubView}>
                        <Animated.Image
                          style={styles.foodItemImgView}
                          source={item.imageName}
                        />
                        {/* <Image style={styles.topMainImage} source={item.imageName} /> */}
                      </Animated.View>
                    </View>

                    {/* B. Right side view */}
                    <View style={styles.secondContainer}>
                      <Animated.View
                        style={[
                          styles.secondAContainer,
                          {opacity: foodTypeOpacity},
                          {
                            transform: [
                              {translateX: foodTypeTextTranslation.x},
                              {translateY: foodTypeTextTranslation.y},
                            ],
                          },
                        ]}>
                        <Text style={styles.foodTypeText}>{item.name}</Text>
                        <Text style={styles.priceText}>{item.price}</Text>
                        <TouchableOpacity
                          onPress={() => {
                            onAddItem(item);
                          }}
                          style={styles.addButton}>
                          <Image style={styles.addButtonImage} source={add} />
                        </TouchableOpacity>
                      </Animated.View>
                    </View>
                  </View>
                </View>
              );
            }}
          />

          {/* OVERALL: Scroll view main view */}
          <View style={styles.mainView}>
            {/* A. Left side view */}
            <View style={styles.firstContainer}>
              {/* 1. Medium size star - Left Side  */}
              <View style={styles.mediumSizedView}>
                <Animated.View
                  style={[
                    styles.mediumSizedAnimatedView,
                    {
                      transform: [
                        {translateX: mediumStarTranslation.x},
                        {translateY: mediumStarTranslation.y},
                      ],
                    },
                  ]}>
                  <Image style={styles.starMedium} source={starMedium} />
                </Animated.View>
              </View>

              {/* 3. Two stars - Right Side  */}
              <View style={styles.starsView}>
                {/* 3.1 Big Right Star - Top right */}
                <Animated.View
                  style={[
                    styles.bigSizedAnimatedView,
                    {
                      transform: [
                        {translateX: bigStarTranslation.x},
                        {translateY: bigStarTranslation.y},
                      ],
                    },
                  ]}>
                  <Image style={styles.starBig} source={starBig} />
                </Animated.View>

                {/* 3.2 Small Right Star - Bottom right */}
                <Animated.View
                  style={[
                    styles.smallSizedAnimatedView,
                    {
                      transform: [
                        {translateX: smallStarTranslation.x},
                        {translateY: smallStarTranslation.y},
                      ],
                    },
                  ]}>
                  <Image style={styles.starSmall} source={starSmall} />
                </Animated.View>
              </View>
            </View>
          </View>

          {/* MIDDLE LINE */}
          <View style={styles.separatorLine} />

          {/* TRAY VIEW */}
          <View style={styles.cartItemsDisplay}>
            <Image style={styles.cartImg} source={tray} />
          </View>

          {/* {cartData &&
            cartData
              .filter(
                (v, i, a) => a.findIndex(v2 => v2.imgName === v.imgName) === i,
              )
              .map((item, i) => {
                console.log('item', item);
                if (item.index !== currentIndex) {
                  return ( */}
          <Animated.Image
            // key={i}
            style={[
              styles.cartItem1,
              {opacity: opacity1},
              {
                transform: [
                  {translateX: opacityTranslation.x},
                  {translateY: opacityTranslation.y},
                ],
              },
            ]}
            source={plateFries}
            // source={item.imgName}
          />

          {/* );
                }
              })} */}
          <Animated.Image
            style={[
              styles.cartItem2,
              {opacity: opacity2},
              {
                transform: [
                  {translateX: plateCoffeeTranslation.x},
                  {translateY: plateCoffeeTranslation.y},
                ],
              },
            ]}
            source={plateCoffee}
          />

          <Animated.Image
            style={[
              styles.cartItem3,
              {opacity: opacity3},
              {
                transform: [
                  {translateX: plateBurgerTranslation.x},
                  {translateY: plateBurgerTranslation.y},
                ],
              },
            ]}
            source={plateBurger}
          />
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

          <View style={styles.navContainer}>
            <View style={styles.navBar}>
              <Pressable
                style={styles.iconBehave}
                onPress={() => {
                  console.log('onPress Nav bar 1');
                }}>
                <Image style={styles.nav1} source={navBarFav} />
              </Pressable>

              <Pressable
                style={styles.iconBehave}
                onPress={() => {
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

export default HomePage;
