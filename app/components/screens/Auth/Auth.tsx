import { View, Text } from 'react-native'
import React, {FC} from 'react'
import { styleCenter } from '../../layout/Layout'
import tw from "tailwind-react-native-classnames"

const Auth:FC = () => {
  return (
    <View style={styleCenter}>
      <View style={tw`mx-5 justify-center items-center`}> 
      <Text>Auth</Text>
      </View>
    </View>
  )
}

export default Auth