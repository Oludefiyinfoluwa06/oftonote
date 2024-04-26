import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import Header from '../../components/Header';
import EmptyNote from '../../components/EmptyNote';

import { useAuth } from '../../contexts/AuthProvider';
import { useNoteContext } from '../../contexts/NotesContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const { currentUser, logout } = useAuth();
    const { getNotes } = useNoteContext();

    const goToAdd = () => {
        router.push('/add');
    }

    const handleLogout = async () => {
        await logout();
    }

    useEffect(() => {
        const getAllNotes = async () => {
            setLoading(true);
            
            try {
                const response = await getNotes();
                const docs = response.docs;

                if (docs && Array.isArray(docs)) {
                    const info = await docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setNotes(info);
                } else {
                    console.log('Invalid data structure from getNotes');
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getAllNotes();
    }, [getNotes]);
    
    return (
        <SafeAreaView className='p-3'>
            {loading ? (
                <Spinner
                    visible={loading}
                    textContent='Loading...'
                    textStyle={{ color: '#fff' }}
                />
            ): (
                <FlatList
                    data={notes}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity className='mt-3 bg-slate-200 p-3 rounded-md space-y-2' onPress={() => router.push(`/${item.id}`)}>
                            <Text className='text-xl font-bold'>{item.title}</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail">{item.content}</Text>
                        </TouchableOpacity>
                    )}
                    ListHeaderComponent={() => (
                        <Header currentUser={currentUser} handleLogout={handleLogout} goToAdd={goToAdd} />
                    )}
                    ListEmptyComponent={() => (
                        <EmptyNote />
                    )}
                />
            )}
        </SafeAreaView>
    );
}

export default Home;