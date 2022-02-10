import { View, Text } from "react-native";
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "../components/screens/Auth/Auth";
import Home from "../components/screens/Home/Home";
import Profile from "../components/screens/Profile/Profile";
import More from "../components/screens/More/More";
import Payments from "../components/screens/Payments/Payments";
import Services from "../components/screens/Services/Services";
import Support from "../components/screens/Support/Support";

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
        <>
        <Stack.Screen name="Auth" component={Home} />
        <Stack.Screen name="Auth" component={Profile} />
        <Stack.Screen name="Auth" component={More} />
        <Stack.Screen name="Auth" component={Payments} />
        <Stack.Screen name="Auth" component={Services} />
        <Stack.Screen name="Auth" component={Support} />
        </>
        ) : (<Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
