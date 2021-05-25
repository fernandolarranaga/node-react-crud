import React, {Component} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import BlazonDetail from './BlazonDetail';


export default class CreateBlazon extends Component {
    
    state ={
        users:[], 
        title:"",
        description:"",
        img:""

    }
    async componentDidMount() {
        this.getUsers();
        console.log(this.state.users);
        }

        /*getUsers= async()=>{
            const resp = await axios.get('http://localhost:4000/api/blazons')
        this.setState({users: resp.data});
       
        }

/*
getUsers= ()=>{
 const dato=axios.get('http://localhost:4000/api/blazons')
.then(resp=>resp.data)
console.log(dato);
this.setState({users: dato.data});
}
*/

 getUsers = () => {
      axios.get(`http://localhost:4000/api/blazons`)
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          this.setState({users: theProject});
      })
      .catch((err)=>{
          console.log(err)
      })
  }
   
        getBlazon=  (id)=>{
           axios.get('http://localhost:4000/api/blazons/'+id).then(()=> console.log(id));
        }

        handleChange = (event) => {  
            const {name, value} = event.target;
            this.setState({[name]: value});
        }
        
            onSubmit= e=>{
                e.preventDefault();
        
              axios.post('http://localhost:4000/api/blazons', {
                  title:this.state.title,
                  description:this.state.description,
                  img:this.state.img
              }).then(datos=> console.log(datos))
                            this.setState({title:"", description:"", img:""});
             this.getUsers();
            }
        

    render() {
            return (
                <>
                    <div clasName="col-md-6">
                    <div className="card card-body">
                        <h3>Crear nuevo escudo</h3>
                        <form onSubmit={this.onSubmit}>
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
                                Crea un escudo
                            </button>
                        </form>
                    </div>
                </div>

                    <div className="col-md-11 ">
                    <ul  className="list-group">
                        {
                            this.state.users.map(user=> (
                                <ul className="rounded float-start">
                                      
                               <Link to={`/blazons/${user._id}`}><li  
                                className="list-group-item list group-item-action" 
                                key={user._id}
                                //onDoubleClick={()=>this.deleteBlazon(user._id)}
                                
                                >
                                <b>{user.title}</b>
                            </li></Link> 
                            {/*<li className="list-group-item list group-item-action" key={user._id} align="justify">{user.description}</li>
                            <li className="list-group-item list group-item-action"><img src={user.img} className="rounded mx-auto d-block" width="200"/></li>
                           <li className="list-group-item list group-item-action" onClick={()=>this.deleteBlazon(user._id)}>  Eliminar</li>*/}
                            </ul>)
                            )
                        }
                    </ul>
         
                    </div>
           
                </>
            
            )
    }
}
