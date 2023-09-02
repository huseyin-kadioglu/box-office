const TitleAndInputComponent = ({title, type = "text", onChange}) => {

    return (
        <div style={{marginBottom: "10px"}}>
            <h4>{title}</h4>
            <input type={"email"}
                   style={{borderRadius: '4px'}}
                   onChange={onChange}/>
        </div>
    );
};
export default TitleAndInputComponent;