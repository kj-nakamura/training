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

export default class Category extends Component {

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
        return axios.get('/api/categories')
            .then((response) => {
                this.setState({categories: response.data});
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

    render() {
        return (
            <div>
                {/*カテゴリ*/}
                <select className="form-control col-md-4" name="category" onChange={this.changeCategory}>
                    <TrainingCategory categories={this.state.categories}/>
                </select>
            </div>
        );
    }
}

if (document.getElementById('category')) {
    ReactDOM.render(<Category />, document.getElementById('category'));
}
