import React from "react";

class HistorySidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      budgets: [{ name: "Jan" }, { name: "Feb" }, { name: "Mar" }],
      itemsToShow: 0,
      expanded: false,
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 0
      ? this.setState({
          itemsToShow: this.state.budgets.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 0, expanded: false });
  }

  render() {
    return (
      <div className="sidebar-container">
        <p className="btn btn-primary" onClick={this.showMore}>
          2021
        </p>
        <ul className="sidebar-list">
          {this.state.budgets
            .slice(0, this.state.itemsToShow)
            .map((budget, i) => (
              <li key={i}>{budget.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default HistorySidebar;
