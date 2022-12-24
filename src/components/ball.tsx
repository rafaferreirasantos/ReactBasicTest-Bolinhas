import React, { Component } from 'react'
import { pointProps } from "../App"

type BallProps<T, R> = Omit<T, keyof R> & { index: number };

export default class Ball extends Component<BallProps<pointProps, {}>> {
  render() {
    return (
      <div
        className="point"
        key={this.props.index}
        style={{
          left: this.props.x,
          top: this.props.y,
          position: 'absolute'
        }}></div>
    )
  }
}
