import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { useNoteContext } from '../../contexts/NotesContext';
import { Ionicons } from '@expo/vector-icons';

const Note = () => {
    const [note, setNote] = useState({});
    const { id } = useLocalSearchParams();

    const { getNote } = useNoteContext();

    useEffect(() => {
        const getThisNote = async () => {
            try {
                const res = await getNote(id);
                setNote(res);
            } catch (error) {
                console.log(error);
            }
        }

        getThisNote();
    }, [id, getNote]);

    return (
        <SafeAreaView className='p-3'>
            <View className='flex-row items-center justify-between'>
                <Text className='text-2xl'>{note.title}</Text>
                <View className='flex-row items-center justify-end gap-4'>
                    <Ionicons name='pencil' size={20} onPress={() => {
                        console.log('Edit Clicked');
                    }} />
                    <Ionicons name='trash' size={20} onPress={() => {
                        console.log('Delete Clicked');
                    }} />
                </View>
            </View>
            <Text className='mt-2'>{note.content}</Text>
        </SafeAreaView>
    );
}

export default Note;