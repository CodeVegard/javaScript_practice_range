
function getPath(params) {
    const path = window.location.pathname;

    switch (path) {
        case "/":
        case "/index.html":    
            console.log("Pathname is " + path);
            break;
    
        case "/register/":
            console.log("Pathname is " + path);
    
        default:
            break;
    }
}

getPath();