import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Info } from './styles';

export default class Button extends Component {
  render() {
    const { children, onPress, style, rounded } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          Info.main,
          rounded ? Info.rounded : null,
          style,
        ]}
        onPress={onPress}>
        <Text style={Info.label}>{children}</Text>
      </TouchableOpacity>
    );
  }
}