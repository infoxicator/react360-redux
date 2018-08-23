import _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-360';
import { postsFetch } from '../actions';
import PostButton from './PostButton';

class TopPosts extends React.Component {
  componentWillMount() {
    this.props.postsFetch();
}

  render() {
    if (!this.props.posts) {
      return (
        <View style={styles.wrapper}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.wrapper}>
        {this.props.posts.map((post, i) => (
          <PostButton
            key={post.id}
            index={i}
            name={post.name}
            author={post.author}
            preview={post.preview}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
});

const mapStateToProps = state => {

  const posts = _.map(state.posts, (val, id) => {
    return { ...val, id };
  });

  return { posts };
};

export default connect(mapStateToProps, { postsFetch })(TopPosts);
