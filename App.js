import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/index';
import NewShoppingList from './components/newShoppingList';
import PrevShoppingLists from './components/prevShoppingLists';

const AppNav = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerTitle: 'Home'
		},
	},
	NewList: {
		screen: NewShoppingList,
		navigationOptions: {
			headerTitle: 'New Shopping List'
		},
	},
	PrevLists: {
		screen: PrevShoppingLists,
		navigationOptions: {
			headerTitle: 'Previous Shopping Lists'
		},
	}
});

/*class App extends React.Component {

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Text style={styles.title}>Shopping List</Text>
				<View style={styles.button}>
					<Button
						onPress={() => navigate('NewList')}
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
	}
}

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
});*/

export default AppNav;

