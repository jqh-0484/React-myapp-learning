// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';
// import { add } from './OtherComponent '
// import './index.css';

// // class Square extends React.Component {
// //     render() {
// //         return (
// //             <button
// //                 className="square"
// //                 onClick={() => this.props.onClick()}
// //             >
// //                 {this.props.value}
// //             </button>
// //         );
// //     }
// // }

// function Square(props) {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     )
// }

// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//         return null;
//     }
// }

// class Board extends React.Component {
//     renderSquare(i) {
//         return (
//             <Square
//                 value={this.props.squares[i]}
//                 onClick={() => { this.props.onClick(i) }}
//             />
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

// class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [{
//                 squares: Array(9).fill(null),
//             }],
//             xIsNext: true,
//             stepNumber: 0,
//         };
//     }

//     handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length - 1];
//         const squares = current.squares.slice();
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = this.state.xIsNext ? "X" : "O";
//         this.setState({
//             history: history.concat([
//                 {
//                     squares: squares
//                 }
//             ]),
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext
//         });
//     }

//     jumpTo(step) {
//         this.setState({
//             stepNumber: step,
//             xIsNext: (step % 2) === 0
//         })
//     }

//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = calculateWinner(current.squares);

//         const moves = history.map((step, move) => {
//             const desc = move ?
//                 'Go to move #' + move :
//                 'Go to game start';
//             return (
//                 <li key={move}>
//                     <button onClick={() => this.jumpTo(move)}>{desc}</button>
//                 </li>
//             );
//         });

//         let status;
//         if (winner) {
//             status = 'Winner: ' + winner;
//         } else {
//             status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//         }

//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board
//                         squares={current.squares}
//                         onClick={(i) => this.handleClick(i)}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

// //const name = 'jqh';
// //const element = <h1>Hello world,你的名字：{name}</h1>;

// function formatName(user) {
//     return user.firstName + '' + user.lastName;
// }

// const user = {
//     firstName: 'j',
//     lastName: 'qh',
//     src: '123'
// }

// const element = (
//     <h1>
//         hello,{formatName(user)}
//     </h1>
// )

// function getGreeting(user) {
//     if (user) {
//         return <h1>hello,{formatName(user)}</h1>
//     }
//     return <h1>hello,world</h1>
// }

// //可以通过使用双引号将属性值指定为字符串字面量
// const elementDataset = <div tabIndex="0">tabIndex:0</div>
// //可以使用大括号在属性值插入js表达式
// const elementFn = <img src={user.src}></img>
// const haveChildDom = (
//     <div>
//         <p>JSX标签里能够包含很多子元素</p>
//     </div>
// )

// //jsx防止注入攻击
// const title = '<script>return false</script>';
// const elementJSX = <h1><input type="text" value={title} /></h1>

// //Babel会把JSX转译React.createElement()函数调用
// const dom1 = (
//     <h1 className="greeting">
//         测试
//     </h1>
// )

// const dom2 = React.createElement(
//     'h1',
//     { className: 'greeting' },
//     'hello world'
// )

// // function tick() {
// //     const tickDom = (
// //         <div>
// //             <h1>计时器</h1>
// //             <h2>It is {new Date().toLocaleTimeString()}</h2>
// //         </div>
// //     )

// //实践中，React应用只会调用一次ReactDOM.render()
// //     ReactDOM.render(tickDom, document.getElementById('root'))
// // }

// // setInterval(tick, 1000)

// //定义组件最简单的方式就是编写js函数
// //函数组件 
// function Welcome(props) {
//     return <h1>hello,{props.name}</h1>
// }

// //class定义组件
// class HelloWorld extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}123</h1>;
//     }
// }

// //当用户自定义组件时，JSX所接收的属性以及组件转换成单个对象
// //传递给组件，这个对象称为props

// function App() {
//     return (
//         <div>
//             <Welcome name="小明" />
//             <Welcome name="小李" />
//             <Welcome name="小王" />
//         </div>
//     )
// }

// function Avatar(props) {
//     return (
//         <img className="Avatar"
//             src="121"
//             alt="1234"
//         />
//     )
// }

// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     )
// }

// //提取组件
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.user} />
//             <div className="Comment-date">
//                 {props.date}
//             </div>
//         </div>
//     )
// }


// const userInfo = {
//     name: 'jqh',
//     user: {
//         avatarUrl: 'avatarUrl?123'
//     }
// }

// //无论是函数声明还是通过class声明，都不能修改自身的props
// //纯函数，函数不会尝试更改入参
// function sum(a, b) {
//     return a + b
// }

// //非纯函数
// function withdraw(account, amout) {
//     account.total -= amout
// }

// //所有react组件都必须像纯函数一样保护它们的props不被修改

// // function Clock(props) {
// //     return (
// //         <div>
// //             <p>it is a clock</p>
// //             <p>now date {props.date.toLocaleTimeString()}</p>
// //         </div>
// //     )
// // }

// // function tick() {
// //     ReactDOM.render(
// //         <Clock date={new Date()} />,
// //         document.getElementById('root')
// //     )
// // }

// // setInterval(tick, 1000)

// class Clock extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             date: new Date()
//         }
//     }

//     //再见已经渲染到DOM中后运行
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         )
//     }

//     componentWillMount() {
//         clearInterval(this.timerID)
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <p>这是一个日期的定时器</p>
//                 <p>it is {this.state.date.toLocaleTimeString()}</p>
//             </div>
//         )
//     }
// }

// //setState() state:不要直接修改;s更新可能是异步的;更新会被合并
// // this.state.comment = 'hello';//×
// // this.setState({//√
// //     comment: 'heolo'
// // })
// // this.setState({//×
// //     counter: this.state.counter + this.props.increment
// // })
// // this.setState((state, props) => ({//√
// //     counter: state.counter + props.increment
// // }))

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isToggleOn: true,
//             curId: 0,
//         }

//         //为了在回调中使用`this`
//         //this.handleClick = this.handleClick.bind(this)
//     }

//     // handleClick() {
//     //     this.setState(state => ({
//     //         isToggleOn: !this.state.isToggleOn
//     //     }))
//     // }
//     // handleClick = () => {
//     //     console.log(this.state.isToggleOn)
//     //     this.setState({
//     //         isToggleOn: !this.state.isToggleOn
//     //     })
//     // }

//     handleClick() {
//         this.setState({
//             isToggleOn: !this.state.isToggleOn
//         })
//     }

//     deleteRow1(e) {
//         console.log(e.target.dataset)
//         // this.setState({
//         //     curId: id
//         // })
//     }

//     deleteRow2(e) {
//         this.setState({
//             curId: e.target.id
//         })
//     }

//     deleteRow3 = (e) => {
//         console.log(e)
//     }

//     deleteRow6(id) {
//         console.log(id)
//         this.setState({
//             curId: id
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={() => this.handleClick()}>
//                     {this.state.isToggleOn ? 'on' : 'off'}
//                 </button>
//                 <button data-others-params="BADB21" id="0" onClick={(e) => this.deleteRow1(e)}>
//                     删除
//                 </button>
//                 <button data-others-params="BADB22" id="1" onClick={(e) => this.deleteRow1(e)}>
//                     删除
//                 </button>
//                 <button id="2" onClick={this.deleteRow2.bind(this)}>
//                     删除
//                 </button>
//                 <button id="3" onClick={this.deleteRow2.bind(this)}>
//                     删除
//                 </button>
//                 <button id="4" onClick={this.deleteRow3}>
//                     删除
//                 </button>
//                 <button id="5" onClick={this.deleteRow3}>
//                     删除
//                 </button>
//                 <button id="6" onClick={this.deleteRow6.bind(this, 6)}>
//                     删除
//                 </button>
//             </div>
//         )
//     }
// }

// function UserGreeting(props) {
//     return <p>Welcome back!</p>
// }

// function GuestGreeting(props) {
//     return <p>Please sign up.</p>
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />
//     }
//     return <GuestGreeting />
// }

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     )
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handleLogoutClick = this.handleLogoutClick.bind(this)
//         this.state = {
//             isLoggedIn: false
//         }
//     }

//     handleLoginClick() {
//         this.setState({
//             isLoggedIn: true
//         })
//     }

//     handleLogoutClick() {
//         this.setState({
//             isLoggedIn: false
//         })
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }

// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <p>嗨</p>
//             {/* 在JavaScript中，true && expression 总会返回表达式 */}
//             {unreadMessages.length > 0 &&
//                 <p>
//                     you have {unreadMessages.length} unread messages.
//                 </p>
//             }
//         </div>
//     )
// }

// const messages = ['React', 'Re:React', 'Re:Re: React'];

// function Condition(props) {
//     const isLoggedIn = props.isLoggedIn
//     return (
//         <div>
//             {isLoggedIn
//                 ? <LoginButton />
//                 : <LogoutButton />
//             }
//         </div>
//     )
// }

// function WarningBanner(props) {
//     if (!props.warn) {
//         return null
//     }

//     return (
//         <div className="warning">
//             warning
//         </div>
//     )
// }

// class Page extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             showWarning: 1,
//             count: props.count
//         }
//         this.handleToggleClick = this.handleToggleClick.bind(this)
//     }

//     handleToggleClick() {
//         this.setState((state, props) => ({
//             showWarning: state.showWarning ? 0 : 1,
//             count: state.showWarning + props.count
//         }), () => {
//             console.log(this.state)
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//                 <p>count:{this.state.count}</p>
//             </div>
//         )
//     }
// }

// // const numbers = [1, 2, 3, 4, 5];
// // const doubled = numbers.map(number => number * 2);
// // console.log('numbers:', numbers, 'doubled:', doubled);

// // const listItems = numbers.map((number, index) =>
// //     <li key={index}>{number}</li>
// // )

// function ListItems(props) {
//     return (
//         <li onClick={props.onClick}>{props.value}</li>
//     )
// }

// function handleSelected(e) {
//     console.log(e.target)
//     // this.setState({
//     //     id: props
//     // })
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map(number =>
//         <ListItems onClick={handleSelected} key={number.toString()} value={number} />
//     )

//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// }

// function Post(props) {
//     return (
//         <div key={props.id} id={props.id}>
//             <h2>{props.title}</h2>
//             <p>{props.content}</p>
//         </div>
//     )
// }

// /**
//  * 数组中使用key在兄弟节点中是唯一的，但它们不需要全局唯一
//  * 当生成两个相同的数组时，可以使用相同的key
//  * **/
// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map(post =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map(post =>
//         <Post
//             key={post.id}
//             id={post.id}
//             title={post.title}
//             content={post.content}
//         />
//     );
//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     )
// }

// const posts = [
//     {
//         id: 1,
//         title: 'hello world',
//         content: 'welcome to learning React!'
//     },
//     {
//         id: 2,
//         title: 'Installation',
//         content: 'You can install React from npm.'
//     }
// ];

// function NumberList1(props) {
//     const numbers = props.numbers;
//     return (
//         <ul>
//             {numbers.map(number =>
//                 <ListItems key={number.toString()} value={number} />
//             )}
//         </ul>
//     )
// }

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: ''
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(e) {
//         this.setState({
//             value: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         alert('提交你的名字：' + this.state.value)
//         e.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字：
//                     <input
//                         type="text"
//                         value={this.state.value}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         )
//     }
// }

// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: '请写一篇文章'
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(e) {
//         this.setState({
//             value: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         alert('提交的文章：' + this.state.value)
//         e.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     <textarea
//                         value={this.state.value}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         )
//     }
// }

// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: props.value
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(e) {
//         console.log(e.target.value)
//         this.setState({
//             value: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         alert('你喜欢的风味是：' + this.state.value)
//         e.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     你喜欢的风味是：
//                     <select
//                         multiple={this.props.multiple}
//                         value={this.state.value}
//                         onChange={this.handleChange}
//                     >
//                         <option value="grapefruit">葡萄柚</option>
//                         <option value="lime">酸橙</option>
//                         <option value="coconut">椰子</option>
//                         <option value="mango">芒果</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         )
//     }
// }

// class Reservation extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         };

//         this.handleInputChange = this.handleInputChange.bind(this)
//     }

//     handleInputChange(e) {
//         const target = e.target
//         const value = target.name === 'isGoing' ? target.checked : target.value
//         const name = target.name

//         this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         return (
//             <form>
//                 <label>
//                     <input
//                         name="isGoing"
//                         type="checkbox"
//                         checked={this.state.isGoing}
//                         onChange={this.handleInputChange}
//                     />
//                     <br />
//                 </label>
//                 <label>
//                     来宾人数：
//                     <input
//                         name="numberOfGuests"
//                         type="number"
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInputChange}
//                     />
//                 </label>
//             </form>
//         )
//     }
// }

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>
//     }
//     return <p>The water would not boil.</p>
// }

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// }

// /**
//  * 1.react调用onChange方法
//  * 2.TemperatureInput组件中的handleChange调用this.props.onTemperatureChange()
//  * 
//  * **/
// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             temperature: ''
//         }
//     }

//     handleChange = (e) => {
//         this.props.onTemperatureChange(e.target.value)
//     }

//     render() {
//         const temperature = this.props.temperature
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}</legend>
//                 <input
//                     type="number"
//                     value={temperature}
//                     onChange={this.handleChange}
//                 />
//             </fieldset>
//         )
//     }
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             temperature: '',
//             scale: 'c'
//         }
//     }

//     handleCelsiusChange = temperature => {
//         this.setState({
//             scale: 'c',
//             temperature
//         })
//     }

//     handleFahrenheitChange = temperature => {
//         this.setState({
//             scale: 'f',
//             temperature
//         })
//     }

//     render() {
//         const scale = this.state.scale
//         const temperature = this.state.temperature
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

//         return (
//             <div>
//                 <TemperatureInput
//                     scale="c"
//                     temperature={celsius}
//                     onTemperatureChange={this.handleCelsiusChange}
//                 />
//                 <TemperatureInput
//                     scale="f"
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleFahrenheitChange}
//                 />
//                 <BoilingVerdict
//                     celsius={parseFloat(celsius)}
//                 />
//             </div>
//         )
//     }
// }

// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9
// }

// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32
// }

// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature)
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input)
//     const rounded = Math.round(output * 1000) / 1000
//     return rounded.toString()
// }

// /**
//  * 学习小结
//  * 在React应用中，任何数据应当只有一个数据源,state首先添加到组件中
//  * 其他组件需要此组件,可以提升至这些组件的最近共同组件中,依靠自上而下
//  * 的数据流,而不是在不同组件间同步state
//  * 
//  * 
//  * **/

// /*-------------------------------------------------*/

// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     )
// }

// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>
//         </FancyBorder>
//     )
// }

// function Contacts(props) {
//     return (
//         <div className="Contacts" style={props.style}>
//             这里是contacts左侧的部分
//         </div>
//     );
// }

// function Chat(props) {
//     return (
//         <div className="Chat" style={props.style}>
//             这里是chat右侧内容的部分
//         </div>
//     )
// }

// function SplitPane(props) {
//     return (
//         <div className="SplitPane">
//             <div className="SplitPane-left">
//                 {props.left}
//             </div>
//             <div className="SplitPane-right">
//                 {props.right}
//             </div>
//         </div>
//     );
// }

// function Layout() {
//     const leftStyle = {
//         width: '200px',
//         border: "1px red solid",
//     }
//     const rightStyle = {
//         width: '200px',
//         border: "1px black solid",
//     }
//     return (
//         <SplitPane
//             left={
//                 <Contacts style={leftStyle} />
//             }
//             right={
//                 <Chat style={rightStyle} />
//             } />
//     );
// }

// function Dialog(props) {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.message}
//             </p>
//             {props.children}
//         </FancyBorder>
//     )
// }

// function WelcomeDialog1() {
//     return (
//         <Dialog
//             title="Welcome"
//             message="谢谢访问"
//         />
//     )
// }

// class SignDialog extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             login: ''
//         }
//     }

//     handleChange = e => {
//         this.setState({
//             login: e.target.value
//         })
//     }

//     handleSignUp = e => {
//         console.log(`welcome aboard,${this.state.login}`)
//     }

//     render() {
//         return (
//             <Dialog
//                 title="这是标题"
//                 message="欢迎来到这里"
//             >
//                 <input
//                     value={this.state.login}
//                     onChange={this.handleChange}
//                 />
//                 <button onClick={this.handleSignUp}>
//                     Sign Me Up!
//                 </button>
//             </Dialog>
//         )
//     }
// }

// class Add extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             number: 0
//         }

//         this.handleAdd = this.handleAdd.bind(this)
//     }

//     handleAdd() {
//         this.setState({
//             number: this.state.number + 1
//         }, () => {
//             console.log(this.state.number)
//         })
//     }

//     render() {
//         return (
//             <button onClick={this.handleAdd}>
//                 {this.state.number}
//             </button>
//         )
//     }
// }

// function Glossary(props) {
//     return (
//         <dl>
//             <label htmlFor="namedInput">Name:</label>
//             <br />
//             <br />
//             <input id="namedInput" type="text" name="name" />
//         </dl>
//     );
// }

// function CustomTextInput(props) {
//     return (
//         <div>
//             <input ref={props.inputRef} />
//         </div>
//     );
// }

// class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.inputElement = React.createRef();
//     }

//     handleFocus = () => {
//         console.log('获取焦点了！！')
//         console.log(this.inputElement.current.value)
//         this.inputElement.current.focus()
//     }

//     render() {
//         return (
//             <div style={{ border: '1px red solid' }}>
//                 <CustomTextInput inputRef={this.inputElement} />
//                 <button onClick={this.handleFocus}>测试获取焦点</button>
//             </div>
//         );
//     }
// }

// class OuterClickExample extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isOpen: false
//         }
//         this.toggleContainer = React.createRef()

//         this.onClickHandler = this.onClickHandler.bind(this);
//         this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
//     }

//     componentDidMount() {
//         window.addEventListener('click', this.onClickOutsideHandler);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('click', this.onClickOutsideHandler);
//     }

//     onClickHandler() {
//         this.setState(currentState => ({
//             isOpen: !currentState.isOpen
//         }))
//     }

//     onClickOutsideHandler(event) {
//         if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
//             this.setState({
//                 isOpen: false
//             })

//         }
//     }

//     render() {
//         return (
//             <div ref={this.toggleContainer}>
//                 <button onClick={this.onClickHandler}>
//                     select an option
//                 </button>
//                 {this.state.isOpen && (
//                     <ul>
//                         <li>option1</li>
//                         <li>option2</li>
//                         <li>option3</li>
//                     </ul>
//                 )}
//             </div>
//         )
//     }
// }

// class BlurExample extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isOpen: false
//         }
//         this.timeOutId = null

//         this.onClickHandler = this.onClickHandler.bind(this)
//         this.onBlurHandler = this.onBlurHandler.bind(this)
//         this.onFocusHandler = this.onFocusHandler.bind(this)
//     }

//     onClickHandler() {
//         this.setState(currentState => ({
//             isOpen: !currentState.isOpen
//         }))
//     }

//     onBlurHandler() {
//         this.timeOutId = setTimeout(() => {
//             this.setState({
//                 isOpen: false
//             })
//         });
//     }

//     onFocusHandler() {
//         clearTimeout(this.timeOutId)
//     }

//     render() {
//         // React 通过把失去焦点和获得焦点事件传输给父节点
//         // 来帮助我们。
//         return (
//             <div onBlur={this.onBlurHandler}
//                 onFocus={this.onFocusHandler}>
//                 <button onClick={this.onClickHandler}
//                     aria-haspopup="true"
//                     aria-expanded={this.state.isOpen}>
//                     Select an option
//             </button>
//                 {this.state.isOpen && (
//                     <ul>
//                         <li>Option 1</li>
//                         <li>Option 2</li>
//                         <li>Option 3</li>
//                     </ul>
//                 )}
//             </div>
//         );
//     }

// }

// function AddSum() {
//     return (
//         <div>
//             {add(1, 2)}
//         </div>
//     )
// }

// const ThemeContext = React.createContext('light')
// class Context extends React.Component {
//     render() {
//         return (
//             <ThemeContext.Provider value='dark'>
//                 <Toolbar />
//             </ThemeContext.Provider>
//         )
//     }
// }

// function Toolbar() {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     )
// }

// function Button(props) {
//     return (
//         <button></button>
//     )
// }

// class ThemedButton extends React.Component {
//     static comtextType = ThemeContext
//     render() {
//         return <Button theme={this.context} />
//     }
// }

// ReactDOM.render(
//     <Context />,
//     document.getElementById('root')
// );

// import React from 'react'
// import ReactDOM from 'react-dom';
// import { ThemeContext, themes } from './theme-context';
// import ThemedButton from './themed-button';

// // 一个使用 ThemedButton 的中间组件
// function Toolbar(props) {
//     return (
//         <ThemedButton onClick={props.changeTheme}>
//             Change Theme
//         </ThemedButton>
//     );
// }

// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             theme: themes.light,
//         };

//         this.toggleTheme = () => {
//             this.setState(state => ({
//                 theme:
//                     state.theme === themes.dark
//                         ? themes.light
//                         : themes.dark,
//             }));
//         };
//     }

//     render() {
//         // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
//         // 而外部的组件使用默认的 theme 值
//         return (
//             <div>
//                 <ThemeContext.Provider value={this.state.theme}>
//                     <Toolbar changeTheme={this.toggleTheme} />
//                 </ThemeContext.Provider>
//                 <ThemedButton />
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Test />,
//     document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom';

function Test() {
    return <div>ceui</div>
}

ReactDOM.render(
    <Test />,
    document.getElementById('root')
)