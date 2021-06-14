/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import Story from './src/Story';

const App = () => {
  const [topStories, setTopStories] = useState<number[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://hacker-news.firebaseio.com/v0/topstories.json',
      );
      const data = await res.json();

      setTopStories(data.slice(0, 10));
    }
    fetchData();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        style={styles.sectionContainer}
        contentInsetAdjustmentBehavior="automatic">
        {topStories.map(storyId => (
          <Story key={storyId} id={storyId} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 0,
  },
});

export default App;
