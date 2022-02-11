import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import tw from "tailwind-react-native-classnames"
interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<IField> = ({ onChange, placeholder, val, isSecure }) => {
  return (
   <TextInput
    value = {val}
    autoCapitalize = 'none'
    onChangeText = {onChange}
    placeholder = {placeholder} 
    secureTextEntry = {isSecure}
    showSoftInputOnFocus = {false}
    style = {tw`rounded-xl bg-gray-100 mt-3 p-3 w-full `}
    />
  );
};

export default Field;
