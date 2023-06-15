

function InputField ({placeholder, type, inputRef, className}){
return(
    <div>
        <input type={type} placeholder={placeholder} ref={inputRef} className={className}/>
    </div>
)
}

export default InputField;