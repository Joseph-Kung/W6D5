import React from 'react';
import TabHeader from './tabHeader.jsx';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      index: 0
    };
    this.clickHeader = this.clickHeader.bind(this);
  }
  
  clickHeader(e) {
    this.setState({
      index: e.currentTarget.tabIndex
    });
  }
  
  render() {
    const article = (
      <div className="tabs">
          <ul className="tab-header-container">
            { 
              this.props.tabs.map((tabData, idx) => (
                <li className="tab-header" key={tabData.title} tabIndex={idx} onClick={this.clickHeader}>
                  <h1>{tabData.title}</h1>
                </li>
              ))
            }
          </ul>
        <article>{this.props.tabs[this.state.index].content}</article>
      </div >
    );
    
    return article;

  }
}

export default Tabs;