import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditBlazon from './EditBlazon';

class BlazonDetail extends Component {
  state = {}
 
  componentDidMount(){
      this.getSingleProject();
  }
 
  getSingleProject = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:4000/api/blazons/${params.id}`)
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          this.setState(theProject);
      })
      .catch((err)=>{
          console.log(err)
      })
  }



 /* deleteBlazon=async (id)=>{
  console.log(id);
    await axios.delete('http://localhost:4000/api/blazons/'+id)
}
*/
  deleteBlazon=(id)=>{
    console.log(id);
    axios.delete('http://localhost:4000/api/blazons/'+id).then(()=>console.log("Borrado"));
}

  //Editar
  handleFormSubmitEdit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const img = this.state.img;
    const { params } = this.props.match;

    axios.put(`http://localhost:4000/api/blazons/${params.id}`, { title, description, img })
    .then( () => {
        // this.props.getData();
        this.setState({title: "", description: "", img:"" });
        this.getSingleProject();

    })
    .catch( error => console.log(error) )

  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

 
  render(){
    return(
      <div className="col-md-11 ">
        <ul>
        <li className="list-group-item list group-item-action"><Link to={'/blazons'}>Back to projects</Link></li> 
                               
       <b> <li className="list-group-item list group-item-action" ><h3>{this.state.title}</h3></li></b>
        <li className="list-group-item list group-item-action" >{this.state.description}</li>
       <li className="list-group-item list group-item-action"> <img src={this.state.img} className="rounded mx-auto d-block" width="400"/></li>
    
       <Link to="/blazons" onClick={()=>this.deleteBlazon(this.state._id)}><li className="btn btn-primary" >  Eliminar</li></Link>
        
        </ul>
 <h3>Edita tu escudo</h3>
 <form onSubmit={this.handleFormSubmitEdit}>
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
   
    )
  }
}
 
export default BlazonDetail;