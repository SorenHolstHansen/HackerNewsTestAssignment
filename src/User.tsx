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

type UserProps = {
  id?: string;
};

type User = {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
};

const User = ({id}: UserProps) => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${id}.json`,
      );
      const data = await res.json();
      setUser(data);
    }
    fetchData();
  }, [id]);
  return (
    <View style={styles.story}>
      <Text>User: {user?.id}</Text>
      <Text>Karma: {user?.karma}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {},
});

export default User;
