"use strict;"

var getProjectbyName = function(name, creator) {
    var url = 'http://localhost:3000' + '/getFeatures';
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: url,
        async:false,
        timeout: 5000,
        success: function (content, textStatus) {
            $('#tableDBContents').empty();
            var project;
            for (var i = 0; i <= content.length; i++) {

                if (content[i] != undefined && content[i].data != undefined && content[i].data.Creator == creator && content[i].name == name) {

                    project = content[i];
                    getProject(project);
                    return project;
                }
            }
            $('#tableDB').removeClass('hidden');
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("no success");
        }
    });
    return loadedProject;
};

var loadedProject;
var getProject = function(string){
    //console.log(string);
    loadedProject = string;
}



var saveData = function(name,data){


    var url = 'http://localhost:3000' + '/getFeatures';

  // ajax Post
    $.ajax({
	   url: '/updateFeature?name=' + name,
       //async: false,
       type: "POST",
	   data: data,

       success: function(xhr, textStatus, data){
                            console.log("success");

       },
       error: function(textStatus, errorThrown){
            console.log(errorThrown);
       }
	   });
}

var updateProject = function(name,creator,data){
    // ajax Post
    $.ajax({
        url: '/updateFeature?name=' + name,
        //async: false,
        type: "POST",
        data: data,
        success: function(xhr, textStatus, data){
               console.log("success");
        },
        error: function(textStatus, errorThrown){
        console.log(errorThrown);
        }
    });
}


var updateDB = function(){
    var temp = document.cookie.split("=");
    var user = JSON.parse(temp[1]);
    if (confirm("Are you sure?") == true) {

        } else {
            return;
        }

    $.ajax({
        url: '/deleteFeature?name=' + user.name,
        //async: false,
        type: "POST",
        data: user,
        success: function(xhr, textStatus, data){
               console.log("success");
        },
        error: function(textStatus, errorThrown){
        console.log(errorThrown);
        }
    });

    document.location.href = "index.html";
}
