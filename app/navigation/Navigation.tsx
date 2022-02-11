import { View, Text } from "react-native";
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/screens/Home/Home";
import Profile from "../components/screens/Profile/Profile";
import More from "../components/screens/More/More";
import Payments from "../components/screens/Payments/Payments";
import Services from "../components/screens/Services/Services";
import Support from "../components/screens/Support/Support";
import Auth from "../components/screens/Auth/Auth";

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
        <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Support" component={Support} />
        </>
        ) 
        : (<Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
