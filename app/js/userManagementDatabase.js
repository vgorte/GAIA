"use strict";

var newUser;
var letzte = null;
var jsonObj;
var allUsers;
var noUsers;

/**
 * saves the Geoobject to the database
 */
function saveRegister() {

    //var url = $('#db-url').val() + '/getFeatures';
    //var url = http://localhost:8080 + '/getFeatures';

    loadUser();
    newUser = curUser;
    //var name = prompt('name for savings');
    //var contentString = $('#drawnItemJSONText').val();


    //var jsonString = JSON.stringify(newUser);
    // var temp = newUser;


    var content = JSON.parse(newUser); //JSON.parse(temp);
    //console.log(content + " das ist content");

    //console.log(JSON.parse(content));
    console.log(content + "das ist neu");
    
    if (name != undefined && content != null) {

        var url = 'http://localhost:8080' + '/addFeature?name=' + email;
        //var url = $('#db-url').val() + '/getFeatures'; das waere richtig

        // perform post ajax
        $.ajax({
            type: 'POST',
            data: content,
            url: url,
            timeout: 5000,
            success: function (data, textStatus) {
                console.log("succsess");
                console.log(data);
                console.log("succsess");
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("failed to save to db");
            }
        });

        loadFromDB();

    } else {
        console.log("fehler save to sb undefined oder null");
    }
};




/**
 * lädt die benutzer daten mit ausgewählten benutzer namen, muss danach pw prüfen wenn richtig gibts access
    access als variable und man kann nur auf die seite zugreifen wenn acces gibt.
    
    muss pruefen ob ueberhaupt registriert ist und bei neu registrieren ob email schon vergeben ist
    
    das hier stimmt noch nicht so
 */
function loadFromDB() {
    var url = 'http://localhost:8080' + '/getFeatures';
    
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: url,
        timeout: 5000,
        success: function (content, textStatus) {
            $('#tableDBContents').empty();

            
            loadLoginName();
            loadLoginPW();
            //console.log(content);
            //var jsonobj =  content[41].data;
            //JSON.parse(jsonobj);
            //console.log(jsonobj.Password);  
            
            for(var i=0; i<= content.length;i++){
                
                if(content[i] != undefined && content[i].data != undefined && content[i].data.Email != undefined){
                    
                    //unnötig wenn nur name des features gecheckt wird
                var checkEmail = content[i].data.Email.replace("/" , ".");
                    
                if(content[i] != undefined && checkEmail == loginName){
                      if(content[i].data.Password == loginPW){
                          console.log("accsess");
                          access = true;
                          return true;
                      }else{
                          console.log("Wrong password!");
                      }             
                }else{
                    console.log("user not register");
                }
 
            }
            }
            
            //zum schluss soll der user auf die home seite geschickt werden.
            
            $('#tableDB').removeClass('hidden');
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("no success");
        }
    });
};

function gutenTag(){
    console.log(allUsers);
}