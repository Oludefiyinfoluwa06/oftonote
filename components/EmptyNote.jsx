import { View, Text, Image } from 'react-native';
import { Button } from '../components/Button';
import { router } from 'expo-router';

const EmptyNote = () => {
    const handleGoToAdd = () => {
        router.push('/add');
    }

    return (
        <View className='items-center justify-center'>
            <Image
                source={require('../assets/images/empty-note.png')}
                className='w-full h-[400px]'
                resizeMode='contain'
            />
            <Text className='text-xl mt-[-40px] mb-6'>You have no notes yet</Text>
            <Button title='Add a Note' onPress={handleGoToAdd} />
        </View>
    );
}

export default EmptyNote;