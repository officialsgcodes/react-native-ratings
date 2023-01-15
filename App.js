import {View, Text} from 'react-native';
import React from 'react';
import {AirbnbRating, Rating} from 'react-native-ratings';

export default function App() {
  return (
    <View>
      <Text
        style={{
          fontSize: 28,
          color: 'black',
          textAlign: 'center',
          marginVertical: 20,
        }}>
        React Native Ratings
      </Text>
      <AirbnbRating
        reviews={[
          'Poor',
          'Very Bad',
          'Bad',
          'Ok',
          'Good',
          'Very Good',
          'Excellent',
        ]}
        count={7}
        defaultRating={3}
        selectedColor="green"
        unSelectedColor="lightgray"
        reviewColor='green'
        size={25}
        reviewSize={25}
        showRating={true}
        // isDisabled
        // starContainerStyle={{ backgroundColor:"red" }}
        ratingContainerStyle={{ marginVertical: 20 }}
        starImage={require('./assets/icon.png')}
        onFinishRating={(rating) => alert(rating)}
      />

      <Rating 
      type='heart' // heart, star, bell, rocket
        ratingCount={7}
        showRating={true}
        ratingTextColor="red"
        // readonly
        // showReadOnlyText={false}
        fractions={1} // 0-20
        jumpValue={0.5}
        startingValue={5}
        onStartRating={rating => console.log(`Inital: ${rating}`)}
        onFinishRating={rating => console.log(`Rating finished ${rating}`)}
        onSwipeRating={rating => console.log(`Swiping: ${rating}`)}
      />
    </View>
  );
}
