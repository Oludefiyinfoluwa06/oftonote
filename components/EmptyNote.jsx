import { View, Text, Image } from 'react-native';

const EmptyNote = () => {
    return (
        <View className='items-center justify-center'>
            <Image
                source={require('../assets/images/empty-note.png')}
                className='w-full h-[400px]'
                resizeMode='contain'
            />
            <Text className='text-xl'>You have no notes yet</Text>
        </View>
    );
}

export default EmptyNote;