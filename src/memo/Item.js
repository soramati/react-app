import React, { Component}  from 'react';
import { connect }from 'react-redux';

class Item extends Component {
    //CSS
    th = {
        fontSize:"14pt",
        backgroundColor:"blue",
        color:"white",
        padding:"5px 10px",
        width:"50px"
      }
      td = {
        fontSize:"14pt",
        backgroundColor:"white",
        color:"darkblue",
        padding:"5px 10px",
        border:"1px solid lightblue",
        minWidth:"300px"
      }
      date = {
        fontSize:"14pt",
        backgroundColor:"white",
        color:"darkblue",
        padding:"5px 10px",
        border:"1px solid lightblue",
        width:"80px"
      }

        render(){
            //Memoからpropsで得たデータを表示
            return(
                <tr>
                    <th style={this.th}>No.{this.props.index}</th>
                    <td style={this.td}>{this.props.value.message}</td>
                    <td style={this.data}>{this.props.value.created}</td>
                </tr>
            );
        }
}

// コネクトしたコンポーネントを、エクスポートしている
export default connect()(Item);