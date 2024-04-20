import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { router } from 'expo-router';

export default function App() {
  const handlePress = () => {
    router.push('/sign-in')
  }

  return (
    <SafeAreaView className='h-full bg-white p-[20px]'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full flex-1 items-center justify-center px-4'>
          <Image
            source={require('../assets/image1.png')}
            className='w-full h-[400px]'
            resizeMode='contain'
          />

          <Text className='text-center text-[18px] font-semibold'>Discover the endless possiblities of Oftonote</Text>
          <Text className='text-center mt-2'>Get started by creating an account or logging in</Text>

          <Button title='Continue with email' onPress={handlePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
