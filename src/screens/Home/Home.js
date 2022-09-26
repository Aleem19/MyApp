import React, {Fragment} from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';
import MainView from './MainView';

function Home() {
  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaContainer}>
        <MainView />
      </SafeAreaView>
    </Fragment>
  );
}

export default Home;
