/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

const styles = StyleSheet.create({
	text: {
		alignItems: 'center',
		fontSize: 17
	},
	head: {
		backgroundColor: 'teal',
		color: 'white',
		fontSize: 20,
		alignContent: 'center'
	},
	select: {
		width: 190,
		marginTop: 5,
		marginLeft: 100,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10
	},
	selectText: {
		fontSize: 20,
		alignItems: 'center',
		marginRight: 15,
		marginTop: 9,
		color: 'teal'
	},
	cartdata: {
		fontSize: 25,
		marginLeft: 20
	}
});
export default class App extends Component<Props> {
	state = {
		button: false,
		ipad: '0',
		mac: '0',
		atv: '0',
		vga: '0',
		ipadTotal: '0',
		macTotal: '0',
		atvTotal: '0',
		vgaTotal: '0',
		Total: '0'
	};
	set = (event) => {
		//alert(event);
		if (event === 'ipad+') {
			this.setState({ ipad: parseInt(this.state.ipad) + 1 });
		} else if (event === 'ipad-') {
			if (this.state.ipad <= 0) {
				this.setState({ ipad: '0' });
			} else {
				this.setState({ ipad: parseInt(this.state.ipad) - 1 });
			}
		} else if (event === 'mbp+') {
			this.setState({ mac: parseInt(this.state.mac) + 1 });
		} else if (event === 'mbp-') {
			if (this.state.mac <= 0) {
				this.setState({ mac: '0' });
			} else {
				this.setState({ mac: parseInt(this.state.mac) - 1 });
			}
		} else if (event === 'atv+') {
			this.setState({ atv: parseInt(this.state.atv) + 1 });
		} else if (event === 'atv-') {
			if (this.state.atv <= 0) {
				this.setState({ atv: '0' });
			} else {
				this.setState({ atv: parseInt(this.state.atv) - 1 });
			}
		} else if (event === 'vga+') {
			this.setState({ vga: parseInt(this.state.vga) + 1 });
		} else if (event === 'vga-') {
			if (this.state.vga <= 0) {
				this.setState({ vga: '0' });
			} else {
				this.setState({ vga: parseInt(this.state.vga) - 1 });
			}
		}
		//event.preventDefault();
	};
	total = () => {
		const { ipad, mac, atv, vga } = this.state;

		if (ipad > 4) {
			offeripad = ipad - 4;
			//alert(offeripad);
			offeripad = offeripad * 499.99;
			ipadtotal = 4 * 599.99;
			ipadtotal = ipadtotal + offeripad;
			this.setState({ ipadTotal: ipadtotal });
		} else if (ipad <= 4) {
			ipadtotal = ipad * 599.99;
			this.setState({ ipadTotal: ipadtotal });
		}
		if (mac >= 0) {
			mactotal = mac * 1399.99;
			this.setState({ macTotal: mactotal });
		}
		if ((mac >= 0 && vga >= mac) || mac >= vga) {
			vgatotal = vga - mac;
			vgatotal = vgatotal * 30;
			if (vgatotal < 0) {
				vgatotal = 0;
			}
			this.setState({ vgaTotal: vgatotal });
			//alert(vgaTotal);
		}
		if (atv >= 0) {
			atvtotal = 0;
			s = atv / 3;
			s = atv - parseInt(s);
			atvtotal = s * 109.5;
			this.setState({ atvTotal: atvtotal });
			//alert(s);
		}

		Total = parseFloat(ipadtotal) + parseFloat(mactotal) + parseFloat(vgatotal) + parseFloat(atvtotal);
		this.setState({ Total: parseFloat(Total).toFixed(3) });
		this.setState({ Button: true });
	};
	reset = () => {
		this.setState({ ipad: '0' });
		this.setState({ mac: '0' });
		this.setState({ atv: '0' });
		this.setState({ vga: '0' });
		this.setState({ ipadTotal: '0' });
		this.setState({ macTotal: '0' });
		this.setState({ atvTotal: '0' });
		this.setState({ vgaTotal: '0' });
		this.setState({ Total: '0' });
	};
	render() {
		return (
			<View>
				<ScrollView>
					<View>
						<Text style={{ marginLeft: 100, fontSize: 27, fontFamily: 'Arial' }}>Make your List</Text>
						<View
							style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch', backgroundColor: 'skyblue' }}
						>
							<View style={{ flex: 1, alignSelf: 'stretch' }}>
								<Text style={styles.head}>code</Text>
								<Text style={styles.text}>ipad</Text>
								<Text style={styles.text}>Mbp</Text>
								<Text style={styles.text}>a TV</Text>
								<Text style={styles.text}>VGA</Text>
							</View>
							<View style={{ flex: 1, alignSelf: 'stretch' }}>
								<Text style={styles.head}>Name</Text>
								<Text style={styles.text}>Super ipad</Text>
								<Text style={styles.text}>mac book pro</Text>
								<Text style={styles.text}>apple TV</Text>
								<Text style={styles.text}>VGA cable</Text>
							</View>
							<View style={{ flex: 1, alignSelf: 'stretch' }}>
								<Text style={styles.head}>Price</Text>
								<Text style={styles.text}>$49.99</Text>
								<Text style={styles.text}>$1399.99</Text>
								<Text style={styles.text}>$109.50</Text>
								<Text style={styles.text}>$30.00</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							marginTop: 10,
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<Text style={{ fontSize: 25 }}>Count your cart things</Text>
						<View style={styles.select}>
							<Text style={styles.selectText}>ipad</Text>
							<Button
								onPress={() => this.set('ipad+')}
								title="+"
								color="green"
								style={{ borderRadius: 50, marginLeft: 10, justifyContent: 'space-between' }}
							/>
							<Button
								onPress={() => this.set('ipad-')}
								title="-"
								color="blue"
								backgroundColor="black"
								style={{ color: 'black', backgroundColor: 'yellow', borderRadius: 1000 }}
							/>
							<Text style={styles.cartdata}>{this.state.ipad}</Text>
						</View>
						<View style={styles.select}>
							<Text style={styles.selectText}>mbp</Text>
							<Button
								onPress={() => this.set('mbp+')}
								title="+"
								color="green"
								backgroundColor="green"
								style={{ color: 'white', backgroundColor: 'green', borderRadius: 50 }}
							/>
							<Button
								onPress={() => this.set('mbp-')}
								title="-"
								color="blue"
								backgroundColor="black"
								style={{
									color: 'black',
									backgroundColor: 'yellow',
									borderRadius: 1000,
									marginLeft: 10
								}}
							/>
							<Text style={styles.cartdata}>{this.state.mac}</Text>
						</View>
						<View style={styles.select}>
							<Text style={styles.selectText}>a TV</Text>
							<Button
								onPress={() => this.set('atv+')}
								title="+"
								color="green"
								backgroundColor="green"
								style={{ color: 'white', backgroundColor: 'green', borderRadius: 50 }}
							/>
							<Button
								onPress={() => this.set('atv-')}
								title="-"
								color="blue"
								backgroundColor="black"
								style={{ color: 'black', backgroundColor: 'yellow', borderRadius: 50, marginLeft: 10 }}
							/>
							<Text style={styles.cartdata}>{this.state.atv}</Text>
						</View>
						<View style={styles.select}>
							<Text style={styles.selectText}>VGA</Text>
							<Button
								onPress={() => this.set('vga+')}
								title="+"
								color="green"
								backgroundColor="green"
								style={{ color: 'white', backgroundColor: 'green', borderRadius: 50 }}
							/>
							<Button
								onPress={() => this.set('vga-')}
								title="-"
								color="blue"
								backgroundColor="black"
								style={{
									color: 'black',
									backgroundColor: 'yellow',
									borderRadius: 1000,
									marginLeft: 10
								}}
							/>
							<Text style={{ fontSize: 25, marginLeft: 20 }}>{this.state.vga}</Text>
						</View>
						<View
							style={{
								width: 150,
								marginLeft: 120,
								marginTop: 20,
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between'
							}}
						>
							<Button title="proceed" style={{ marginLeft: 120 }} onPress={this.total} />
							<Button title="Reset" style={{ marginLeft: 10 }} onPress={this.reset} />
						</View>
					</View>
					<View style={{ flex: 1, marginTop: 20 }}>
						<Text style={{ fontSize: 30 }}>Cart</Text>
						<View style={{ marginBottom: 20 }}>
							<Text style={{ fontSize: 25, alignItems: 'center', marginLeft: 90 }}>
								ipad $<Text> {this.state.Button ? this.state.ipadTotal : '0'}</Text>
							</Text>
							<Text style={{ fontSize: 25, alignItems: 'center', marginLeft: 90 }}>
								mbp $<Text> {this.state.Button ? this.state.macTotal : '0'}</Text>
							</Text>
							<Text style={{ fontSize: 25, alignItems: 'center', marginLeft: 90 }}>
								a TV $<Text> {this.state.Button ? this.state.atvTotal : '0'}</Text>
							</Text>
							<Text style={{ fontSize: 25, alignItems: 'center', marginLeft: 90 }}>
								VGA $<Text> {this.state.Button ? this.state.vgaTotal : '0'}</Text>
							</Text>
							<Text
								style={{
									fontSize: 25,
									alignItems: 'center',
									marginLeft: 80,
									backgroundColor: 'teal',
									marginRight: 100,
									color: 'white',
									padding: 5,
									borderRadius: 10
								}}
							>
								Total $<Text> {this.state.Button ? this.state.Total : '0'}</Text>
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
