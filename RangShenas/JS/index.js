//#region Admin
//نام کاربری مدیر = Admin727801
//رمز مدیر = 727801
//#endregion Admin
//#region lets
let confirm_status;
let modat_marahel = [5, 2];
let darsad_pishraft_tedad_ghesmatha = 50 // سرعت نوار پیشرفت
let marhale

let lbltxt;
let Key_cookie;
let emtiaz_cookie
let namepass;
let Content_cookie;

let nameACU = "";
let passACU = "";
let key = "1";
let buy_key;
let user_key;
let namekey;
var namestatus;

let pasokh_dorost = 0;
let pasokh_ghalat = 0;
let pasokh_khli = 0;
let nameOP = "";
let numberON = "";
let nums = "";
const historyget = [];
let add = [0, 1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let emtiazat = 0;
let tedad_soal_dar_har_marahel = [25, 60]; // 24, 60 --- 25-1, 60
let tedad_marahel = 2;
let modat_mojaz_sabt_pasokh = modat_marahel[0];
let shomareyeh_soal_jari = 0;
let shomareyeh_marhaleyeh_jari = 0;
let vazeiat_time_pasokh;
let kole_soalat = ((tedad_soal_dar_har_marahel[0] + tedad_soal_dar_har_marahel[1] + 1) * tedad_marahel);
let myTimeout = "";
let myspace = "";

let adminshow = "false";
let game_on = "false";
let use_stop_time = "false";
let use_show = "false";
let arry_lxp = [0]
let arry_lyp = [0]
let lxp
let lyp
let arry_lx = [0]
let arry_ly = [0]

let click1, click2, click3, click4, click5, click6, click7;

let divname = ""
let btnrandomnumber = 0;
let colorname = "";
let lbtn = 0;
let chchceck = "false";
let randomNumber;
let btnname, btnhadaf, lb1x, lb1y, lbx, lby, bth, i, clrp;
let start_model = "";
//#region Music lets
let playlist = "";
let playpause_btn = document.querySelector(".playpause-track");
let track_index = 0;
let curr_track = document.createElement('audio');
let playORpause = "playing";
let POP;
let Correct_music = document.getElementById("Correct");
let Wrong_music = document.getElementById("Wrong");
let Welcome_music = document.getElementById("Welcome");
let true_music = document.getElementById("True");
let check_music = "true";
let Play_S = "0";
let play_CW = "0";
let Music_time = "";
let space_play = "";
//#endregion Music lets
//#endregion lets
//#region startup
document.addEventListener('readystatechange', event => {

    if (event.target.readyState === "interactive") {
        myModal_Aboutus()
    }

    if (event.target.readyState === "complete") {
        //alert('Hello friend! \u{1F603}');//https://unicode.org/emoji/charts/emoji-list.html for other emoji...
        login()
    }
});
//#endregion startup
//#region account
function singinbtn() {
    login()
}
//#region login
function login() {
    if (confirm("آیا میخواهید وارد اکانت شوید؟")) {
        if (confirm("آیا شما اکانت دارید؟")) { //اگر اکانت داشت
            nameOP = prompt('نام خود را وارد کنید');
            passOP = prompt('پسورد خود را وارد کنید');
            if (nameOP === "" || passOP === "") {  // اگر اطلاعات کامل نداد
                document.querySelector('#alert-txt').innerHTML = "لطفا کادر ها را کامل پرکنید";
                document.querySelector('#btnalert').click();
                if (confirm("آیا میخواهید دوباره تلاش کنید؟")) { // اگر خواست دوباره شروع کنه
                    location.reload();
                }
                else { // اگر خواست بدون اکانت بیاد
                    document.querySelector('#alert-txt').innerHTML = "به دلیل نداشتن اکانت شما نمیتوانید از امتیازات قبلی خود استفاده کنید و نمیتوانید امتیازات خود را برای دفعات بعدی نگه دارید";
                    document.querySelector('#btnalert').click();
                    gust()
                }
            }
            else if (nameOP === "" & passOP === "") { // اگر اطلاعات کامل نداد
                document.querySelector('#alert-txt').innerHTML = "لطفا کادر ها را کامل پرکنید";
                document.querySelector('#btnalert').click();
                if (confirm("آیا میخواهید دوباره تلاش کنید؟")) { // اگر خواست دوباره شروع کنه
                    location.reload();
                }
                else { // اگر خواست بدون اکانت بیاد
                    document.querySelector('#alert-txt').innerHTML = "به دلیل نداشتن اکانت شما نمیتوانید از امتیازات قبلی خود استفاده کنید و نمیتوانید امتیازات خود را برای دفعات بعدی نگه دارید";
                    document.querySelector('#btnalert').click();
                    gust()
                }
            }
            else if (nameOP !== "" & passOP !== "") { // اگر اطلاعات کامل بود

                namepass = nameOP + "2";

                Content_cookie = getCookie(namepass);
                if (nameOP === "Admin727801" & passOP === "727801") { // اگر ادمین بود
                    adminshow = "true";
                    document.querySelector("#username").innerHTML = "SiteAdminMode";
                    document.querySelector("#password").innerHTML = "SiteAdminMode";
                    document.getElementById("show_keys").innerHTML = "999";
                    user_key = parseInt(999);
                    emtiazat = parseInt(999);
                    document.querySelector('#alert-txt').innerHTML = "شما با ورود به عنوان ادمین میتوانید از گزینه های تقلب به راحتی استفاده کنید";
                    document.querySelector('#btnalert').click();
                    namestatus = nameOP + "1";
                    checkStatus()
                }
                else if (passOP === Content_cookie) { // اگر رمزش درست بود
                    document.querySelector("#username").innerHTML = nameOP;
                    document.querySelector("#password").innerHTML = passOP;
                    emtiaz_cookie = getCookie(nameOP);
                    emtiazat = parseInt(emtiaz_cookie);
                    namekey = nameOP + "3";
                    Key_cookie = getCookie(namekey);
                    document.getElementById("show_keys").innerHTML = parseInt(Key_cookie);
                    user_key = parseInt(Key_cookie);

                    namestatus = nameOP + "1";
                    checkStatus()
                }
                else if (passOP !== Content_cookie) { // اگر رمزش غلط بود
                    document.querySelector('#alert-txt').innerHTML = "پسورد اشتباه است";
                    document.querySelector('#btnalert').click();
                    if (confirm("آیا میخواهید دوباره تلاش کنید؟")) { // اگر خواست دوباره شروع کنه
                        location.reload();
                    }
                    else { // اگر خواست بدون اکانت بیاد
                        document.querySelector('#alert-txt').innerHTML = "به دلیل نداشتن اکانت شما نمیتوانید از امتیازات قبلی خود استفاده کنید و نمیتوانید امتیازات خود را برای دفعات بعدی نگه دارید";
                        document.querySelector('#btnalert').click();
                        gust()
                    }
                }
            }
        }
        else { // اگر اکانت نداشت
            if (confirm("آیا شما میخواهید اکانت بسازید؟")) { // اگر خواست اکانت بسازه
                nameOP = prompt('نام مورد نظر خود را وارد کنید');
                passOP = prompt('پسورد مورد نظر خود را وارد کنید');
                if (nameOP === "" || passOP === "") {
                    document.querySelector('#alert-txt').innerHTML = "لطفا کادر ها را کامل پرکنید";
                    document.querySelector('#btnalert').click();
                    if (confirm("آیا میخواهید دوباره تلاش کنید؟")) {
                        location.reload();
                    }
                    else {  // اگر خواست بدون اکانت بیاد
                        document.querySelector('#alert-txt').innerHTML = "به دلیل نداشتن اکانت شما نمیتوانید از امتیازات قبلی خود استفاده کنید و نمیتوانید امتیازات خود را برای دفعات بعدی نگه دارید";
                        document.querySelector('#btnalert').click();
                        gust()
                    }
                }
                else if (nameOP === "" & passOP === "") { // اگر اطلاعات کامل نبود
                    document.querySelector('#alert-txt').innerHTML = "لطفا کادر ها را کامل پرکنید";
                    document.querySelector('#btnalert').click();
                    if (confirm("آیا میخواهید دوباره تلاش کنید؟")) {
                        location.reload();
                    }
                    else {  // اگر خواست بدون اکانت بیاد
                        document.querySelector('#alert-txt').innerHTML = "به دلیل نداشتن اکانت شما نمیتوانید از امتیازات قبلی خود استفاده کنید و نمیتوانید امتیازات خود را برای دفعات بعدی نگه دارید";
                        document.querySelector('#btnalert').click();
                        gust()
                    }
                }
                else if (nameOP !== "" & passOP !== "") { // اگر اطلاعات کامل بود
                    document.querySelector("#username").innerHTML = nameOP;
                    document.querySelector("#password").innerHTML = passOP;

                    user_key = parseInt(key)
                    lbltxt = document.getElementById("show_keys");
                    lbltxt.innerHTML = parseInt(user_key);

                    setCookie(nameOP, emtiazat, 365);
                    namepass = nameOP + "2";
                    setCookie(namepass, passOP, 365);

                    document.querySelector("#snackbar").innerHTML = "اکانت شما با موفقیت ساخته شد"
                    snackbar()
                }
                check_music = "true";
                Play_S = "0";
                loadTrack(track_index);
                Audiobtn()
            }
            else { // اگر خواست بدون اکانت بیاد
                document.querySelector('#alert-txt').innerHTML = "به دلیل نداشتن اکانت شما نمیتوانید از امتیازات قبلی خود استفاده کنید و نمیتوانید امتیازات خود را برای دفعات بعدی نگه دارید";
                document.querySelector('#btnalert').click();
                if (confirm("آیا میخواهید دوباره تلاش کنید؟")) { // اگر خواست دوباره بیاد
                    location.reload();
                }
                else {
                    gust()
                }
            }

        }
        Welcome_music_play()
        document.querySelector("#login-singout").innerHTML = "<i class='fa fa-user-plus'></i> تعویض ";
        document.querySelector("#snackbar").innerHTML = "خوش آمدید"
        snackbar()

        function gust() {
            check_music = "true";
            Play_S = "0";
            loadTrack(track_index);
            Audiobtn()
            document.querySelector("#username").innerHTML = "مهمان";
            document.querySelector("#password").innerHTML = "...";
            user_key = parseInt(key)
            lbltxt = document.getElementById("show_keys");
            lbltxt.innerHTML = parseInt(user_key);
        }
    }
    else {
        Welcome_music_play()
        document.querySelector("#snackbar").innerHTML = "خوش آمدید"
        snackbar()
        document.querySelector("#username").innerHTML = "مهمان";
        document.querySelector("#password").innerHTML = "...";
        user_key = parseInt(key)
        lbltxt = document.getElementById("show_keys");
        lbltxt.innerHTML = parseInt(user_key);

    }

}
//#endregion login
//#endregion account
//#region Shop
function shop() {
    myModal_Shop()
}
function buy_item() {
    document.querySelector('#myModal_Shop > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').click();
    buy_key = prompt("چه تعداد کلید میخواهید؟");
    price = buy_key * 4;
    if (price <= emtiazat) {
        if (confirm(" آیا میخواهید با " + price + " امتیاز " + buy_key + " کلید بخرید؟ ")) {
            emtiazat = parseInt(emtiazat) - parseInt(price)
            document.querySelector(".emtiaz").innerHTML = emtiazat + " = امتیاز شما"
            user_key = parseInt(user_key) + parseInt(buy_key);
            document.getElementById("show_keys").innerHTML = parseInt(user_key);

            true_music_play()
            document.querySelector("#snackbar").innerHTML = "خرید با موفقیت انجام شد"
            snackbar()
        }
        else {
            document.querySelector("#snackbar").innerHTML = "خرید لغو شد"
            snackbar()
        }
    }
    else {
        document.querySelector('#myModal_Shop > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').click();
        document.querySelector("#snackbar").innerHTML = "شما امتیاز کافی ندارید"
        snackbar()
    }

}
//#endregion Shop
//#region start next finish
function starta() {
    game_on = "true";
    hide_show_start()
    btnlocation()
    stop_timer_dasti()
    changecolor()
    next()
    start_model = "a"
}
function startb() {
    game_on = "true";
    hide_show_start()
    btnlocation()
    stop_timer_dasti()
    changecolor()
    next()
    start_model = "b"
}
function next() {

    stop_timer_dasti()
    use_stop_time = "false";
    shomareyeh_soal_jari++;
    tedad_mojaz_marhalayeh_jari = tedad_soal_dar_har_marahel;
    shomareyeh_marhaleyeh_jari___bar_asas___shomareye_soal_jari()
    document.querySelector(".emtiaz").innerHTML = emtiazat + " = امتیاز شما"
    document.querySelector(".dorost").innerHTML = pasokh_dorost + " = پاسخ های صحیح شما"
    document.querySelector(".ghalat").innerHTML = pasokh_ghalat + " = پاسخ های غلط شما"
    document.querySelector(".khali").innerHTML = pasokh_khli + " = سوالات بی پاسخ شما"
    document.querySelector(".marhale").innerHTML = shomareyeh_marhaleyeh_jari + " مرحله "
    document.querySelector(".soal").innerHTML = shomareyeh_soal_jari + " سوال "
    if (shomareyeh_soal_jari === 61 & shomareyeh_marhaleyeh_jari === 2) {
        hide_show_end()
        stop_timer_dasti()
        finish()
    }
    else if (start_model === "a" || "b") {
        if (start_model === "b") {
            btnlocation()
        }
        changecolor()
    }
    marhale = shomareyeh_marhaleyeh_jari - 1
    myTimeout = setTimeout(start_timer, 1000 * modat_marahel[marhale]);
    start_navar_pishraft()
}
function finish() {
    if (adminshow !== "true") { // اگر ادمین نبود
        if (confirm("آیا میخواهید امتیاز خود را ذخیره کنید و دفعات بعد از ان استفاده کنید؟")) { // اگر خواست ذخیره کنه

            var paragraf = document.querySelector("#username")
            if (paragraf.innerHTML === "" || paragraf.innerHTML === "مهمان") { // اگر اکانت نداشت
                if (confirm("آیا میخواهید برای نگداری امتیاز خود یک اکانت بسازید؟")) { // اگر اکانت نداشت
                    nameOP = prompt('نام خود را وارد کنید');
                    setCookie(nameOP, emtiazat, 365);
                    namepass = nameOP + "2";
                    passOP = prompt('پسورد خود را وارد کنید');
                    setCookie(namepass, passOP, 365);
                    namekey = nameOP + "3";
                    setCookie(namekey, user_key, 365);
                    namestatus = nameOP + "1";
                    if (confirm("آیا میخواهید در بازی بعدی هم وضعیت موسیقی شما در همین حالت بماند؟")) { // اگر خواست حالت موسیقی را ذخیره کنه
                        setCookie(namestatus, playORpause, 365);
                    }

                }
                else { // اگر نخواست امتیاز را نگه دارد
                    document.querySelector("#snackbar").innerHTML = "امتیاز شما نگه داری نشد"
                    snackbar()
                }

            }
            else { // اگر اکانت داشت
                setCookie(nameOP, emtiazat, 365);
                namestatus = nameOP + "1";
                setCookie(namepass, passOP, 365);
                namekey = nameOP + "3";
                setCookie(namekey, user_key, 365);
                if (confirm("آیا میخواهید در بازی بعدی هم وضعیت موسیقی شما در همین حالت بماند؟")) {
                    setCookie(namestatus, playORpause, 365);
                }
            }
        }
        else { // اگر نخواست امتیاز را نگه دارد
            document.querySelector("#snackbar").innerHTML = "امتیاز شما نگه داری نشد"
            snackbar()
        }
    }
    else if (adminshow === "true") { // اگر ادمین بود
        document.querySelector('#alert-txt').innerHTML = "در حالت ادمین نمیتوانید امتیاز و تنظیمات خود را ذخیره کنید";
        document.querySelector('#btnalert').click();
    }


}
//#endregion start next finish
//#region timer        
function start_timer() {
    clearTimeout(myTimeout);
    if (shomareyeh_soal_jari <= kole_soalat) {
        next() // سوال بعدی
        pasokh_khli++
        document.querySelector(".emtiaz").innerHTML = emtiazat + " = امتیاز شما"
        document.querySelector(".dorost").innerHTML = pasokh_dorost + " = پاسخ های صحیح شما"
        document.querySelector(".ghalat").innerHTML = pasokh_ghalat + " = پاسخ های غلط شما"
        document.querySelector(".khali").innerHTML = pasokh_khli + " = سوالات بی پاسخ شما"
        document.querySelector(".marhale").innerHTML = shomareyeh_marhaleyeh_jari + " مرحله "
        document.querySelector(".soal").innerHTML = shomareyeh_soal_jari + " سوال "
    }
    else {
        stop_timer_dasti()
    }

}
function stop_timer_dasti() {
    clearTimeout(myTimeout);
    document.querySelector("#navar").style.width = "0%";
    document.querySelector("#navar").innerHTML = "0%"
    stop_navar_pishraft()
}
//#endregion timer        
//#region hide & show
function hide_show_start() {
    document.querySelector(".buttonstart").style.display = "none"
    document.querySelector(".answer_btn").style.display = "inline"
    for (let nb = 1; nb <= 5; nb++) {
        btnname = document.querySelector("#btn" + nb)
        btnname.style.display = "inline";
    }
    document.querySelector('#callout').style.display = 'none';
}
function hide_show_end() {
    document.querySelector(".answer_btn").style.display = "none"
    for (let nb = 1; nb <= 5; nb++) {
        btnname = document.querySelector("#btn" + nb)
        btnname.style.display = "none";
    }
    document.querySelector("#navar-pishraft").style.display = "none"
    document.querySelector("#area").style.display = "none"
    //#region Chart
    var xArray = ["غلط", "بدون پاسخ", "درست"];
    var yArray = [pasokh_ghalat, pasokh_khli, pasokh_dorost];

    var layout = { title: "" };

    var data = [{ labels: xArray, values: yArray, hole: .4, type: "pie" }];

    Plotly.newPlot("myPlot", data, layout);
    //#endregion Chart


}
function hide_show_account() {
    document.querySelector("#accountbtn").style.display = "inline"
    document.querySelector("#outbtn").style.display = "inline"
    document.querySelector("#area").style.display = "inline"
    document.querySelector("#myChart").style.display = 'inline';
}
//#endregion hide & show
//#region Buttoms
function btn1() {
    resetclick()
    click1 = 1
    trueanswer()
    btncolor = document.querySelector("#btn1").style.backgroundColor

    if (colorname === btncolor) {
        truebtn()
    }
    else if (colorname !== btncolor) {
        falsebtn()
    }
    btnclick()
}
function btn2() {
    resetclick()
    click2 = 1
    trueanswer()
    btncolor = document.querySelector("#btn2").style.backgroundColor

    if (colorname === btncolor) {
        truebtn()
    }
    else if (colorname !== btncolor) {
        falsebtn()
    }
    btnclick()
}
function btn3() {
    resetclick()
    click3 = 1
    trueanswer()
    btncolor = document.querySelector("#btn3").style.backgroundColor

    if (colorname === btncolor) {
        truebtn()
    }
    else if (colorname !== btncolor) {
        falsebtn()
    }
    btnclick()
}
function btn4() {
    resetclick()
    click4 = 1
    trueanswer()
    btncolor = document.querySelector("#btn4").style.backgroundColor

    if (colorname === btncolor) {
        truebtn()
    }
    else if (colorname !== btncolor) {
        falsebtn()
    }
    btnclick()
}
function btn5() {
    resetclick()
    click5 = 1
    trueanswer()
    btncolor = document.querySelector("#btn5").style.backgroundColor

    if (colorname === btncolor) {
        truebtn()
    }
    else if (colorname !== btncolor) {
        falsebtn()
    }
    btnclick()
}

function trueanswer() {
    clrp = document.querySelector(".colorshow").innerHTML

    if (clrp === "قرمــــــــــــــــــــز") {
        colorname = "red"
    }
    else if (clrp === "زرد") {
        colorname = "yellow"
    }
    else if (clrp === "سبــــــــــــــــــــز") {
        colorname = "green"
    }
    else if (clrp === "آبــــــــــــــــــــی") {
        colorname = "aqua"
    }
    else if (clrp === "سفیــــــــــــــــــــد") {
        colorname = "white"
    }
}

function btnclick() {
    document.querySelector(".emtiaz").innerHTML = emtiazat + " = امتیاز شما"
    document.querySelector(".dorost").innerHTML = pasokh_dorost + " = پاسخ های صحیح شما"
    document.querySelector(".ghalat").innerHTML = pasokh_ghalat + " = پاسخ های غلط شما"
    document.querySelector(".khali").innerHTML = pasokh_khli + " = سوالات بی پاسخ شما"
    stop_timer_dasti()
    next()
}
function truebtn() {
    emtiazat++
    pasokh_dorost++;
    Correct_music_play()
}
function falsebtn() {
    emtiazat -= 2;
    pasokh_ghalat++;
    Wrong_music_play()
}
function resetclick() {
    for (let bn = 1; bn <= 7; bn++) {
        fc = ("click" + bn)
        fc = 0
    }
}
//#endregion colorbtn
//#region Music
playlist = [
    {
        path: "Musics/Music (1).mp3"
    },
    {
        path: "Musics/Music (2).mp3"
    },
    {
        path: "Musics/Music (3).mp3",
    },
    {
        path: "Musics/Music (4).mp3",
    },
    {
        path: "Musics/Music (6).mp3",
    },
    {
        path: "Musics/Music (7).mp3",
    },
];
function Audiobtn() {

    if (check_music === "true" & Play_S === "0") {
        curr_track.play();
        check_music = "false"
        Play_S = "1"
        document.querySelector("#apbtn").innerHTML = "<i class='fa fa-pause-circle'></i>"
        playORpause = "playing"
    }
    else if (check_music === "false" & Play_S === "1") {
        clearTimeout(Music_time);
        curr_track.pause();
        check_music = "true"
        Play_S = "0"
        document.querySelector("#apbtn").innerHTML = "<i class='fa fa-play-circle'></i>"
        playORpause = "pause"
    }
}

function Correct_music_play() {
    check_music = "false"
    play_CW = "1"
    POP = playORpause
    Audiobtn()
    Correct_music.play();
    space_play = setTimeout(space_play_music, 1000);
}
function Wrong_music_play() {
    check_music = "false"
    play_CW = "1"
    POP = playORpause
    Audiobtn()
    Wrong_music.play();
    space_play = setTimeout(space_play_music, 1000);
}
function Welcome_music_play() {
    document.querySelector("#snackbar").innerHTML = "خوش آمدید"
    snackbar()
    check_music = "false"
    play_CW = "1"
    POP = playORpause
    Audiobtn()
    Welcome_music.play();
    space_play = setTimeout(space_play_music, 2000);
}
function true_music_play() {
    check_music = "false"
    play_CW = "1"
    POP = playORpause
    Audiobtn()
    true_music.play();
    space_play = setTimeout(space_play_music, 500);
}
function space_play_music() {
    clearTimeout(space_play);
    if (POP === "playing") {
        play_CW = "0";
        check_music = "true";
        Play_S = "0";
        loadTrack(track_index);
        Audiobtn()
    }
    else if (POP === "pause") {
        play_CW = "0";
        check_music = "false";
        Play_S = "1";
        loadTrack(track_index);
        Audiobtn()
    }
}
//#endregion Music
//#region Music player
function loadTrack(track_index) {
    curr_track.src = playlist[track_index].path;
    curr_track.load();
    curr_track.addEventListener("ended", nextTrack);
}

function nextTrack() {
    if (track_index < playlist.length - 1)
        track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    check_music = "true"
    Play_S = "0"
    Audiobtn();
}

function prevTrack() {
    if (track_index > 0)
        track_index -= 1;
    else track_index = playlist.length;
    loadTrack(track_index);
    check_music = "true"
    Play_S = "0"
    Audiobtn();
}
//#endregion Music player
//#region tools
function reload() {
    location.reload();
}
function random(start, end) {
    randomNumber = start + Math.floor(Math.random() * (end - start));
}
function getRndInteger(min, max) {
    max++;
    return parseInt(Math.floor(Math.random() * (max - min)) + min);
}
function tolid_adad_tasadofi_bedon_tekrar(tedad) {
    const list = [];
    var c = 1;
    while (list.length < tedad) {
        var adad_tasadofi = getRndInteger(0, tedad - 1);
        if (list.indexOf(adad_tasadofi) === -1) {
            list.push(adad_tasadofi);
        }
        c++;
    }
    return list;
}
function snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function shomareyeh_marhaleyeh_jari___bar_asas___shomareye_soal_jari() {
    if (shomareyeh_marhaleyeh_jari === 0) {
        shomareyeh_marhaleyeh_jari = 1
    }
    else if (shomareyeh_soal_jari <= tedad_soal_dar_har_marahel[0] & shomareyeh_marhaleyeh_jari === 1) {
        if (shomareyeh_soal_jari === tedad_soal_dar_har_marahel[0]) {
            shomareyeh_marhaleyeh_jari = 2
            shomareyeh_soal_jari = 1
        }
        else if (shomareyeh_soal_jari < tedad_soal_dar_har_marahel[0]) {
            shomareyeh_marhaleyeh_jari = 1
        }
    }
    else if (shomareyeh_soal_jari <= tedad_soal_dar_har_marahel[1] & shomareyeh_marhaleyeh_jari === 2) {
        if (shomareyeh_soal_jari < tedad_soal_dar_har_marahel[1]) {
            shomareyeh_marhaleyeh_jari = 2
        }
    }

}

function true_confirm() {
    confirm_status = "true";
    document.querySelector("#Confirm").style.display = "none";
    
}
function false_confirm() {
    confirm_status = "false";
    document.querySelector("#Confirm").style.display = "none";
    
}
//#endregion tools
//#region btn tools
function btnlocation() {
    if (start_model = "b") {
        for (lbtn = 1; lbtn <= 5; lbtn++) {

            random(1, 30)
            if (add[randomNumber] != 0) {
                add[randomNumber] = 0
                divname = document.querySelector("#grid" + randomNumber)
                btnname = document.querySelector("#btn" + lbtn)
                divname.appendChild(btnname);
            }
            else {
                chchceck = "false"
                checkrandom()
            }
        }
    }
    else if (start_model = "a") {
        for (lbtn = 1; lbtn <= 5; lbtn++) {

            random(1, 30)
            if (add[randomNumber] != 0) {
                add[randomNumber] = 0
                divname = document.querySelector("#grid" + randomNumber)
                btnname = document.querySelector("#btn" + lbtn)
                divname.appendChild(btnname);
            }
            else {
                chchceck = "false"
                checkrandom()
            }
        }
    }
    changecolor()
    add = [0, 1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

}
function checkrandom() {
    for (c = 1; chchceck === "true"; c++) {

        random(1, 30)
        if (add[randomNumber] != 0) {
            chchceck = "true"
            add[randomNumber] = 0
            divname = document.querySelector("#grid" + randomNumber)
            btnname = document.querySelector("#btn" + lbtn)
            divname.appendChild(btnname);
        }
        else {
            checkrandom()
        }
    }
}
function changecolor() {
    if (start_model === "b") {
        btnrandomnumber = tolid_adad_tasadofi_bedon_tekrar(5);
        let aray_colors = ["red", "yellow", "green", "aqua", "white"];
        for (let color = 1; color <= 5; color++) {
            let num = color
            let nam = color - 1
            document.querySelector("#btn" + num).style.backgroundColor = aray_colors[btnrandomnumber[nam]]
        }

        random(0, 6)

        if (randomNumber === 1) {
            document.querySelector(".colorshow").innerHTML = "قرمــــــــــــــــــــز"
        }
        else if (randomNumber === 2) {
            document.querySelector(".colorshow").innerHTML = "زرد"
        }
        else if (randomNumber === 3) {
            document.querySelector(".colorshow").innerHTML = "سبــــــــــــــــــــز"
        }
        else if (randomNumber === 4) {
            document.querySelector(".colorshow").innerHTML = "آبــــــــــــــــــــی"
        }
        else if (randomNumber === 5) {
            document.querySelector(".colorshow").innerHTML = "سفیــــــــــــــــــــد"
        }
    }
    else if (start_model === "a") {
        btnrandomnumber = tolid_adad_tasadofi_bedon_tekrar(5);
        let aray_colors = ["red", "yellow", "green", "aqua", "white"];
        for (let color = 1; color <= 5; color++) {
            let num = color
            let nam = color - 1
            document.querySelector("#btn" + num).style.backgroundColor = aray_colors[btnrandomnumber[nam]]
        }

        random(0, 6)

        if (randomNumber === 1) {
            document.querySelector(".colorshow").innerHTML = "قرمــــــــــــــــــــز"
        }
        else if (randomNumber === 2) {
            document.querySelector(".colorshow").innerHTML = "زرد"
        }
        else if (randomNumber === 3) {
            document.querySelector(".colorshow").innerHTML = "سبــــــــــــــــــــز"
        }
        else if (randomNumber === 4) {
            document.querySelector(".colorshow").innerHTML = "آبــــــــــــــــــــی"
        }
        else if (randomNumber === 5) {
            document.querySelector(".colorshow").innerHTML = "سفیــــــــــــــــــــد"
        }
    }
}
//#endregion btn tools
//#region options
function end() {
    if (game_on === "true") { // اگر بازی شروع شده بود
        if (confirm("آیا میخواهید بازی را به پایان برسانید؟")) {
            hide_show_end()
            stop_timer_dasti()
            finish()
            document.querySelector("#snackbar").innerHTML = "بازی به پایان رسید"
            snackbar()
        }
        else {
            document.querySelector("#snackbar").innerHTML = "شما بازی را ادامه دادید"
            snackbar()
        }
    }
    else { // اگر بازی شروع نشده بود
        document.querySelector("#snackbar").innerHTML = "بازی هنوز شروع نشده است"
        snackbar()
    }

}
function stop_time() {
    if (game_on === "true") { // اگر بازی شروع شده بود
        if (adminshow !== "true") { // اگر ادمین نبود
            if (use_stop_time === "false") { // اگر قبلا استفاده نکرده بود

                if (confirm("درصورت استفاده از دکمه توقف زمان پاسخ 1 کلید از شما کسر خواهد شد")) { // اگر میخواست استفاده کنه
                    if (user_key >= 1) { // اگر کلید داشت
                        stop_timer_dasti()

                        true_music_play()
                        document.querySelector("#snackbar").innerHTML = "خرید با موفقیت انجام شد"
                        snackbar()
                        user_key -= 1;
                        document.getElementById("show_keys").innerHTML = parseInt(user_key);
                        use_stop_time = "true";
                    }
                    else { // اگر کلید نداشت
                        document.querySelector("#snackbar").innerHTML = "شما کلید کافی ندارید"
                        snackbar()
                    }
                }
                else { // اگر نخواست استفاده کنه
                    document.querySelector("#snackbar").innerHTML = "شما زمان را نگه نداشتید"
                    snackbar()
                }
            }
            else { // اگر قبلا استفاده کرده بود

                document.querySelector("#snackbar").innerHTML = "شما نمیتوانید در یک سوال دوبار از این دکمه استفاده کنید"
                snackbar()
            }
        }
        else { // اگر ادمین بود
            stop_timer_dasti()
        }
    }
    else { // اگر بازی شروع نشده بود
        document.querySelector("#snackbar").innerHTML = "بازی هنوز شروع نشده است"
        snackbar()
    }
}
function hourglass() {
    var a;
    a = document.querySelector("#stop_time");
    a.innerHTML = "<i class='fa fa-hourglass-1'></i>" + " توقف زمان ";
    setTimeout(function () {
        a.innerHTML = "<i class='fa fa-hourglass-2'></i>" + " توقف زمان ";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "<i class='fa fa-hourglass-3'></i>" + " توقف زمان ";
    }, 2000);
}
hourglass();
setInterval(hourglass, 3000);

//#endregion options
//#region cookies
function historybtn() {
    numberON = prompt('(عدد)چه تعداد تاریخچه میخواهید؟');

    if (numberON == "") {
        document.querySelector('#alert-txt').innerHTML = "لطفا یک عدد وارد کنید";
        document.querySelector('#btnalert').click();
    }
    else {
        for (var n = 0; n < numberON; n++) {
            historyget[n] = prompt('تاریخچه شماره: ' + (n + 1))
        }
        if (historyget[0] === "") {
            document.querySelector('#alert-txt').innerHTML = "لطفا اسم بازیکن را وارد کنید";
            document.querySelector('#btnalert').click();
        }
        else {
            checkCookie()
        }

    }
}
function setCookie(cookie_name, cookie_value, exdays) {
    var mydate, expires, get_userinput;
    mydate = new Date();
    mydate.setTime(mydate.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = "expires=" + mydate.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
}
function getCookie(cookie_name) {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    const Content_cookie = [];
    var result;
    result = document.getElementById("history_text");
    for (let x = 0; x < numberON; x++) {
        Content_cookie[x] = getCookie(historyget[x]);
    }
    result.innerHTML = historyget[0] + ':' + Content_cookie[0];
    for (var n = 1; n < numberON; n++) {
        result.innerHTML += ' <br/>' + historyget[n] + ':' + " " + Content_cookie[n];
    }
    myModal_history()
}
function checkStatus() {
    var Content_cookie;
    namestatus = nameOP + "1";
    Content_cookie = getCookie(namestatus);
    if (Content_cookie === "playing") {
        check_music = "true";
        Play_S = "0";
        loadTrack(track_index);
        Audiobtn()
    }
    else if (Content_cookie === "pause") {
        check_music = "false";
        Play_S = "1";
        loadTrack(track_index);
        Audiobtn()
    }
    else if (Content_cookie === "") {
        check_music = "true";
        Play_S = "0";
        loadTrack(track_index);
        Audiobtn()
    }
    else {
        check_music = "true";
        Play_S = "0";
        loadTrack(track_index);
        Audiobtn()
    }
}
//#endregion cookies
//#region navar_pishraft

let myInterval_navar_pishraft = ""

function start_navar_pishraft() {
    shomareyeh_marhaleyeh_jari___bar_asas___shomareye_soal_jari()
    document.querySelector("#navar").style.width = "0%";
    marhale = shomareyeh_marhaleyeh_jari - 1
    myInterval_navar_pishraft = setInterval(navar_pishraft_harekat, (modat_marahel[marhale] * 1000) / (darsad_pishraft_tedad_ghesmatha))
    document.querySelector(".zaman").innerHTML = "زمان باقی مانده: 0";
    function zaman() {
        var a;
        a = document.querySelector(".zaman");
        if (shomareyeh_marhaleyeh_jari === 1) {
            a.innerHTML = "زمان باقی مانده: 5";
            setTimeout(function () { a.innerHTML = "زمان باقی مانده: 4"; }, 1000);
            setTimeout(function () { a.innerHTML = "زمان باقی مانده: 3"; }, 2000);
            setTimeout(function () { a.innerHTML = "زمان باقی مانده: 2"; }, 3000);
            setTimeout(function () { a.innerHTML = "زمان باقی مانده: 1"; }, 4000);
        }
        else if (shomareyeh_marhaleyeh_jari === 2) {
            a.innerHTML = "زمان باقی مانده: 2";
            setTimeout(function () { a.innerHTML = "زمان باقی مانده: 1"; }, 1000);
        }

    }
    zaman();
}

let navar_pishraft_harekat_c = 0
function navar_pishraft_harekat() {
    navar_pishraft_harekat_c++
    let indexof_darsad = document.querySelector("#navar").style.width.indexOf("%");
    let adad_darsad_pishraft = document.querySelector("#navar").style.width.substring(0, indexof_darsad)
    adad_darsad_pishraft = parseInt(adad_darsad_pishraft) + parseInt(100 / darsad_pishraft_tedad_ghesmatha);
    document.querySelector("#navar").style.width = adad_darsad_pishraft + "%"
    document.querySelector("#navar").innerHTML = adad_darsad_pishraft + "%"
}

function stop_navar_pishraft() {
    if (shomareyeh_soal_jari === 60 & shomareyeh_marhaleyeh_jari === 2) {
        clearInterval(myInterval_navar_pishraft);
        document.querySelector("#navar-pishraft").style.display = 'none';
        document.querySelector("#navar").style.display = 'none';
    }
    else {
        clearInterval(myInterval_navar_pishraft);
    }
}

//#endregion navar_pishraft
//#region modals
//#region modal_Aboutus
var modal_Aboutus = document.getElementById("myModal_Aboutus");
var btn_a = document.getElementById("Aboutus");
var span_a = document.getElementsByClassName("close")[0];

btn_a.onclick = function () {
    modal_Aboutus.style.display = "block";
}
function myModal_Aboutus() {
    modal_Aboutus.style.display = "inline";
}

span_a.onclick = function () {

    modal_Aboutus.style.display = "none";

}

window.onclick = function (event) {
    if (event.target == modal_Aboutus) {
        modal_Aboutus.style.display = "none";
    }
}
//#endregion modal_Aboutus
//#region modal_rahnama
var modal_rahnama = document.getElementById("myModal_rahnama");
var btn_r = document.getElementById("rahnamabtn");
var span_r = document.getElementsByClassName("close")[1];

btn_r.onclick = function () {
    modal_rahnama.style.display = "block";
}

function rahnamabtn() {
    modal_rahnama.style.display = "inline";
}

span_r.onclick = function () {
    modal_rahnama.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal_rahnama) {
        modal_rahnama.style.display = "none";
    }
}
//#endregion modal_rahnama
//#region modal_account
var mymodal_account = document.getElementById("myModal_account");
var btn_r = document.getElementById("accountbtn");
var span_r = document.getElementsByClassName("close")[3];

btn_r.onclick = function () {
    mymodal_account.style.display = "block";
}

function accountbtn() {
    mymodal_account.style.display = "inline";
}

span_r.onclick = function () {
    mymodal_account.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == mymodal_account) {
        mymodal_account.style.display = "none";
    }
}
//#endregion modal_rahnama
//#region modal_Shop

var modal_Shop = document.getElementById("myModal_Shop");
var btn_a = document.getElementById("Modal-Shop");
var span_a = document.getElementsByClassName("close")[4];

btn_a.onclick = function () {
    modal_Shop.style.display = "block";
}
function myModal_Shop() {
    modal_Shop.style.display = "inline";
}

span_a.onclick = function () {

    modal_Shop.style.display = "none";

}

window.onclick = function (event) {
    if (event.target == modal_Shop) {
        modal_Shop.style.display = "none";
    }
}

//#endregion modal_Shop
//#region modal_history
var modal_history = document.getElementById("myModal_history");
var btn_h = document.getElementById("history");
var span_h = document.getElementsByClassName("close")[2];

function myModal_history() {
    modal_history.style.display = "inline";
}

span_h.onclick = function () {

    modal_history.style.display = "none";

}

window.onclick = function (event) {
    if (event.target == modal_history) {
        modal_history.style.display = "none";
    }
}

//#endregion modal_history

//#region modal_evenets
document.querySelector('#myModal_Aboutus').addEventListener('click', function () {
    document.querySelector('#myModal_Aboutus > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').click();
});
document.querySelector('#myModal_rahnama').addEventListener('click', function () {
    document.querySelector('#myModal_rahnama > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').click();
});
document.querySelector('#myModal_history').addEventListener('click', function () {
    document.querySelector('#myModal_history > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').click();
});
document.querySelector('#myModal_account').addEventListener('click', function () {
    document.querySelector('#myModal_account > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').click();
});
document.querySelector('#myModal_Shop').addEventListener('click', function () {
    document.querySelector('#myModal_Shop > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').click();
});
//#endregion modal_events
//#endregion modals
