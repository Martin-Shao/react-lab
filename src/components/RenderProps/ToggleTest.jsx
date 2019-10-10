import React from 'react';
// import Toggle from '../Toggle';
import { Toggle } from '../../render-props';

function Button(props) {
  return (
    <React.Fragment>
      <button onClick={props.onClick}>{props.children}</button>
    </React.Fragment>
  )
}

function Modal(props) {

  const handleOk = (e) => {
    console.info('handleOk---', e);
    props.onOk();
  }

  const handleCancel = (e) => {
    console.info('handleCancel---', e);
    props.onCancel();
  }

  return (
    <div>
      <p>{props.title}</p>
      <p>是否显示：{`${props.visible}`}</p>
      <div>
        {props.children}
      </div>
      <button onClick={handleOk}>Ok</button>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={props.off}>on</button>
      <button onClick={props.on}>off</button>
    </div>
  )
}

class ToggleTest extends React.Component {

  onChangeHandle = (value) => {
    console.info('onChangeHandle---', value);
  }

  render() {
    return (
      <Toggle initial={false} onChange={this.onChangeHandle}>
        {({ on, toggle, setOff, setOn }) => (
          <>
          <Button type="primary" onClick={toggle}>
            toggle
          </Button>
          <Modal
            title="Basic Modal"
            visible={on}
            onOk={toggle}
            onCancel={toggle}
            on={setOn}
            off={setOff}
          >
            <p>Some contents...</p>
          </Modal>
          </>
        )}
      </Toggle>
    );
  }
}

export default ToggleTest;
