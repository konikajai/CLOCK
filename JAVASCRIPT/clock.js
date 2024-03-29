// ANALOG CLOCK
setInterval(function(){
    let arrow1 = document.querySelector('.container1');
    let arrow2 = document.querySelector('.container2');
    let arrow3 = document.querySelector('.container3');
    
    let hours=new Date().getHours()*30;
    let minutes=new Date().getMinutes()*6;
    let seconds=new Date().getSeconds()*6;

    arrow1.style.transform="rotate("+hours+"deg)";
    arrow2.style.transform="rotate("+minutes+"deg)";
    arrow3.style.transform="rotate("+seconds+"deg)";
},1000)

//DIGITAL CLOCK
function digital_clock(){
    let for_hour=document.querySelector('.for_hour');
    let for_minute=document.querySelector('.for_minute');
    let for_second=document.querySelector('.for_second');
    let for_ampm=document.querySelector('.for_ampm');
    
    let for_HOURS=new Date().getHours();
    let for_MINUTES=new Date().getMinutes();
    let for_SECONDS=new Date().getSeconds();
    
    let for_AMPM="AM";
    if(for_HOURS>12){
        for_AMPM="PM";
        for_ampm.textContent=for_AMPM;
        for_HOURS=for_HOURS-12;
    }

    else if(for_HOURS===12){
        for_AMPM="PM";
        for_ampm.textContent=for_AMPM;
    }

    for_hour.textContent=for_HOURS;
    for_minute.textContent=for_MINUTES;
    for_second.textContent=for_SECONDS;

    let colon1=document.querySelector('.colon1');
    let colon2=document.querySelector('.colon2');

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let random_color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    colon1.style.color=random_color;
    colon2.style.color=random_color;

    setTimeout(()=>{
        digital_clock()
    },1000);
}

digital_clock();

// setInterval(function(){
//     let for_hour=document.querySelector('.for_hour');
//     let for_minute=document.querySelector('.for_minute');
//     let for_second=document.querySelector('.for_second');
//     let for_ampm=document.querySelector('.for_ampm');
    
//     let for_HOURS=new Date().getHours();
//     let for_MINUTES=new Date().getMinutes();
//     let for_SECONDS=new Date().getSeconds();
    
//     if(for_HOURS>12){
//         for_ampm="PM";
//         for_ampm.innerText=for_ampm;
//         for_HOURS=for_HOURS-12;
//     }

//     else if(for_HOURS==12){
//         for_ampm="PM";
//         for_ampm.innerText=for_ampm;
//     }

//     for_hour.textContent=for_HOURS;
//     for_minute.textContent=for_MINUTES;
//     for_second.innerText=for_SECONDS;

// },1000);