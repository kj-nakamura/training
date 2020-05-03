import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-20%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay : {
    backgroundColor:'white'
  }
};

Modal.setAppElement('#root')

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      modalIsOpen: false,
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  onLogin(event) {
    event.preventDefault();
    axios.post("/api/login", {
      email: this.state.email,
      password: this.state.password
    })
      .then((res) => {
        const token = res.data.access_token;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        console.log(res);
        alert('ログイン成功！');
      })
      .catch(() => {
        alert('ログイン失敗！');
        console.log("未取得");
      });
  }

  logout() {
    axios.post("/api/logout")
      .then((res) => {
        alert('ログアウト成功！');
      })
      .catch(() => {
        alert('ログアウト失敗！');
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>ログイン</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <form style={{ textAlign: 'center' }} noValidate autoComplete="off">
          <div>
            <label>メールアドレス</label>
            <input type="email" value={this.state.email} onChange={this.emailChange} />
          </div>
          <div>
            <label>パスワード</label>
            <input type="password" value={this.state.password} onChange={this.passwordChange} />
          </div>
          {/* <div style={{ color: '#fa755a' }}>{this.renderErrorMessage()}</div> */}
          {/* {this.props.loading ? (
            <CircularProgress style={{ marginTop: 5 }} />
          ) : ( */}
          <button onClick={this.onLogin}>登録</button>
          {/* )} */}
        </form>
        </Modal>
        <button onClick={this.logout}>ログアウト</button>
      </div>
    );
  }
}

export default Signin;