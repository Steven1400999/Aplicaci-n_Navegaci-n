import { Button, View } from "react-native-web";

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate('Register')}
            />
            <Button
                title="Go to Order"
                onPress={() => navigation.navigate('Order')}
            />
        </View>
    );
}

export default NotificationsScreen;