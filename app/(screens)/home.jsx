import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../contexts/AuthProvider';
import Header from '../../components/Header';
import { router } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { useState } from 'react';
import EmptyNote from '../../components/EmptyNote';

const home = () => {
    const [notes, setNotes] = useState([]);
    const { currentUser, logout } = useAuth();

    const goToAdd = () => {
        router.push('/add')
    }

    const handleLogout = async () => {
        await logout();
    }
    
    return (
        <SafeAreaView className='p-3'>
            <FlatList
                data={notes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View className='mt-3'>
                        <Text>{item.title}</Text>
                    </View>
                )}
                ListHeaderComponent={() => (
                    <Header currentUser={currentUser} handleLogout={handleLogout} goToAdd={goToAdd} />
                )}
                ListEmptyComponent={() => (
                    <EmptyNote />
                )}
            />
        </SafeAreaView>
    );
}

export default home;