import React, { Component } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';

 
export default class EditBlazon extends Component {
  state ={
    users:[], 
    title : "", 
    description: "",
    img:""
  }

  async componentDidMount() {
   
    }


handleChange = (event) => {  
  const {name, value} = event.target;
  this.setState({[name]: value});
}


edit = async (e)=>{
    const title = this.state.title;
    const description = this.state.description;
    const img = this.state.img;
    e.preventDefault();
  const res= await axios.put(`http://localhost:4000/api/blazons/${this.props.theProject._id}}`, {
      title,description,img
  })
  //this.setState({title:"", description:"", img:""});
  this.props.getSingleProject();

}

render(){
  return (
    <>
        <div clasName="col-md-6">
        <div className="card card-body">
            <h3>Editar el escudo</h3>
            <form onSubmit={this.edit}>
                <div className="mb-3">

                    
                    <input 
                    type="text" 
                    className="form-control"
                    value={this.state.title} onChange={ e => this.handleChange(e)}
                    name="title"
                    placeholder="Pon el título que desees"
                    />
                      <input 
                    type="text" 
                    className="form-control"
                    value={this.state.description} onChange={ e => this.handleChange(e)}
                    name="description"
                    placeholder="Pon la descripción"
                    />
                      <input 
                    type="text" 
                    className="form-control"
                    value={this.state.img} onChange={ e => this.handleChange(e)}                                    name="img"
                    placeholder="url de la imagen"
                    />
                </div>
                <button type="submit" clasName="btn-warning">
                    Edita el escudo
                </button>
            </form>
        </div>
    </div>

        

    </>)
}
}
 
