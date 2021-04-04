
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: 'Loading',
                avarar: '',
                email:'',
                gender:'',
        }
    }

    fetchUser() {
        fetch('https://randomuser.me/api?results=1')
        .then(res => res.json()).then((data) => {
           
            const user = data.results[0];
            this.setState({ 
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                avatar: user.picture.large,
                gender: user.gender
            })
        });
    }

    componentDidMount() {
        this.fetchUser()
    }
    
    render() {
        return (
            <div className='text-center px-10 py-6 rounded-xl bg-gradient-to-r from-purple-300 via-pink-500 to-red-200 shadow-2xl text-white'>
                <img className="m-auto border-4 rounded-full" src={this.state.avatar} alt="" />
                <p className="text-4xl m-5">{this.state.name}</p>                
                <p className="text-1xl m-5 text-gray-100">{this.state.email}</p>
                <button onClick={() => this.fetchUser()} className='bg-white text-gray-600 px-4 py-2 hover:bg-gray-200 transition ease-out duration-500 rounded'>Get Random User</button>
            </div>
        )
    }
}


ReactDOM.render(
    <User />,
    document.querySelector('#root'));