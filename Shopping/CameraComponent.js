import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export class CameraComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            paramState: props.navigation.state.params.state
        };
    }
    
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        let returnScreen = this.props.navigation.state.params.returnScreen;
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
        return <View />;
        } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
        } else {
        return (
            <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    }}
                    onPress={() => {
                    this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                    }}>
                    <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flip{' '}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                    onPress={async () => {
                        if (this.camera) {
                        let photo = await this.camera.takePictureAsync();
                        this.props.navigation.navigate(returnScreen, {state: this.state.paramState, photo: photo});
                        }
                    }}>
                    <Text
                    style={{ width: 40, fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Take Photo{' '}
                    </Text>
                </TouchableOpacity>
                </View>
            </Camera>
            </View>
        );
      }
    }
}

AppRegistry.registerComponent('CameraComponent', () => CameraComponent);