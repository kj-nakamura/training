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

function TrainingCategory(props) {
    return props.categories.map(category => {
        return (
            <option key={category.id} value={category.id}>{category.name}</option>
        );
    });
}

export default class Example extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            post: '',
            categories: [],
            category: '',
        };
        this.inputChange = this.inputChange.bind(this);
        this.addPost = this.addPost.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        function getPosts() {
            return axios.get('/api/posts');
        }
        function getCategories() {
            return axios.get('/api/categories');
        }
        Promise.all([getPosts(), getCategories()])
            .then(([response1, response2]) => {
                this.setState({posts: response1.data});
                this.setState({categories: response2.data});
            })
            .catch(() => {
                console.log('未取得');
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

    //カテゴリが変更されたら（都度）
    changeCategory(event){
        switch(event.target.name){
            case 'category':
                this.setState({
                    category: event.target.value
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="container">
                {/*カテゴリ*/}
                <select className="form-control col-md-4" name="category" onChange={this.changeCategory}>
                    <TrainingCategory categories={this.state.categories}/>
                </select>
                {/* イベント */}
                <select>
                    <option value={this.state.category}>{this.state.category}</option>
                </select>

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
