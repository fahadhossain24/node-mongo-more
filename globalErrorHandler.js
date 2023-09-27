const errorHandler = error => {
    const {name, message, stack} = error;

    console.log(name, message)
    // console.log('internal server error')
}


module.exports = {errorHandler}

