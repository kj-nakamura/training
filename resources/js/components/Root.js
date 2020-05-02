import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Event from "./Event";
import Category from "./Category";

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            events: []
        };
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        function getCategories() {
            return axios.get("/api/categories");
        }
        function getEvent() {
            return axios.get("/api/events/1");
        }

        Promise.all([getCategories(), getEvent()])
            .then(([response1, response2]) => {
                console.log(response2);
                this.setState({ categories: response1.data });
                this.setState({ events: response2.data.events });
            })
            .catch(() => {
                console.log("未取得");
            });
    }

    //カテゴリが変更されたら
    changeCategory() {
        switch (event.target.name) {
            case "category":
                axios
                    .get("/api/events/" + event.target.value)
                    .then(response => {
                        this.setState({
                            events: response.data.events
                        });
                    })
                    .catch(() => {
                        console.log("未取得");
                    });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div class="container">
                <h3 class="mt-5">Todo 管理システム</h3>
                Hello
                {/* <Category categories={this.state.categories} changeCategory={this.changeCategory} />
              <Event events={this.state.events} /> */}
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById("root"));
