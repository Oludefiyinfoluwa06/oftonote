import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../../components/InputBox';
import { Button } from '../../components/Button';
import { router } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const handlePress = async () => {
        try {
            await login(email, password);
        } catch (error) {
            console.log('Error logging in: ' + error);
            Alert.alert('Error', 'An error occurred, please try again later');
        }
    }

    return (
        <SafeAreaView className='h-full bg-white p-[20px]'>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className='items-center justify-center gap-2 my-5'>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        className='w-11 h-11'
                        resizeMode='contain'
                    />
                </View>
                <View>
                    <Text className='text-xl mb-4 text-center font-bold'>Login to your account</Text>
                    <View className='mt-3'>
                        <Text className='mb-2'>Email</Text>
                        <InputBox 
                            placeholder='Enter your email' 
                            secureTextEntry={false} 
                            value={email} 
                            onChangeText={(text) => setEmail(text)} 
                            multiline={false}
                        />
                    </View>
                    <View className='my-4'>
                        <Text className='mb-2'>Password</Text>
                        <InputBox 
                            placeholder='Enter your password' 
                            secureTextEntry={true} 
                            value={password} 
                            onChangeText={(text) => setPassword(text)} 
                            multiline={false}
                        />
                    </View>

                    <Button title='Login' onPress={handlePress} />

                    <View className="flex items-center justify-center gap-2 flex-row mt-2">
                        <Text>Don't have an account?</Text>
                        <Text
                            className="font-semibold text-blue-500"
                            onPress={() => router.push('/sign-up')}
                        >Sign up</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignIn;