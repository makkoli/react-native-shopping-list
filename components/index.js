import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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

// home screen of the app
const HomeScreen = (props) => (
	<View style={styles.container}>
		<Text style={styles.title}>Shopping List</Text>
		<View style={styles.button}>
			<Button
				onPress={() => {return; }}
				title="Create New List"
				color="#1c84c6"
				accessibilityLabel="Create new shopping list"
			/>
		</View>
		<View style={styles.button}>
			<Button
				onPress={() => {return;}}
				title="View Previous Lists"
				color="#1c84c6"
				accessibilityLabel="View previous shopping lists"
			/>
		</View>
	</View>
);

export default HomeScreen;
