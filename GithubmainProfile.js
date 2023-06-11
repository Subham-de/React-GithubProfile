import React from "react";
import GithubProfileCard from "./GithubProfile/GithubProfileCard";
import GithubProfileDetails from "./GithubProfile/GithubProfileDetails";


class GithubmainProfile extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
               <div className='container'>
                   <div className="row">
                       <div className="col-md-3">
                           <GithubProfileCard  githubprofile={this.props.githubProfile}/>
                       </div>
                       <div className='col-md-9'>
                           <GithubProfileDetails githubprofile={this.props.githubProfile}/>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        );
    }
}
export default  GithubmainProfile