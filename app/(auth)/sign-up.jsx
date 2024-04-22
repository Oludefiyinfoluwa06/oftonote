import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputBox from '../../components/InputBox';
import { Button } from '../../components/Button';
import { router } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signup } = useAuth();

    const handlePress = async () => {
        if (email === '' || password === '') {
            return Alert.alert('Error', 'Input fields are empty');
        }

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(email) === false) {
            return Alert.alert('Error', 'Please, enter a valid email');
        }

        if (password.length < 8) {
            return Alert.alert('Error', 'Password field must be 8 characters or more');
        }
        
        try {
            await signup(email, password);
        } catch (error) {
            console.log('Error signing up: ' + error);
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
                    <Text className='text-xl mb-4 text-center font-bold'>Create your account</Text>
                    <View className='mt-3'>
                        <Text className='mb-2'>Email</Text>
                        <InputBox placeholder='Enter your email' secureTextEntry={false} value={email} onChangeText={(text) => setEmail(text)} />
                    </View>
                    <View className='my-4'>
                        <Text className='mb-2'>Password</Text>
                        <InputBox placeholder='Enter your password' value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                    </View>

                    <Button title='Sign up' onPress={handlePress} />

                    <View className="flex items-center justify-center gap-2 flex-row mt-2">
                        <Text>Already have an account?</Text>
                        <Text
                            className="font-semibold text-blue-500"
                            onPress={() => router.push('/sign-in')}
                        >Sign in</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp;