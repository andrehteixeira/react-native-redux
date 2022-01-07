import * as React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Moedas } from "../Pages/Moedas";
import { Poupanca } from "../Pages/Poupanca";
import { useDispatch, useSelector } from "react-redux";
import { iInicialState } from "../store";

const Tab = createBottomTabNavigator();

export function Routes() {
  const verSaldo = useSelector((state: iInicialState) => state.verSaldo);
  const dispatch = useDispatch();
  const togglesaldo = () => {
    dispatch({ type: "toggleSaldo" });
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }} onPress={togglesaldo}>
              <Ionicons
                name={verSaldo ? "ios-eye-outline" : "ios-eye-off-outline"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "Moedas") {
              iconName = focused ? "money" : "money";
            } else if (route.name === "Poupança") {
              iconName = focused ? "bank" : "bank";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Moedas" component={Moedas} />
        <Tab.Screen name="Poupança" component={Poupanca} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
