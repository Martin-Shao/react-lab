import './tab.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { Component } from 'react';
import TabNav from './TabNav';
import TabContent from './TabContent';

class Tabs extends Component {
  static propTypes = {
    className: PropTypes.string,
    classPrefix: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    defaultActiveIndex: PropTypes.number,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    classPrefix: 'tabs',
    onChange: () => { },
  };


  static getDerivedStateFromProps(nextProps, prevState) {
    const { activeIndex } = nextProps;
    if ('activeIndex' in nextProps) {
      if(nextProps.activeIndex === prevState.activeIndex) {
        return null
      } else {
        return { activeIndex };
      }
    } else {
      return null;
    }
  }

  constructor(props) {
    super(props);

    const currProps = this.props;

    this.handleTabClick = this.handleTabClick.bind(this);

    let activeIndex;
    if ('activeIndex' in currProps) {
      activeIndex = currProps.activeIndex;
    } else if ('defaultActiveIndex' in currProps) {
      activeIndex = currProps.defaultActiveIndex;
    }

    this.state = {
      activeIndex,
      prevIndex: activeIndex,
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   console.info('Tabs---componentWillReceiveProps---nextProps', nextProps);
  //   if ('activeIndex' in nextProps) {
  //     this.setState({
  //       activeIndex: nextProps.activeIndex,
  //     });
  //   }
  // }

  handleTabClick(activeIndex) {
    const prevIndex = this.state.activeIndex;

    if (this.state.activeIndex !== activeIndex &&
      'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex,
        prevIndex,
      });

      this.props.onChange({ activeIndex, prevIndex });
    }
  }

  renderTabNav() {
    const { classPrefix, children } = this.props;
    return (
      <TabNav
        key="tabBar"
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        activeIndex={this.state.activeIndex}
        panels={children}
      />
    );
  }

  renderTabContent() {
    const { classPrefix, children } = this.props;

    return (
      <TabContent
        key="tabcontent"
        classPrefix={classPrefix}
        activeIndex={this.state.activeIndex}
        panels={children}
      />
    );
  }

  render() {
    const { className } = this.props;
    const cx = classnames(className, 'ui-tabs');

    return (
      <div className={cx}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    );
  }
}

export default Tabs;
