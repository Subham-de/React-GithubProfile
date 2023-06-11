import React from "react";


class GithubProfileCard extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {githubprofile} = this.props
        return (

            <React.Fragment>
                <div className='card mt-3'>
                    <img src={githubprofile.avatar_url} alt='' className='img-fluid'/>
                    <div className="card-body">
                        <p className='h3'>{githubprofile.name}</p>
                        <small>{githubprofile.bio}</small> <br/>
                        <a href={githubprofile.html_url} className='btn btn-danger btn-sm' target='_blank'>Profile</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GithubProfileCard