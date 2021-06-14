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
import {View, StyleSheet, Text} from 'react-native';
import User from './User';

type StoryProps = {
  id: number;
};

type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

const Story = ({id}: StoryProps) => {
  const [story, setStory] = useState<Story>();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
      );
      const data = await res.json();
      setStory(data);
    }
    fetchData();
  }, [id]);
  return (
    <View style={styles.story}>
      <Text style={styles.title}>{story?.title}</Text>

      <Text>Time: {story?.time}</Text>
      <Text>Score: {story?.score}</Text>
      <Text>Url: {story?.url}</Text>
      <User id={story?.by} />
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Story;
