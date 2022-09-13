// * today popup close
todayOpen('agreePopup0');
// 창열기  
function todayOpen(winName) {
    var blnCookie = getCookie(winName);
    var obj = eval("window." + winName);
    console.log(blnCookie);
    if (!blnCookie) {
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }
}
// 창닫기  
function todayClose(winName, expiredays) {
    setCookie(winName, "expire", expiredays);
    var obj = eval("window." + winName);
    obj.style.display = "none";
}
// 쿠키 가져오기  
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0)
            break;
    }
    return "";
}

// 24시간 기준 쿠키 설정하기  
// 만료 후 클릭한 시간까지 쿠키 설정  
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}



// * today popup close
todayOpen('agreePopup1');
// 창열기  
function todayOpen(winName) {
    var blnCookie = getCookie(winName);
    var obj = eval("window." + winName);
    console.log(blnCookie);
    if (!blnCookie) {
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }
}
// 창닫기  
function todayClose(winName, expiredays) {
    setCookie(winName, "expire", expiredays);
    var obj = eval("window." + winName);
    obj.style.display = "none";
}
// 쿠키 가져오기  
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0)
            break;
    }
    return "";
}

// 24시간 기준 쿠키 설정하기  
// 만료 후 클릭한 시간까지 쿠키 설정  
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}



// * today popup close
todayOpen('agreePopup2');
// 창열기  
function todayOpen(winName) {
    var blnCookie = getCookie(winName);
    var obj = eval("window." + winName);
    console.log(blnCookie);
    if (!blnCookie) {
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }
}
// 창닫기  
function todayClose(winName, expiredays) {
    setCookie(winName, "expire", expiredays);
    var obj = eval("window." + winName);
    obj.style.display = "none";
}
// 쿠키 가져오기  
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0)
            break;
    }
    return "";
}

// 24시간 기준 쿠키 설정하기  
// 만료 후 클릭한 시간까지 쿠키 설정  
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}