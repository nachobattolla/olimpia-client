const AvailableCell = (props)=> {
    if (props.props) {
        return (
            <div style="color:red">
                Reserved
            </div>
        )

    }else{
        return(
            <div style="color:green">
                Available
            </div>
        )
    }
}
export default AvailableCell