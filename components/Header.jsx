import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ currentUser, handleLogout, goToAdd }) => {
    return (
        <View className='flex-row items-center justify-between'>
            <View className='items-start justify-start'>
                <Text className='text-lg'>Welcome,</Text>
                <Text className='text-xl'>{currentUser.email}</Text>
            </View>
            <View className='flex-row gap-3 items-center justify-end'>
                <TouchableOpacity onPress={goToAdd}>
                    <Ionicons name='add' size={30} color='blue' />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogout}>
                    <Ionicons name='log-out' size={30} color='blue' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;