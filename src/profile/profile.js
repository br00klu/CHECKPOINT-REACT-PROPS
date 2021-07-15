import PropTypes from "prop-types";

function Profile (props) {
    const {fullName='unknown',bio,profession='no job listed',handleName}=props;
    return (
        <div>
            <h1 style={{color:"blue", fontWeight:'800',textDecoration:"underline"}}>I'm {fullName}.</h1>
            <h2 style={{color:'lightblue' ,fontWeight:'500'}}>{bio}</h2>
            <h3 style={{color:"turquoise", fontWeight:'250'}}>I'm a {profession}.</h3>
            <a href='/' onLoad={()=>handleName(fullName)}>
               {props.children} 
            </a>
        </div>
    );

}

Profile.propTypes = {
    fullName:PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    fhandleName: PropTypes.func,
};

export default Profile;