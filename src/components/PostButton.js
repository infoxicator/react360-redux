import * as React from 'react';
import { Image, Text, View, StyleSheet, VrButton } from 'react-360';
import { connect } from 'react-redux';
import { setCurrent } from '../actions';

class PostButton extends React.Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <VrButton
        style={styles.postButton}
        onEnter={() => this.setState({ hover: true })}
        onExit={() => this.setState({ hover: false })}
        onClick={() => this.props.setCurrent(this.props.index)}
      >
        <Image style={styles.postButtonPreview} source={{ uri: this.props.preview }} />
        <View style={[styles.postButtonInfo, this.state.hover ? styles.postButtonInfoHover : null]}>
          <View style={styles.postButtonLabel}>
            <Text style={styles.postButtonName}>{this.props.name}</Text>
          </View>
          <View style={styles.postButtonLabel}>
            <Text style={styles.postButtonAuthor}>{this.props.author}</Text>
          </View>
        </View>
      </VrButton>
    );
  }
}

const styles = StyleSheet.create({
    postButton: {
      height: 120,
      backgroundColor: '#000000',
      overflow: 'hidden',
    },
    postButtonInfo: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      flexDirection: 'column',
    },
    postButtonPreview: {
      width: '100%',
      height: 225,
    },
    postButtonInfoHover: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    postButtonLabel: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      paddingHorizontal: 10,
      paddingVertical: 2,
      alignSelf: 'flex-start',
    },
    postButtonName: {
      fontSize: 24,
    },
    postButtonAuthor: {
      fontSize: 16,
    }
  });

  export default connect(null, { setCurrent })(PostButton);
