import React, {useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View, Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Button from './Button';
import * as WebBrowser from 'expo-web-browser';

SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

const artImage = require('./assets/art.png')
const mileImage = require('./assets/mile.png')
const pierImage = require('./assets/pier.png')
const waterImage = require('./assets/water.png')
const willisImage = require('./assets/willis.png')

const Drawer = createDrawerNavigator();

export default function App() {

function ArtScreen({ navigation }) {
  let url = "https://www.artic.edu/"
  return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {artImage}
      />
      <Button
        info
        title="More Information"
        onPress={() => WebBrowser.openBrowserAsync(url)}
      >More Information
      </Button>
    </View>
  );
}

function MileScreen({ navigation }) {
   let url = "https://www.themagnificentmile.com/"
   return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {mileImage}
      />
      <Button
      info
      title="More Information"
      onPress={() => WebBrowser.openBrowserAsync(url)}
      >More Information
      </Button>
    </View>
  );
}

function PierScreen({ navigation }) {
   let url = "https://navypier.org"
   return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {pierImage}
      />
      <Button
      info
      title="More Information"
      onPress={() => WebBrowser.openBrowserAsync(url)}
      >More Information
      </Button>
    </View>
  );
}

function WaterScreen({ navigation }) {
  let url = "https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html"
   return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {waterImage}
      />
      <Button
      info
      title="More Information"
      onPress={() => WebBrowser.openBrowserAsync(url)}
      >More Information
      </Button>
    </View>
  );
}

function WillisScreen({ navigation }) {
  let url = "https://www.willistower.com/"
   return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.images}
        source= {willisImage}
        />
      <Button
      info
      title="More Information"
      onPress={() => WebBrowser.openBrowserAsync(url)}
      >More Information
      </Button>
    </View>
  );
}

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation intialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtScreen} />
        <Drawer.Screen name="Magnificent Mile" component={MileScreen} />
        <Drawer.Screen name="Navy Pier" component={PierScreen} />
        <Drawer.Screen name="Water Tower" component={WaterScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisScreen} />
      </Drawer.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  pageContainer:  {
    flex:  1,
    backgroundColor:  '#ffffff',
    alignItems:  'center',
    justifyContent:  'center'
  },
  images:  {
    height:  360,
    width:  240,
    marginBottom:  10,
    padding:  10
  }
})