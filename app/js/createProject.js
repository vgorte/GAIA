/**
  * @desc Function for creating a folder via an AJAX.POST request.
  * @return AJAX success or error
*/
function createFolder() {
  //Conditional to see if there is a non empty projectname.
  if (document.getElementById("projectName").value == "") {
    console.log("value empty");
  }  else {
    var projectTitle = document.getElementById("projectName").value;
    console.log("createFolder("+projectTitle+")")
    var url = 'http://localhost:3000' + '/addFolder?name=' + projectTitle;
    //AJAX.POST request
    $.ajax({
        type: 'POST',
        url: url,
        timeout: 5000,
        success: function (data, textStatus) {
            console.log("success");
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("error by creating folder");
        }
    });
  }
};

/**
  * @desc Function for deleting a projectFolder via an AJAX.POST request.
  * @return AJAX success or error
*/
function deleteProjectFolder() {
  //Conditional to see if there is a non empty projectname
  if (document.getElementById("deleteProjectFolder").value == "") {
    console.log("value empty");
  }  else {
    var folderTitle = document.getElementById("deleteProjectFolder").value;
    console.log("deleteProjectFolder("+folderTitle+")");
    var url = 'http://localhost:3000' + '/deleteProjectFolder?name=' + folderTitle;
    //AJAX.POST request.
    $.ajax({
        type: 'POST',
        url: url,
        timeout: 5000,
        success: function (data, textStatus) {
            console.log("delete Folder success");
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("error by deleting folder");
        }
    });
  }
};

function readProjectFolder() {
  if (document.getElementById("readProjectFolder").value == "") {
    console.log("value empty");
  }  else {

    var folderRead = "wurstbrot";
    console.log("readProjectFolder("+folderRead+")");

    var url = 'http://localhost:3000' + '/readFolder?name=' + folderRead;
    // perform post ajax
    $.ajax({
        type: 'GET',
        url: url,
        timeout: 5000,
        success: function (content, textStatus) {
            console.log(content);
            console.log("content");
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("no success");
        }
    });
  }
};


//kann vlt weg
function readProject(name) {

    var folderRead = name;
    console.log("readProjectFolder("+folderRead+")");

    var url = 'http://localhost:3000' + '/readFolder?name=' + folderRead;
    // perform post ajax
    $.ajax({
        type: 'GET',
        url: url,
        timeout: 5000,
        success: function (content, textStatus) {
            console.log(content);
            console.log("content");
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("no success");
        }
    });
};
