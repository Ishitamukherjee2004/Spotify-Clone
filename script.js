console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex=0;
 let audioElement = new Audio('0.mp3');

let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

 
let songs=[
    {songName: "Apna Bana Le", filePath:"C:\Users\ishit\Spotify Clone\(0).mp3", cover:"https://thewurdz.com/wp-content/uploads/2023/01/apna-bana-le-lyrics-1200x675.jpg"},
    {songName: "Heeriye", filePath:"C:\Users\ishit\Spotify Clone\(1).mp3", cover:"https://tse3.mm.bing.net/th?id=OIP.xc6LjM_8wCkwWOKVEcp9iwHaEK&pid=Api&P=0&h=180"},
    {songName: "Ranjha", filePath:"C:\Users\ishit\Spotify Clone\(2).mp3", cover:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/08/05/989082-kiara.jpg"},
    {songName: "Shayad", filePath:"C:\Users\ishit\Spotify Clone\(3).mp3", cover:"https://celebritytadka.com/wp-content/uploads/2020/01/shayad-song-love-aaj-kal.jpg"},
    {songName: "Tere Hawaale", filePath:"C:\Users\ishit\Spotify Clone\(4).mp3", cover:"https://i0.wp.com/99lyricstore.com/wp-content/uploads/2022/08/hawaale-lyrics-laal-chaddha-singh.jpg?w=400&ssl=1"}
]

songItems.forEach((element, i )=>{
    // console.log(element, i);
//    element.getElementsByTagName("img")[0].src = songs[i].songName.coverPath;
//    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

//Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid', 'fa-2x', 'fa-play');
        masterPlay.classList.add('fa-solid', 'fa-2x', 'fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid', 'fa-2x', 'fa-pause');
        masterPlay.classList.add('fa-solid', 'fa-2x', 'fa-play');
       

    }
   
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100)
})
 
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-solid', 'fa-pause')
    element.classList.add('fa-solid', 'fa-play')
}) 
}
 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-solid', 'fa-play')
        e.target.classList.add('fa-solid', 'fa-pause')
        audioElement.src = `${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
         masterPlay.classList.remove('fa-solid', 'fa-play');
         masterPlay.classList.add('fa-solid', 'fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
   if(songIndex>=4){
    songIndex=0;
   }
   else{
    songIndex +=1;
   }
   audioElement.src = `${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
         masterPlay.classList.remove('fa-solid', 'fa-play');
         masterPlay.classList.add('fa-solid', 'fa-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
   if(songIndex<=0){
    songIndex=0;
   }
   else{
    songIndex -=1;
   }
   audioElement.src = `${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
         masterPlay.classList.remove('fa-solid', 'fa-play');
         masterPlay.classList.add('fa-solid', 'fa-pause');
})