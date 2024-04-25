import { useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { useNoteContext } from '../../contexts/NotesContext';

const Note = () => {
    const { id } = useLocalSearchParams();

    const { getNote } = useNoteContext();

    useEffect(() => {
        const getThisNote = async () => {
            try {
                const res = await getNote(id);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        getThisNote();
    }, []);

    return (
        <SafeAreaView className='p-3'>
            <Text>{id}</Text>
        </SafeAreaView>
    );
}

export default Note;