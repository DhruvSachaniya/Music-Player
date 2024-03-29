// export default function MusicPlayer() {
//     return (
//         <div className="music-player">
//             <div className="library-likedsongs">
//                 <div>
//                     <img src="https://misc.scdn.co/liked-songs/liked-songs-300.png" alt="liked_song" />
//                 </div>
//                 <div style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "5px"
//                 }}>
//                     <h3>song name</h3>
//                     <div className="library-likedsongs-2">
//                         <p>song description</p>
//                     </div>
//                 </div>
//             </div>
//             <div style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center"
//             }}>
//                 <div class="buttons">
//                     <div class="prev-track" >
//                         <i class="fa fa-step-backward fa-lg"></i>
//                     </div>
//                     <div class="playpause-track">
//                         <i class="fa fa-play-circle fa-2xl"></i>
//                     </div>
//                     <div class="next-track">
//                         <i class="fa fa-step-forward fa-lg"></i>
//                     </div>
//                 </div>
//                 <div class="slider_container">
//                     <div class="current-time">00:00</div>
//                     <input type="range" min="1" max="100"
//                         value="0" class="seek_slider" onchange="seekTo()" />
//                     <div class="total-duration">00:00</div>
//                 </div>
//             </div>
//             <div style={{
//                 display: 'flex',
//             }}>
//                 <div class="slider_container">
//                     <i class="fa fa-volume-down"></i>
//                     <input type="range" min="1" max="100"
//                         value="99" class="volume_slider" />
//                         <i class="fa fa-volume-up"></i>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React, { useState, useRef, useEffect } from 'react';

// export default function MusicPlayer({ audioFile = "http://localhost:3333/uploads/audio_file/dancemonekey-d6f1023fdd3f115e586d581025ff299405.mp3" }) {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [volume, setVolume] = useState(0.5);
//     const [duration, setDuration] = useState(0);
//     const [currentTime, setCurrentTime] = useState(0);
//     const audioRef = useRef(null);

//     useEffect(() => {
//         if (audioFile) {
//             loadTrack(audioFile);
//         }
//     }, [audioFile]);

//     const loadTrack = (audioFile) => {
//         audioRef.current.src = audioFile;
//         audioRef.current.load();
//     };

//     const togglePlayPause = () => {
//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };

//     const handleVolumeChange = (event) => {
//         const newVolume = event.target.value;
//         setVolume(newVolume);
//         audioRef.current.volume = newVolume;
//     };

//     const handleLoadedMetadata = () => {
//         setDuration(audioRef.current.duration);
//     };

//     const handleTimeUpdate = () => {
//         setCurrentTime(audioRef.current.currentTime);
//     };

//     const handleSeek = (event) => {
//         const seekTime = event.target.value;
//         setCurrentTime(seekTime);
//         audioRef.current.currentTime = seekTime;
//     };

//     function formatTime(time) {
//         const minutes = Math.floor(time / 60);
//         const seconds = Math.floor(time % 60);
//         return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     }

//     return (
//         <div className="music-player">
//             <div className="library-likedsongs">
//                 <div>
//                     <img src="https://misc.scdn.co/liked-songs/liked-songs-300.png" alt="liked_song" />
//                 </div>
//                 <div style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "5px"
//                 }}>
//                     <h3>song name</h3>
//                     <div className="library-likedsongs-2">
//                         <p>song description</p>
//                     </div>
//                 </div>
//             </div>
//             <div style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center"
//             }}>
//                 <div className="buttons">
//                     <div className="prev-track" >
//                         <i className="fa fa-step-backward fa-lg"></i>
//                     </div>
//                     <div className="playpause-track" onClick={togglePlayPause}>
//                         {isPlaying ? (
//                             <i className="fa fa-pause-circle fa-2xl"></i>
//                         ) : (
//                             <i className="fa fa-play-circle fa-2xl"></i>
//                         )}
//                     </div>
//                     <div className="next-track">
//                         <i className="fa fa-step-forward fa-lg"></i>
//                     </div>
//                 </div>
//                 <div className="slider_container">
//                     <div className="current-time">{formatTime(currentTime)}</div>
//                     <input type="range" min="0" max={duration} value={currentTime} className="seek_slider" onChange={handleSeek} />
//                     <div className="total-duration">{formatTime(duration)}</div>
//                 </div>
//             </div>
//             <div style={{
//                 display: 'flex',
//             }}>
//                 <div className="slider_container">
//                     <i className="fa fa-volume-down"></i>
//                     <input type="range" min="0" max="1" step="0.01" value={volume} className="volume_slider" onChange={handleVolumeChange} />
//                     <i className="fa fa-volume-up"></i>
//                 </div>
//             </div>
//             <audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata} onTimeUpdate={handleTimeUpdate} />
//         </div>
//     );
// }


import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PlayCurrentSong } from '../../redux/redux-files/counterlist';
import AddToLikedSongFunction from '../buttons/AddtoLIkedSong';

export default function MusicPlayer() {

    const count = useSelector(state => state.counterList.value);
    const currentvalue = useSelector(state => state.counterList.currentvalue);
    const dispatch = useDispatch();
    // console.log(count);

    const [musicData, setMusicData] = useState([]);
    const [musicimage, setMusicImage] = useState([]);
    const [musictitle, setMusicTitle] = useState([]);
    const [musicdescription, setMusicDescription] = useState([]);
    const [musicid, setMusicId] = useState([]);

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const idRef = useRef(null);

    useEffect(() => {
        setCurrentTrackIndex(currentvalue);
        const audioFile = count.map(item => "http://localhost:3333/uploads/audio_file/" + item.audio_file);
        const imageFile = count.map(item => "http://localhost:3333/uploads/music_photos/" + item.music_photo)
        const titleFile = count.map(item => item.name)
        const descriptionFile = count.map(item => item.description)
        const music_id = count.map(item => item.id)

        setMusicData(audioFile);
        setMusicImage(imageFile);
        setMusicTitle(titleFile);
        setMusicDescription(descriptionFile);
        setMusicId(music_id);
    }, [count, currentvalue]);

    useEffect(() => {
        if (musicData && musicData.length > 0) {
            // console.log(currentTrackIndex);
            loadTrack(musicData[currentTrackIndex]);
            loadImage(musicimage[currentTrackIndex]);
            loadTitle(musictitle[currentTrackIndex]);
            loadDescription(musicdescription[currentTrackIndex]);
            loadId(musicid[currentTrackIndex]);
        }
    }, [musicData, musicimage, musictitle, musicdescription, currentTrackIndex]);

    const loadTrack = (audioFile) => {
        audioRef.current.src = audioFile;
        audioRef.current.load();
    };

    const loadImage = (musicImage) => {
        imageRef.current.src = musicImage;
    }

    const loadTitle = (musicTitle) => {
        titleRef.current.textContent = musicTitle;
    }

    const loadDescription = (musicDescription) => {
        descriptionRef.current.textContent = musicDescription;
    }

    const loadId = (musicId) => {
        idRef.current = musicId;
    }

    const playNextTrack = () => {
        if (currentTrackIndex < musicData.length - 1) {
            // setCurrentTrackIndex(currentTrackIndex + 1);
            dispatch(PlayCurrentSong(currentvalue + 1));
        }
    };

    const playPreviousTrack = () => {
        if (currentTrackIndex > 0) {
            // setCurrentTrackIndex(currentTrackIndex - 1);
            dispatch(PlayCurrentSong(currentvalue - 1));
        }
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleSeek = (event) => {
        const newTime = event.target.value;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    };

    const handleEnded = () => {
        if (currentTrackIndex < musicData.length - 1) {
            playNextTrack();
        } else {
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (
        <div className="music-player">
            <div className="library-likedsongs" style={{ alignItems: "center"}}>
                <div>
                    {count.length > 0 ? (
                        <img ref={imageRef} alt="liked_song" />
                    ) : (
                        <img src="https://misc.scdn.co/liked-songs/liked-songs-300.png" alt="liked_song" />
                    )}
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px"
                }}>
                    {count.length > 0 ? (
                        <>
                            <h3 ref={titleRef}></h3>
                            <div className="library-likedsongs-2">
                                <p ref={descriptionRef}></p>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3>title</h3>
                            <div className="library-likedsongs-2">
                                <p>description</p>
                            </div>
                        </>
                    )}
                </div>
                <div className='add-to-likedsong' style={{
                    display: 'flex',
                    alignItems: "center"
                }} onClick={() => AddToLikedSongFunction(idRef.current)}>
                    <i class="fa-regular fa-heart fa-xl"></i>
                    {/* <i class="fa-solid fa-heart fa-xl"></i> */}
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div className="buttons">
                    <div className="prev-track" onClick={playPreviousTrack}>
                        <i className="fa fa-step-backward fa-lg"></i>
                    </div>
                    <div className="playpause-track" onClick={togglePlayPause}>
                        {isPlaying ? (
                            <i className="fa fa-pause-circle fa-2xl"></i>
                        ) : (
                            <i className="fa fa-play-circle fa-2xl"></i>
                        )}
                    </div>
                    <div className="next-track" onClick={playNextTrack}>
                        <i className="fa fa-step-forward fa-lg"></i>
                    </div>
                </div>
                <div className="slider_container" style={{
                    width: "600px"
                }}>
                    <div className="current-time">{formatTime(currentTime)}</div>
                    <input type="range" min="0" max={duration} value={currentTime} className="seek_slider" onChange={handleSeek} />
                    <div className="total-duration">{formatTime(duration)}</div>
                </div>
            </div>
            <div style={{
                display: 'flex',
            }}>
                <div className="slider_container">
                    <i className="fa fa-volume-down"></i>
                    <input type="range" min="0" max="1" step="0.01" value={volume} className="volume_slider" onChange={handleVolumeChange} />
                    <i className="fa fa-volume-up"></i>
                </div>
            </div>
            <audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
        </div>
    );
}



