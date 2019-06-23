//ストアを生成して、読み込み
import { createStore} from 'redux';

//ステートに保存するためのデータ配列
const initDate = {
    data: [{message:'sample Dateです。',created:new Date()}],
    message:'please type message:',
    mode: 'default',
    fdata:[]
};


// メインのレデューサー　ここから各レデューサーにスイッチしてストアを変更する
export function memoReducer(state = initDate,action){
    switch (action.type){

        case 'ADD':
            return addReduce(state,action);
            
        case 'DELETE':
            return deleteReduce(state,action);
        case 'FIND':
            return findReduce(state,action);
        
        default:
            return state;
            
    }
}


// 追加用レデューサー
function addReduce(state,action){
    let d = new Date();
    let f = d.getHours() + ':' + d.getMinutes();
    // 追加するメモのデータ
    let data = {
        message:action.message,
        created:f
    };
    // データをもらって再構成
    let newdata = state.data.slice();
    // 配列に頭から追加
    newdata.unshift(data);

    //完成した追加データ
    return{
        data:newdata,
        message:'追加しました。',
        mode:'default',
        fdata:[]
    };
}

  

// 検索用レデューサー
function findReduce(state, action){
    let f = action.find; //検索キーワードのデータ
    let fdata = []; //検索結果を入れる配列

    //ヒットしたデータを並べてる
    state.data.forEach((value)=>{
        if(value.message.indexOf(f) >= 0){
            fdata.push(value);
        }
    });
    //結果をストアに返す
    return{
        data:state.data,
        message: '「'+ f + '」の検索結果',
        mode:'find',
        fdata :fdata
    };
}


//削除用のレデューサー
function deleteReduce(state, action){
    let newdata = state.data.slice();
    newdata.splice(action,1)

    return{
        data:newdata,
        message:'「'+ action.index + '」を削除しました。',
        mode :'delete',
        fdata:[]
    }
}


/////////////////////////////////
//アクションクリエーター（入力されるタイプをデーターとしてストアに渡す。）
/////////////////////////////////

//メモ追加用アクション
export function addMemo(text){
    return{
        type:'ADD', //タイプを指定
        message:text //追加されたメモの内容
    }
}

//メモ削除用アクション
export function deleteMemo(num){
    return{
        type:'DELETE',
        index:num   //削除されるメモの番号を指定している
    }
}

//メモ検索用アクション
export function findMemo(text){
    return{
        type:'FIND',
        find:text//検索されるメモの番号を指定している
    }
}


export default createStore (memoReducer);