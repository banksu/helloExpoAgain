import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

//import weatherState from "./weatherState";

const weatherState = {
  "01d": {
    colors: ["#C6FFDD", "#FBD786", "#f7797d"],
    icon: "weather-sunny",
    title: "Miracles happen to only those who believe in them.",
    subTitle: "기적은 그것을 믿는 사람에게만 일어난다.",
  },
  "02d": {
    colors: ["#2C5364", "#203A43", "#0F2027"],
    icon: "weather-partly-cloudy",
    title: "Think like a man of action and act like man of thought.",
    subTitle: "행동하는 사람처럼 생각하고, 생각하는 사람처럼 행동하라.",
  },
  "03d": {
    colors: ["#2C5364", "#203A43", "#0F2027"],
    icon: "weather-cloudy",
    title:
      "Courage is very important. Like a muscle, it is strengthened by use.",
    subTitle: "용기는 대단히 중요하다. 근육과 같이 사용함으로써 강해진다.",
  },
  "04d": {
    colors: ["#2C5364", "#203A43", "#0F2027"],
    icon: "weather-cloudy",
    title: "By doubting we come at the truth.",
    subTitle: "의심함으로써 우리는 진리에 도달한다.",
  },

  "09d": {
    colors: ["#f7797d", "#86A8E7", "#7F7FD5"],
    icon: "weather-pouring",
    title:
      "Life is the art of drawing sufficient conclusions from insufficient premises.",
    subTitle: "인생이란 불충분한 전제로부터 충분한 결론을 끌어내는 기술이다.",
  },
  "10d": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-pouring",
    title: "A man that has no virtue in himself, ever envies virtue in others.",
    subTitle: "자기에게 덕이 없는 자는 타인의 덕을 시기한다.",
  },
  "11d": {
    colors: ["#c31432", "#240b36"],
    icon: "weather-lightning",
    title: "When money speaks, the truth keeps silent.",
    subTitle: "돈이 말할 때는 진실은 입을 다문다.",
  },
  "13d": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-snowy-heavy",
    title: "Better the last smile than the first laughter.",
    subTitle: "처음의 큰 웃음보다 마지막의 미소가 더 좋다.",
  },
  "50d": {
    colors: ["#005AA7", "#FFFDE4"],
    icon: "weather-fog",
    title:
      "In the morning of life, work; in the midday, give counsel; in the evening, pray.",
    subTitle: "인생의 아침에는 일을 하고, 낮에는 충고하며, 저녁에는 기도하라.",
  },
  "01n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-partly-rainy",
    title: "Painless poverty is better than embittered wealth.",
    subTitle: "고통 없는 빈곤이 괴로운 부보다 낫다.",
  },
  "02n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-night-partly-cloudy",
    title: "A poet is the painter of the soul.",
    subTitle: "시인은 영혼의 화가이다.",
  },
  "03n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-night-partly-cloudy",
    title: "Error is the discipline through which we advance.",
    subTitle: "잘못은 그것을 통하여 우리가 발전할 수 있는 훈련이다.",
  },
  "04n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-night-partly-cloudy",
    title: "Weak things united become strong.",
    subTitle: "약한 것도 합치면 강해진다.",
  },

  "09n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-pouring",
    title: "Faith without deeds is useless.",
    subTitle: "행함이 없는 믿음은 쓸모가 없다.",
  },
  "10n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-pouring",
    title: "Nature never deceives us; it is always we who deceive ourselves.",
    subTitle:
      "자연은 인간을 결코 속이지 않는다. 우리를 속이는 것은 항상 우리 자신이다.",
  },
  "11n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-lightning",
    title: "We give advice, but we cannot give conduct.",
    subTitle: "충고는 해 줄 수 있으나, 행동하게 할 수는 없다.",
  },
  "13n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-snowy-heavy",
    title: "Forgiveness is better than revenge.",
    subTitle: "용서는 복수보다 낫다.",
  },
  "50n": {
    colors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "weather-fog",
    title: "We never know the worth of water till the well is dry.",
    subTitle: "우물이 마르기까지는 물의 가치를 모른다.",
  },
};

export default function Weather({ temp, weatherName, dong, weatherIcon }) {
  return (
    <LinearGradient
      colors={weatherState[weatherIcon].colors}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          {dong} / {weatherName}
        </Text>
      </View>

      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherState[weatherIcon].icon}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp} ℃</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}> {weatherState[weatherIcon].title} </Text>
        <Text style={styles.subTitle}>
          {weatherState[weatherIcon].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // *CSS
    //bottom: 130,
    //marginLeft: 30,
    // *React Native
    // backgroundColor: "black",
  },
  infoContainer: {
    flex: 1,
  },

  halfContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    // *CSS
    //bottom: 130,
    //marginLeft: 30,
    // *React Native
    //backgroundColor: "black",
  },
  temp: {
    fontSize: 46,
    color: "white",
  },
  info: {
    marginTop: 23,
    marginRight: 6,
    fontSize: 13,
    color: "white",
    textAlign: "right",
  },
  title: {
    fontWeight: "bold",
    fontSize: 48,
    color: "white",
    marginLeft: 30,
    alignItems: "center",
  },
  subTitle: {
    marginTop: 10,
    fontSize: 20,
    color: "white",
  },
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  dong: PropTypes.string.isRequired,
  weatherName: PropTypes.string.isRequired,
  weatherIcon: PropTypes.oneOf([
    "01d",
    "02d",
    "03d",
    "04d",
    "09d",
    "10d",
    "11d",
    "13d",
    "50d",
    "01n",
    "02n",
    "03n",
    "04n",
    "09n",
    "10n",
    "11n",
    "13n",
    "50n",
  ]).isRequired,
};
