import React, { PropTypes, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import { debounce } from "lodash/fp";

import styles from "./app.css";

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    appClassNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  // componentWillMount() {
  //   const loginInfo = JSON.parse(window.localStorage.getItem("token"));
  //   if (loginInfo) {
  //     if (!isV2(loginInfo)) {
  //       this.props.logout();
  //     } else {
  //       this.props.loginSuccess(loginInfo.token, loginInfo.expiryTime, loginInfo.email);
  //     }
  //   }
  // }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
// <div className={classnames(styles.app, this.props.appClassNames)}>
//   {this.props.showExpiredSession ? <ExpiredSession /> : null}
//   <Header />
//   <div
//     ref={c => { this.content = c; }}
//     className={styles.content}
//     onScroll={debounce(300, this.onContentScroll)}
//   >
//     <div className={styles.contentInner}>
//       {this.props.children}
//     </div>
//   </div>
//   <Alert
//     contentTemplate={MyCustomContentTemplate}
//     position="top"
//     html
//     stack
//     effect="scale"
//   />
// </div>


// const mapStateToProps = (state) => ({
//   appClassNames: state.appStylesReducer.classNames,
// });
// const mapDispatchToProps = (dispatch) => ({
// });
export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export {
  styles,
};
