class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
authenticate(actualcode,enteredcode){
    textSize(50);
    fill("black");
    text(code,300,300)
    if(actualcode===enteredcode)

        return true;

    else
        return false;
    
}
    

}