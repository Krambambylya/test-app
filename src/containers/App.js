import React, { Component } from 'react';
import ListItem from '../components/ListItem/ListItem';
import AddForm from '../components/AddForm/AddForm';
import { connect } from 'react-redux';
import { SetList } from '../actions/SetList';
import '../styles/App.css';

const LIST = [
  {id: 1, text: '1'},
  {id: 2, text: '2'},
  {id: 3, text: '3'},
  {id: 4, text: '4'},
]



class App extends Component {
    constructor(props){
      super(props)
    }
    componentDidMount(){
      this.props.handleSetList(LIST);
    }
    render() {
      let {list} = this.props;
      return (
          <div className='app-container'>
              <h1>My React App!!!</h1>
              <AddForm />
              {list.length > 0 ? (
                <ul>
                  {list.map((item)=>{
                    return (
                      <ListItem key={item.id} item={item} />
                    )
                  })}
                </ul>
              ): null}
          </div>
      );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSetList: (list) => dispatch(SetList(list))
  }
}

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
