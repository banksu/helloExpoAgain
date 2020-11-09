import React from "react";
import Loading from "./Loader";
import { Alert } from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import Weather from "./Weather";
const API_KEY = "82285f0377798034c0c97408840eba6e";

export default class extends React.Component {
  state = {
    isLoding: true,
  };

  //getWeather(lati, long) {  }
  getWeather = async (lati, long) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
    //console.log(data.weather[0].description);
    //console.log(data.main.temp);
    console.log(data.weather[0].icon);
    const temp = data.main.temp;
    const weatherName = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    const dong = data.name;
    this.setState({
      isLoding: false,
      temp: temp,
      weatherName: weatherName,
      dong: dong,
      weatherIcon: weatherIcon,
    });
  };

  getLocation = async () => {
    try {
      //throw Error();
      await Location.requestPermissionsAsync();
      // const {
      //   coord:{latitude,longitude       }
      // } = await Location.getCurrentPositionAsync();
      const location = await Location.getCurrentPositionAsync();
      const lati = location.coords.latitude;
      const long = location.coords.longitude;
      console.log(lati, long);
      this.getWeather(lati, long);
    } catch (error) {
      Alert.alert("I can't find you", "ㅋㅋㅋ");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoding, temp, weatherName, dong, weatherIcon } = this.state;

    return isLoding ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        weatherName={weatherName}
        dong={dong}
        weatherIcon={weatherIcon}
      />
    );
  }

  // <View style={styles.container}>
  //   <View style={styles.container}>
  //     <StatusBar style="auto" />
  //     <MaterialCommunityIcons name="weather-cloudy" size={90} color="black" />
  //     <Text style={styles.Text}>OMG EXPO...</Text>
  //   </View>

  //   <View style={styles.container}></View>
  // </View>
}
