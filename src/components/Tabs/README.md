### Usage

#### Items

```jsx
class CustomTabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 1,
    }

    this.onTabChange = this.onTabChange.bind(this)
  }

  onTabChange(event, index) {
    this.setState({
      activeIndex: index,
    })
  }

  render() {
    return (
      <Tabs activeIndex={this.state.activeIndex} onTabChange={this.onTabChange}>
        <Tabs.Item title="Tab 1" />
        <Tabs.Item title="Tab 2" />
        <Tabs.Item title="Tab 3" disabled />
        <Tabs.Item title="Tab 4" disabled hidden />
      </Tabs>
    )
  }
}

<CustomTabs />
```

