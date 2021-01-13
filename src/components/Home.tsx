import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title="Go to ADD Page"
        onPress={() => navigation.navigate('Add')}
      />
    </SafeAreaView>
  );
};

export default Home;
