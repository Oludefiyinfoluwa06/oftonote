import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthProvider";

const RootLayout = () => {
    return (
        <AuthProvider>
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
        </AuthProvider>
    )
}

export default RootLayout;