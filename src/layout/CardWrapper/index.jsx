import './index.css'
import React from 'react'
import Card from '../Card'
import TabDemo from '../../components/tab/TabDemo'
// import RatioDemo from '../../components/Ratio'
import ToggleTest from '../../components/RenderProps/ToggleTest'

class CardWrapper extends React.Component {

  render() {
    return (
      <div className="card-wrapper">
        {/* <RatioDemo /> */}
        <Card><TabDemo /></Card>
        <Card><ToggleTest /></Card>
        <Card><div>Card 1.</div></Card>
        <Card><div>Card 1.</div></Card>
        <Card><div>Card 1.</div></Card>
        <Card><div>Card 1.</div></Card>
        <Card><div>Card 1.</div></Card>
        <Card><div>Card 1.</div></Card>
        <Card><div>Card 1.</div></Card>
      </div>
    )
  }
}

export default CardWrapper;