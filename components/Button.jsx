import { TouchableOpacity, Text, Image } from 'react-native'

export const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            className='w-full p-3 bg-blue-700 rounded-[10px]'
            onPress={onPress}
        >
            <Text className='text-white text-center'>{title}</Text>
        </TouchableOpacity>
    );
}