import React, { Component}  from 'react';
import { connect }from 'react-redux';
import Item from './Item';

class Memo extends Component {
    render (){
        let data;
        let n = 0;
        //Itemを繰り返し表示
        switch(this.props.mode){
            case 'dafalut':
                data = this.props.data.map((value)=>(
                    <Item key={value.message} value={value} index={n++} />
                ));
            break;
            case 'find': //検索のモードの時だけ、mapするデータが違う
                    data = this.props.fdata.map((value)=>(
                        <Item key={value.message} value={value} index={n++} />
                    ));
            break;

            case 'delete':
                data = this.props.data.map((value)=>(
                    <Item key={value.message} value={value} index={n++}/>
                ));
            break;
            
            default:
            data = this.props.data.map((value)=>(
                <Item key={value.message} value={value} index={n++}/>
            ));
        }

        return(
            <table>
                <tbody>
                    {data}
                </tbody>
            </table>
        );
    }
}
//コンポーネントをコネクトして、さらにエクスポートする
export default connect((state)=>state)(Memo);