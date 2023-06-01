import { useState, useEffect } from "react";

export default function PostForm({onClickDrama}) {

    const [formData, setFormData] = useState({
        title: '',
        body: '',
        category: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function onSubmit(e){
        e.preventDefault()

        console.log('form data in on submit', formData)
        
        const postStuff = {
            "title": formData.title,
            "body": formData.body,
            "category": formData.category
        }

        const formDataSubmit = new FormData()
            formDataSubmit.append("title", formData.title)
            formDataSubmit.append("body", formData.body)
            formDataSubmit.append("category", formData.category)

        onClickDrama(postStuff, formDataSubmit)
    }

    return (

        <div>
            <form onSubmit={onSubmit}>

                <label>
                    Post Title
                </label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} />    

                <br/><br/>

                <label>
                    Post Body
                </label>
                <input type='text' name='body' value={formData.body} onChange={handleChange} />

                <br/><br/>

                <label>
                    Post Category
                </label>
                <input type='text' name='category' value={formData.category} onChange={handleChange} />

                <br/><br/>

                <button>
                    <input type='submit'/>
                    submit
                </button>

            </form>



        </div>
    )
}