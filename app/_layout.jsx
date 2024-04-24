import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthProvider";
import { NoteProvider } from "../contexts/NotesContext";

const RootLayout = () => {
    return (
        <AuthProvider>
            <NoteProvider>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(auth)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(screens)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </NoteProvider>
        </AuthProvider>
    )
}

export default RootLayout;