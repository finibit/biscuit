### Usage

#### Items

```jsx
const colors = [
  {
    title: 'Red',
    value: '#ff0000',
    selected: false,
  },
  {
    title: 'Green',
    value: '#00ff00',
    selected: false,
  },
  {
    title: 'Blue',
    value: '#0000ff',
    selected: false,
  },
]

class CustomMultiselect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: colors,
      isOpen: false,
    }

    this.onOpen = this.onOpen.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  onOpen() {
    this.setState({
      isOpen: true,
    })
  }

  onClose() {
    this.setState({
      isOpen: false,
    })
  }

  onSelect(event, item) {
    this.setState((prevState) => ({
      items: prevState.items.map((prevItem) => ({
        title: prevItem.title,
        value: prevItem.value,
        selected: prevItem.title === item.title ? !item.selected : prevItem.selected,
      }))
    }))
  }

  render() {
    return (
      <Multiselect
        items={this.state.items}
        isOpen={this.state.isOpen}
        onOpen={this.onOpen}
        onClose={this.onClose}
        onSelect={this.onSelect}
      />
    )
  }
}

<CustomMultiselect />
```
