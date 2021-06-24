// joo-ju

import "../../style.css";
import React, { Component, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Content from "../Content";
import "../Content.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";


// axios.defaults.withCredentials = true;
// const headers = { withCredentials: true };

const CommentWrite = ({ children, pid, comContent }) => {
    // function CommentWrite (props) {
// class CommentWrite extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props.data)
    //     this.state = {
    //         pid: ''
    //     };
    // }
    //      constructor(props) {
    //          super(props)
    //          console.log(props);
    //         //  const { pid } = props.pid
    //         //  console.log("pid : ", pid)
    // // console.log("props: ", children)
    //     this.state = {
    //       post_id: '',
    //       content: '',
    //     }
    //     };
    

    // const [commentData, setCommentData] = useState({});
        
    //   changeHandler = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };
    //   submitHandler = (e) => {
    //     const content = this.comContent.value;
    //     // const content = this.postContent.value;
    //     // e.preventDefault();
    //     // console.log(title);
    //     console.log(content);
    //     // console.log(this.state)
    // };
    const comWrite = () => {
          
        // const { pid } = this.state
        // const title = this.postTitle.value;
        // const content = this.comContent.value;
        const content = comContent.value;
// 
        // if (content === "" || content === undefined) {
        //     alert("입력해주세요.");
        //     this.comContent.focus();
        //     return;
        // }
        // console.log("this.props : ", this.state)

        const send_param = {
            //   title: this.postTitle.value,
            post_id: children,
            writer: "joo-ju",
            // content: this.comContent.value,
            content: comContent.value
        };
         
        console.log("send_param", send_param)
            console.log("children", children);
        // console.log("pid" , this.postId.value);
        axios
            .post("/api/comments", send_param)
            .then((response) => {
                console.log(response);
                console.log("success")
            })
            .catch((error) => {
                console.log(error);
            });

    };

    // render() {
        // render = () => (
        // const { pid, children } = this.props;
        return (
            <Content>
          
                <div className="col-12 m-auto bg-white">
                    <div className="col-12 m-auto ,pt-3">
                        <Form
                            class="user"
                            id="WritePostPage"
                            onSubmit={comWrite}
                        >
                            <div class="form-group mt-3">
                                <div class="float-right">
                                    <div
                                        class="comment-write-button"
                                        variant="primary"
                                        onClick={comWrite}
                                        type='submit'
                                        // ref={(ref) => (postId = ref)}
    // value={children}
                                        block
                                    >
                                        저장
                                    </div>
                                </div>
                            </div>
                            <div class="form-group comment-scope ">
                                <div>
                                    <textarea
                                        type="textarea"
                                        class="form-control comment-input"
                                        placeholder="comments…"
                                        type="submit"
                                        // ref={(ref) => (this.comContent = ref)}
                                        ref={(ref) => (comContent = ref)}
                                        // value={this.comContent}
                                        value={comContent}

                                        //   value = "Submit"
                                    />
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </Content>
        );
    };
// }
export default CommentWrite