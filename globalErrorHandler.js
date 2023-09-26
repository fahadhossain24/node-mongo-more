const errorHandler = error => {
    const {name, message, stack} = error;

    console.log(name, message)
    // console.log('internal server error')
}


// common js type module exports 
// module.exports = errorHandler
module.exports = {errorHandler}
// module.exports.errorHandler = errorHandler

// modular type export 

// export default errorHandler
// export  {errorHandler}