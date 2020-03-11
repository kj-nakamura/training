import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function TrainingCategory(props) {
    return props.categories.map(category => {
        return (
            <option key={category.id} value={category.id}>{category.name}</option>
        );
    });
}

function TrainingEvent(props) {
    return props.events.map(event => {
        return (
            <option key={event.id} value={event.id}>{event.name}</option>
        )
    })
}

export default class Example extends Component {

    constructor() {
        super();
        this.state = {
            categories: [],
            category: '',
            events: [],
        };
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        function getCategories() {
            return axios.get('/api/categories');
        }
        function getEvents() {
            return axios.get('/api/events/1');
        }

        Promise.all([getCategories(), getEvents()])
            .then(([response1, response2]) => {
                this.setState({categories: response1.data});
                this.setState({events: response2.data});
            })
            .catch(() => {
                console.log('未取得');
            });
    }

    //カテゴリが変更されたら（都度）
    changeCategory(){
        switch(event.target.name){
            case 'category':
                axios.get('/api/events/' + event.target.value)
                    .then((response) => {
                        console.log(response);
                        this.setState({events: response.data});
                    })
                    .catch(() => {
                        console.log('未取得');
                    });
                break;
            default:
                break;
        }
    }

    changeEvent(){
        this.setState({event: event.target.value});
    }

    //登録ボタンがクリックされたら
    addPost(){
        //空だと弾く
        if(this.state.event == ''){
            return;
        }
        //入力値を投げる
        axios
            .post('/api/events/add', {
                event: this.state.event,
            })
            .then((response) => {
                //戻り値をpostsにセット
                this.setState({
                    event: ''
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                {/*カテゴリ*/}
                <select className="form-control col-md-4" name="category" onChange={this.changeCategory}>
                    <TrainingCategory categories={this.state.categories}/>
                </select>
                {/* イベント */}
                <select onChange={this.changeEvent}>
                    <TrainingEvent events={this.state.events} />
                </select>
                <button className="btn btn-primary" onClick={this.addPost}>登録</button>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
