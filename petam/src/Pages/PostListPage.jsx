// joo-ju

import "../style.css";
import React, { Component } from "react";
import Content from '../Components/Content'
import '../Components/Content.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Pagination from "../common/Pagination";

export default class PostListPage extends Component {
  render = () => (
    <Content>
      <h2 className='name'>Reviews</h2>
      
      <div className="col-12 m-auto bg-white">
        
      
        {/* 글 목록 */}
        {/* <hr className="col-10"></hr> */}
        {/* vh-70은 나중에 페이징하면서 사용할 듯 */}
        <div className="col-12 m-auto pt-3">
          <div className="table table-responsive">
            <table
              class="table  text-xs text-center"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <colgroup>
                <col width="3%"></col>
                <col width="30%"></col>
                <col width="3%"></col>
                <col width="1%"></col>
                <col width="1%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회</th>
                </tr>
              </thead>
              {/* <tfoot>
              <tr>
                <th></th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회</th>
              </tr>
            </tfoot> */}
              <tbody>
                
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-left">Test ------</td>
                  <td>주희</td>
                  <td>2021.04.14</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Content>
  );
}
