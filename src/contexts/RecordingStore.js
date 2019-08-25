import React, { Component } from 'react'

const RecordContext = React.createContext(); //* creamos el contexto
class RecordStore extends Component {
  state = {
    record: {
      name: '',
      comments: '',
      studentA: '', 
      studentB:  '',
    }
  }

  handleRecordChange = (record) => {
    this.setState({ record }); //* guardamos al usuario en el estado. 
  }

  render() {
    return (
      <RecordContext.Provider value={{ 
        record: this.state.record,
        onRecordChange: this.handleRecordChange,
      }}>
        {this.props.children}
      </RecordContext.Provider>
    );
  }
}

const withRecordConsumer = (WrappedComponent) => {
  return (props) => {
    return (
      <RecordContext.Consumer>
        {(consumerProps) => (<WrappedComponent {...consumerProps} {...props} />)}
      </RecordContext.Consumer>
    )
  }
}



export { RecordStore, RecordContext, withRecordConsumer }
