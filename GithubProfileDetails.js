import React from "react";


class GithubProfileDetails extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {githubprofile} = this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card mt-3 ">
                        <div className="card-header text-center">
                            <span className='badge badge-primary mx-4'> {githubprofile.followers} Followers</span>
                            <span className='badge badge-info mx-4'> {githubprofile.public_repos} Repositories</span>
                            <span className='badge badge-danger mx-4'> {githubprofile.public_gists} Gists</span>
                            <span className='badge badge-secondary mx-4'> {githubprofile.following} Following</span>
                        </div>
                        <div className='card-body'>
                            <ul className='list-group'>

                                <li className='list-group-item'>UserName: {githubprofile.name} </li>
                                <li className='list-group-item'>Location: {githubprofile.location} </li>
                                <li className='list-group-item'>email: {githubprofile.email} </li>
                                <li className='list-group-item'>company: {githubprofile.company} </li>
                                <li className='list-group-item'>Member since: {githubprofile.created_at} </li>
                                <li className='list-group-item'>Profile url: {githubprofile.url}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GithubProfileDetails