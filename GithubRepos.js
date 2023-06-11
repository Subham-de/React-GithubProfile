import React from "react";


class GithubRepos extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {githubRepos} = this.props
        return (
            <React.Fragment>
               <div className='container mt-3'>
                   <div className='row'>
                       <div className='col'>
                           <div className="card ">
                               <div className="card-header">
                                   <p className="h2">Your Repositories</p>
                               </div>
                               <div className='card-body'>
                                   <div className=''>
                                       {
                                           githubRepos.map(
                                               data=>{
                                                   return(
                                                           <React.Fragment>
                                                               <div className='d-flex justify-content-between mt-2 '>
                                                                   <span className='h5'>
                                                                       <a href={data.html_url} target='_blank'>{data.name}</a>
                                                                   </span>
                                                                   <span className='badge badge-secondary'>{data.stargazers_count} stars</span>
                                                                   <span className='badge badge-primary'>{data.watchers_count} watchers</span>
                                                               </div>
                                                           </React.Fragment>
                                                   )
                                               }
                                           )
                                       }
                                   </div>
                               </div>
                           </div>

                       </div>

                   </div>
               </div>
            </React.Fragment>
        );
    }
}

export default GithubRepos