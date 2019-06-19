import React, { Component}  from 'react';
import { connect }from 'react-redux';
import {findMemo} from './Store';


class FindForm extends Component{
    input = {
        fontSize:"14pt",
        color:"#006",
        padding:"0px",
      }
      btn = {
        fontSize:"12pt",
        color:"#006",
        padding:"1px 10px",
      }
    
      constructor(props){
          super(props);
        //ステートの初期値
          this.state = {
              find : ''
            }
            
            this.doChange = this.doChange.bind(this);
            this.doAction = this.doAction.bind(this);
        }

        //入力したデータをステートに保存する
        doChange(e){
            this.setState({
                find: e.target.value
            });
        }



        doAction(e){
            e.preventDefault();
            let action = findMemo(this.state.find);//ステートに保存したデータを取り出し、
            this.props.dispatch(action);//dispatchしてストアに保存する
            this.setState({
                find:0//ステートを空に戻す
            });
        }
        //フォームの表示
        render(){
            
            return(
                    <form onSubmit={this.doAction}>
                        <input 
                            type="text"
                            size="10" 
                            onChange={this.doChange}
                            style={this.input}
                            value={this.state.message}
                        />
                        <input
                            type="submit"
                            style={this.btn}
                            value="検索"
                        />
                    </form>
            );
        }
}

export default connect((state)=>state)(FindForm)