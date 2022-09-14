
import React, { Component } from 'react';
import mine1 from '../pics/images/mine1';
import mine2 from '../pics/images/mine2';
import mine3 from '../pics/images/mine3';
import mine4 from '../pics/images/mine4';
import mine5 from '../pics/images/mine5';
import mine6 from '../pics/images/mine6';

class Main extends Component {   


    state = {
        index: 0, 
        picList: [mine1,mine2,mine3,mine4,mine5,mine6]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}


export default Main;