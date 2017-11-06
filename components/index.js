import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// home screen of the app
const HomeScreen = ({navigation}) => (
	<View style={styles.container}>
		<Text style={styles.title}>Shopping List</Text>
		<View style={styles.button}>
			<Button
				onPress={() => navigation.navigate('NewShoppingList')}
				title="Create New List"
				color="#1c84c6"
				accessibilityLabel="Create new shopping list"
			/>
		</View>
		<View style={styles.button}>
			<Button
				onPress={() => navigation.navigate('PrevShoppingLists')}
				title="View Previous Lists"
				color="#1c84c6"
				accessibilityLabel="View previous shopping lists"
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginTop: '10%',
		padding: '5%',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
		marginBottom: '5%'
	},
	button: {
		padding: '5%'
	}
});

export default HomeScreen;
