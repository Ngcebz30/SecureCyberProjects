const { css, createGlobalStyle, keyframes } = styled;

class PasswordGenerator extends React.Component {

constructor(props) {
	super(props);
	this.state = {
		message: '',
	};
}

componentDidMount() {
	this.randomPassword();
}
	
randomPassword = () => {
	var password_length = 16;
	var chars = "!@#$%&*ABCDEFGHIJKLMNOP1234567890abcdefghijklmnopqrstuvwxyz";
	var pass = "";
	for (var x = 0; x < password_length; x++) {
		var i = Math.floor(Math.random() * chars.length);
		pass += chars.charAt(i);
	}
	document.getElementById("pass").value = pass;
		this.setState({
  	message: 'click button to copy password',
	});
}

copyPassword = () => {
  var copyPass = document.getElementById("pass");
  copyPass.select();
  document.execCommand("Copy");
	this.setState({
  	message: 'password copied!',
	});
}

render() {
		return (
			<Container>
				<GlobalStyle />
				<HeaderCaption>
					<h1>Password Generator</h1>
					<p>Use this password tool to securely generate strong, unique passwords</p>
				</HeaderCaption>
				<FormContainer>
					<Input><input type="text" id="pass" /></Input>
					<IconContainer>
						<Icon><span onClick={this.randomPassword} /></Icon>
					</IconContainer>
				</FormContainer>
				<Button>
					<input type="submit" value="C0py p@$$w0rd" onClick={this.copyPassword} />
				</Button>
				<Message><span>{this.state.message}</span></Message>
			</Container>
		)
	}
}


const GlobalStyle = createGlobalStyle`
html {
	background-color: #222;
	background:linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.7)),url(http://i.imgur.com/PgkkRd4.jpg) 50% 50%;
	background-size: cover;
}
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

const Container = styled.div`
	border: 1px solid rgba(255,255,255,0.4);
	margin: 3em;
	background-color: rgba(0,0,0,0.8);
		text-align: center;
		padding: 2em 5em;
		border-radius: 5px;
		*:focus {
				outline: none;
		}
`;

const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Input = styled.div`
	input {
		position: relative;
		left: -0.3em;
		padding: 1em 3em;
		border: 0;
		color: #fff;
		font-size: 1.3em;
		letter-spacing: 1px;
		text-align: center;
		border-top: 2px solid rgba(0,100,0,0.5);
		border-left: 2px solid rgba(0,100,0,0.5);
		border-bottom: 2px solid rgba(0,100,0,0.5);
		background-color: #000;
	}
`;

const Icon = styled.div`
	span {
		&:after {
			position: relative;
			top: 15px;
			right: 9px;
			content: "";
			background: url(http://gfuentesdev.com/tvcast/player/ws/assets/refresh_icon.png) no-repeat;
			background-size: contain;
			width: 30px;
			height: 30px;
			float: right;
		}
	}
`;

const IconContainer = styled.div`
	border: 2px solid rgba(0,100,0,0.5);
	width: 50px;
	height: 65px;
`;

const Button = styled.div`
	input {
		color: #fff;
		background-color: rgba(0,100,0,0.6);
		padding: 1em 5.75em;
		text-transform: uppercase;
		margin: 1em;
		font-size: 1.3em;
		border: 0;
		&:hover {
			background-color: rgba(0,100,0,0.9);
		}
	}
`;

const HeaderCaption = styled.div`
	margin: 0 auto;
	h1 {
		color: #fff;
		text-transform: uppercase;
		font-family: 'Oswald', sans-serif;
		font-size: 2.8em;
		font-weight: 100;
		letter-spacing: 0.05em;
		margin: 0;
	}
	p {
		color: #fff;
		font-family: 'Roboto', sans-serif;
		font-size: 0.85em;
		font-weight: 100;
		margin: 1em 0 1.5em;
	}
`;

const Message = styled.div`
	span {
		color: #fff;
		font-family: 'Roboto', sans-serif;
		font-size: 0.85em;
		font-weight: 100;
	}
`;

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<PasswordGenerator />, app);
