import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//RenderRowsの機能実装
function RenderRows(props){
    //mapでループしている（for相当）
    return props.posts.map(post => {
        return (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td><button className="btn btn-secondary" onClick={() => props.deleteTask(post)}>完了</button></td>
            </tr>
        );
    });
}

export default class Example extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            post: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.addPost = this.addPost.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount() {
        axios.get('/api/posts')
            .then(response => {
                this.setState({posts: response.data});
            })
            .catch(() => {
                console.log(error);
            });
    }

    //入力がされたら（都度）
    inputChange(event){
        switch(event.target.name){
            case 'post':
                this.setState({
                    post: event.target.value
                });
                break;
            default:
                break;
        }
    }

    //登録ボタンがクリックされたら
    addPost(){
        //空だと弾く
        if(this.state.post == ''){
            return;
        }
        //入力値を投げる
        axios
            .post('/api/add', {
                name: this.state.post,
            })
            .then((response) => {
                //戻り値をpostsにセット
                this.setState({
                    posts: response.data,
                    post: ''
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    //完了ボタンがクリックされたら
    deleteTask(post){
        axios
            .post('/api/del', {
                id: post.id
            })
            .then((response) => {
                this.setState({
                    posts: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                {/* add from */}
                <div className="form-group mt-4">
                    <label htmlFor="post">新規Post</label>
                    <select className="form-control" name="type">
                        <option value="a">a</option>
                        <option value="b">b</option>
                    </select>
                    <input type="text" className="form-control" name="post" value={this.state.post} onChange={this.inputChange}/>
                </div>
                {/* table */}
                <button className="btn btn-primary" onClick={this.addPost}>登録</button>
                <table>
                    <tbody>
                        <RenderRows
                            posts={this.state.posts}
                            deleteTask={this.deleteTask}
                        />
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
