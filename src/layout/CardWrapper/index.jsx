import './index.css'
import React from 'react'
import Card from '../Card'
import TabDemo from '../../components/tab/TabDemo'

class CardWrapper extends React.Component {

  render() {
    return (
      <div className="card-wrapper">
        <Card><TabDemo /></Card>
        <Card><div>Card 1.</div></Card>
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