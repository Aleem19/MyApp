import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, Image, View, Animated, TouchableOpacity} from 'react-native';

import {setCardItems} from '../../redux/index';

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
} from '../../../assests/images/index';
import BottomButtonGroup from '../../components/bottomButtonGroup';
import NavContainer from '../../containers/navContainer';
import styles from './styles';

const MainView = () => {
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

  const firstCartItemTranslation = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const firstItemOpacity = useRef(new Animated.Value(0)).current;

  const secondCartItemTranslation = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const secondItemOpacity = useRef(new Animated.Value(0)).current;

  const thirdCartItemTranslation = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const thirdItemOpacity = useRef(new Animated.Value(0)).current;

  const currentIndex = useRef(0);
  const previousIndex = useRef(0);
  const data = [
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
  };

  const onAddItem = item => {
    if (cartData.length) {
      if (cartData && cartData.includes(currentIndex.current)) {
        //do nothing
      } else {
        const payload = {
          index: currentIndex.current,
          imgName: item.bottomImageName,
        };
        getSelectedData(payload);
      }
    } else {
      const payload = {
        index: currentIndex.current,
        imgName: item.bottomImageName,
      };
      getSelectedData(payload);
    }

    if (currentIndex.current === 0) {
      Animated.parallel([
        Animated.timing(firstItemOpacity, {
          toValue: 1,
          delay: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(firstCartItemTranslation.x, {
          toValue: -45,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(firstCartItemTranslation.y, {
          toValue: 175,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (currentIndex.current % 2 !== 0) {
      Animated.parallel([
        Animated.timing(secondItemOpacity, {
          toValue: 1,
          delay: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(secondCartItemTranslation.x, {
          toValue: -95,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(secondCartItemTranslation.y, {
          toValue: 130,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (currentIndex.current % 2 === 0) {
      Animated.parallel([
        Animated.timing(thirdItemOpacity, {
          toValue: 1,
          delay: 100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(thirdCartItemTranslation.x, {
          toValue: -144,
          delay: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(thirdCartItemTranslation.y, {
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

  function evenToOdd() {
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

  const onViewCallBack = React.useRef(viewableItems => {
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

  return (
    <View style={styles.container}>
      {/*  */}
      <Animated.FlatList
        data={data}
        style={styles.flatList}
        horizontal
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={onViewCallBack.current}
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
            evenToOdd();
          }
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

      {/* Animated view */}
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

          {/* 2. Two stars - Right Side  */}
          <View style={styles.starsView}>
            {/* 2.1 Big Right Star - Top right */}
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

            {/* 2.2 Small Right Star - Bottom right */}
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

      {/* Middle Line */}
      <View style={styles.separatorLine} />

      {/* Tray View */}
      <View style={styles.cartItemsDisplay}>
        <Image style={styles.cartImg} source={tray} />
      </View>

      {/* Tray Items */}
      <Animated.Image
        style={[
          styles.cartItem1,
          {opacity: firstItemOpacity},
          {
            transform: [
              {translateX: firstCartItemTranslation.x},
              {translateY: firstCartItemTranslation.y},
            ],
          },
        ]}
        source={plateFries}
      />

      <Animated.Image
        style={[
          styles.cartItem2,
          {opacity: secondItemOpacity},
          {
            transform: [
              {translateX: secondCartItemTranslation.x},
              {translateY: secondCartItemTranslation.y},
            ],
          },
        ]}
        source={plateCoffee}
      />

      <Animated.Image
        style={[
          styles.cartItem3,
          {opacity: thirdItemOpacity},
          {
            transform: [
              {translateX: thirdCartItemTranslation.x},
              {translateY: thirdCartItemTranslation.y},
            ],
          },
        ]}
        source={plateBurger}
      />
      <BottomButtonGroup cartData={cartData} />
      <NavContainer />
    </View>
  );
};

export default MainView;
