import React from "react";
import "./Cookie.css";

class Cookie extends React.Component {
  render() {
    return (
      <div>
        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              На нашем сайте мы используем cookie для сбора информации
              технического характера.
              <br />В частности, для персонифицированной работы сайта мы
              обрабатываем IP-адрес региона вашего местоположения.&nbsp;
              <button className="btn btn-primary btn-sm" href="#">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cookie;
