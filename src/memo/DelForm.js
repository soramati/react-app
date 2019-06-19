import React, { Component}  from 'react';
import { connect }from 'react-redux';
import {deleteMemo} from './Store';


class DelForm extends Component{
    input = {
        fontSize:"12pt",
        color:"#006",
        padding:"1px",
        margin:"5px 0px"
      }
      btn = {
        fontSize:"10pt",
        color:"#006",
        padding:"2px 10px"
      }

      constructor(props){
          super(props);
        //ステートの初期値
          this.state = {
              number : 0
            }
            
            this.doChange = this.doChange.bind(this);
            this.doAction = this.doAction.bind(this);
        }

        //入力したデータをステートに保存する
        doChange(e){
            this.setState({
                number: e.target.value
            });
        }



        doAction(e){
            e.preventDefault();
            let action = deleteMemo(this.state.number);//ステートに保存したデータを取り出し、
            this.props.dispatch(action);//dispatchしてストアに保存する
            this.setState({
                number:0//ステートを空に戻す
            });
        }
        //フォームの表示
        render(){
            let n = 0;
            let items = this.props.data.map((value)=>(
                <option 
                    key={n}
                    value={n++}
                    >
                    {value.message.substring(0,10)}
                </option> 
            ));
            return(
                <div>
                    <form onSubmit={this.doAction}>
                        <select 
                            onChange={this.doChange}
                            defaultValue="-1"
                            style={this.input}>
                                {items}
                        </select>
                        <input 
                            type="submit"
                            onChange={this.doChange}
                            style={this.btn}
                            value="削除"
                        />
                    </form>
                </div>
            );
        }
}

export default connect((state)=>state)(DelForm)