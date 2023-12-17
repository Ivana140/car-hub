import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Pressable, Text, View } from "react-native";
import { MenuSvg } from "../assets/svg";
import colors from "../constants/Colors";
import CarDetails from "./Details/CarDetails";
import CarList from "./Wishlist/list/CarList";
import { FontAwesome } from '@expo/vector-icons';
import HomePage from "./Wishlist/list/HomePage";

const Stack = createStackNavigator()
const CarApp = () => {
    const menuViewStyle = {paddingHorizontal: 16}
    const closeViewStyle = {
        backgroundColor: '#fff',
        height: 40,
        width: 36.36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 16,
        marginTop: 16
    }
    const closeText = {
        fontSize: 20,
        color: colors.gray_dar_color
    }
    return (
        <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                options={{
                  title: 'Car Hub',
                  headerTitleAlign: 'center',
                  headerStyle: {
                    backgroundColor: colors.car_primary_color, 
                  },
                  headerLeft: () =>     <View>
                  <FontAwesome name="car" size={20} color="white" style={{ marginLeft: 15,fontFamily: 'Helvetica Neue'}}/>
                  </View>,
                  headerTitleStyle: {
                    fontFamily: 'Helvetica Neue', 
                    fontSize: 18,
                    color: 'white',
                  },
                }
              }
                  name={'HomePage'}
                  key={'HomePage'}
                  component={HomePage}
                />
                <Stack.Screen
                  options={{
                    title: 'Car catalogue',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: colors.car_primary_color, 
                    },
                    headerLeft: () =>     <View>
                    <FontAwesome name="car" size={20} color="white" style={{ marginLeft: 15,fontFamily: 'Helvetica Neue'}}/>
                    </View>,
                    headerTitleStyle: {
                      fontFamily: 'Helvetica Neue', 
                      fontSize: 18,
                      color: 'white',
                    },
                    //headerTransparent: true,
                    cardStyle: {height: Dimensions.get('window').height},
                  }}
                  name={'CarList'}
                  key={'CarList'}
                  component={CarList}
                />

                <Stack.Screen
                  options={({navigation}) => ({
                    title: '',
                    headerLeft: () => (<Pressable onPress={() => navigation.pop()}>
                        <View style={closeViewStyle}>
                            <Text style={closeText}>X</Text>
                        </View>
                    </Pressable>),
                    headerTransparent: true,
                    cardStyle: {height: Dimensions.get('window').height},
                  })}
                  name={'CarDetails'}
                  key={'CarDetails'}
                  component={CarDetails}
                />  
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default CarApp;

