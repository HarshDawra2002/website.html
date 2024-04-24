console.log("welcome to spotify");

//intialize the variables
// song is not started yet
let songindex = 0;
// include the audio file 
let audioElement = new Audio('5.mp3');
// include the masterplay
let masterplay = document.getElementById('masterplay');
//include the progress bar
let myprogressbar = document.getElementById('myprogressbar');
//include the gif
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songName'));

//form the array of song elements
let songs = [
    {songName: "tokyo-vibes", filepath: "songs/1.mp3", coverpath: "cover/1.jpg"},
    {songName: "legendary-piano", filepath: "songs/2.mp3", coverpath: "cover/2.jpg"},
    {songName: "beautiful", filepath: "songs/3.mp3", coverpath: "cover/7.jpg"},
    {songName: "hip-hop", filepath: "songs/4.mp3", coverpath: "cover/8.jpg"},
    {songName: "love ya", filepath: "songs/5.mp3", coverpath: "cover/9.jpg"},
    {songName: "invisible", filepath: "songs/1.mp3", coverpath: "cover/10.jpg"},
    {songName: "see ya all", filepath: "songs/3.mp3", coverpath: "cover/2.jpg"},
    {songName: "all eyez on you", filepath: "songs/4.mp3", coverpath: "cover/7.jpg"},
    {songName: "fake ones", filepath: "songs/5.mp3", coverpath: "cover/9.jpg"},
    {songName: "loved ones", filepath: "songs/2.mp3", coverpath: "cover/10.jpg"},
    
]

songItems.forEach((element, i) => {
    element.getElementByTagname("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    
});

// audioElement.play();

//Handle play/pause click

//To click on the song
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        // To play the song
        audioElement.play();
        // To remove play icon
        masterplay.classList.remove('fa-play-circle');
        //To add pause icon
        masterplay.classList.add('fa-pause-circle');
        //To set opacity of gif
        gif.style.opacity = 1;
    }

    else{
        // To pause the song
        audioElement.pause();
        // To remove pause
        masterplay.classList.remove('fa-pause-circle');
        //To add play
        masterplay.classList.add('fa-play-circle');
        //To set opacity of gif 
        gif.style.opacity = 1;
    }
})

//listen to events
//To update the time of track
audioElement.addEventListener('timeupdate', ()=>{
    //update seek bar
    //To calculate the duration of track
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
})

// 100 * CT/100 = P (To calculate percentage)
//        CT -> PD/100 (To calculate current time)
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
            makeallplays();
            songindex = parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = 'songs/$(songindex+1).mp3';
            let mastersongname = document.getElementById('mastersongname');
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;

     })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>9){
        songindex = 0;
    }
    
    else{
         songindex += 1;
    }
    audioElement.src = "songs/$(songindex+1).mp3";
    let mastersongname = document.getElementById('mastersongname');
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0;
    }
    
    else{
         songindex -= 9;
    }
    audioElement.src = "songs/$(songindex+1).mp3";
    mastersongname.innerText = songs(songindex).songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

