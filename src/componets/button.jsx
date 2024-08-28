function ButtonShow(props){
    function clickButton(){
        props.handleInput(props.name)
      }
    return(
        <button className={props.className} onClick={clickButton}>{props.name}</button>
    )
}

export default ButtonShow