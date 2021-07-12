class baseUtils{
    CliBtn(element){
        element.click();
    }
    toaddValue(text){
       // element.waitForDisplayed();
        addValue(text);
    }
    togetValue(element){
     //  element.waitForDisplay();
       return element.getValue();
    }
}
module.exports =new baseUtils();