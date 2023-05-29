import React, {useState} from 'react'

// CSS Stuff: make the input boxes NOT span, maybe smaller text in h2 and bigger input labels

function Login({onSetAdmin, onSetShowLogin}) {
    
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        const formDataSubmit = new FormData()
            formDataSubmit.append("username", user.username)
            formDataSubmit.append("password", user.password)
       console.log(user)
        fetch(`/login`,{
          method:'POST',
          body: formDataSubmit
        })
        .then(res => {
            if(res.ok){
                res.json().then(() => {
                    onSetAdmin()
                    onSetShowLogin()
                })
            }else {
                console.log('you failed')
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    return (
        <div className='p-4'> 
            <form onSubmit={onSubmit} className="mb-5">
            <label>
                username:
            </label>
            <input type='text' name='username' value={username} onChange={handleChange} />
        
            <br/>

            <label>
                password:
            </label>
            <input type='password' name='password' value={password} onChange={handleChange}  />

            <br/>         

            <button>
                <input type='submit' value='sup dawg' />
            </button>
        </form>
        </div>
    )
}

export default Login