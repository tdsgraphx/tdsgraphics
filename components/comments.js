document.getElementById('comment-form').addEventListener('submit', saveDetails);

function saveDetails(e) {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var url = document.getElementById('url').value;
    var comment = document.getElementById('comment').value;
}

var postItems = {
    name : name,
    email : email,
    url : url,
    commentText : comment
}

    if(localStorage.getItem('post') == null) {

        var postArray = [];
        postArray.push(postItems);
        localStorage.setItem('post',JSON.stringify(postItems));

    } else {

        var postArray = JSON.parse(localStorage.getItem('post'));
        postArray.push(postItems);
        localStorage.setItem('post',JSON.stringify(postItems));
    }

function fetchPosts(){

  var userDate = document.getElementById('postDate');
  var nowDate = new Date();
  var _date = nowDate.getDate();
  var _month = nowDate.getMonth();
  var _year = nowDate.getYear();
  var _time = nowDate.getTime();

  userDate.innerHTML = 'Date and Time: ' + _date + ':' + _month + ':' + _year + ' - ' + _time;
  
    var postItems = JSON.parse(localStorage.getItem('post'));
    var newName = postArray[0].value;
    var newEmail = postArray[1].value;
    var newUrl = postArray[2].value;
    var newComment = postArray[4].value;

    var userName = document.getElementById('userName');
    userName.innerHTML = newName;

    var userEmail = document.getElementById('userName');
    userEmail.innerHTML = newEmail;

    var userUrl = document.getElementById('userName');
    userUrl.innerHTML = newUrl;

    var userComment = document.getElementById('userName');
    userComment.innerHTML = newComment;
}
