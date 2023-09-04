const TitleAndInputComponent = ({title, type = "text", onChange}) => {

    return (
        <div //style={{marginBottom: "10px"}}
        >
            <p>{title}</p>
            <input type={"email"}
                // style={{borderRadius: '4px'}}
                   onChange={onChange}/>
        </div>
    );
};
export default TitleAndInputComponent;