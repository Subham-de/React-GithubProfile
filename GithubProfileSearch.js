import React from "react";
import GithubRepos from "./Github Repos/GithubRepos";
import axios from "axios";
import {Client_id} from "./credit/credit";
import {ClientSecert} from "./credit/credit";
import GithubmainProfile from "./GithubmainProfile";
class GithubProfileSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            Githubuser:'',
            GithubProfile:{},
            GithubRepos:[],
            errorMsg:''
        }
    }

    sumbitsearchuser=(e)=>{
        e.preventDefault();
        this.searchprofile(this.state.Githubuser);
        this.searchRepos(this.state.Githubuser);
    }
    searchprofile(Githubusername) {
        let data_url = `https://api.github.com/users/${Githubusername}?client_id:${Client_id}&client_secret=${ClientSecert}`;
        axios.get(data_url).then(
            (response)=>{
                this.setState({
                    ...this.state,
                    GithubProfile:response.data
                })
            }
        ).catch(
            (err)=>{
                this.setState({
                    ...this.state,
                    errorMsg:err.message
                })
            }
        )
    }
    searchRepos=(Githubusername)=> {
        let data_url = `https://api.github.com/users/${Githubusername}/repos?client_id:${Client_id}&client_secret=${ClientSecert}`;
        axios.get(data_url).then(
            (response)=>{
                this.setState({
                    ...this.state,
                    GithubRepos:response.data
                })
            }
        ).catch(
            (err)=>{
                this.setState({
                    ...this.state,
                    errorMsg:err.message
                })
            }
        )
    }
    onchangetext=(e)=>{
        this.setState({
            ...this.state,
            Githubuser:e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h3">Github Profile Search : </p>
                                </div>
                                <div className="card-body">
                                   <form className='form-inline' >
                                      <div className='form-group'>
                                          <input type='text' size='30' onChange={this.onchangetext} placeholder='Find Your Username' value={this.state.Githubuser} className='form-control'/>
                                      </div>
                                        <div className="form-group">
                                            <button onClick={this.sumbitsearchuser} className='btn btn-danger btn-sm'>Search</button>
                                        </div>
                                   </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {
                            Object.keys(this.state.GithubProfile).length>0?<React.Fragment>
                                <GithubmainProfile githubProfile={this.state.GithubProfile}/>
                            </React.Fragment>:null
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {
                            this.state.GithubRepos.length>0?<React.Fragment>
                                <GithubRepos githubRepos={this.state.GithubRepos}/>
                            </React.Fragment>:null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GithubProfileSearch