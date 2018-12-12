import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './landing.scss'
export default class LandingBody extends React.Component {
  render() {
    return (
    (<QueueAnim className="landAnimate">
      <div key="demo1" className="landing-card">First to come in</div>
      <div key="demo2" className="landing-card">Second come in</div>
      <div key="demo3" className="landing-card">Third coming in</div>
      <div key="demo4" className="landing-card">Fourth coming in</div>
    </QueueAnim>)
    )
  }
}
