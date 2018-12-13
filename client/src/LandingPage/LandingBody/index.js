import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './index.scss'

export default class LandingBody extends React.Component {
  render() {
    return (
    (<QueueAnim className="landAnimate">
      <div key="demo1" className="landing-card card-1">First Course to come in</div>
      <div key="demo2" className="landing-card card-2">Second Course come in</div>
      <div key="demo3" className="landing-card card-3">Third Course coming in</div>
      <div key="demo4" className="landing-card card-4">Fourth Course coming in</div>
    </QueueAnim>)
    )
  }
}
