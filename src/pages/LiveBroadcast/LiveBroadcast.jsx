import React from "react";
import Filter from "../../components/global/Filter/Filter";
import ReactPlayer from 'react-player'
import "./LiveBroadcast.css";

export default function LiveBroadcast(props) {

  return (
    <div>
      <Filter props={"שידור חי"} />
     
      <div>
          {/* <video class="jw-video jw-reset" tabindex="-1" disableremoteplayback="" webkit-playsinline="" playsinline="" ImgUrl="blob:https://www.kolhalashon.com/aff43f17-99a6-49c2-93b8-e7241e900120" ></video> */}
        {/* <video autoPlay={true} ImgUrl="blob:https://www.kolhalashon.com/aff43f17-99a6-49c2-93b8-e7241e900120" type="video/mp4" /> */}
        {/* <ReactPlayer playing="true" url='https://www.kolhalashon.com/aff43f17-99a6-49c2-93b8-e7241e900120' /> */}
    {/* <ReactPlayer playing="true" url='https://www.kolhalashon.com/new/Media/PlayShiur.aspx?FileName=30797560&Video=True' /> */}
    {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    <ReactPlayer url='https://www.kolhalashon.com/new/Media/PlayShiur.aspx?FileName=30797560' />
    <video controls
    src="https://www.kolhalashon.com/new/Media/PlayShiur.aspx?FileName=30797560"
    // src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    // poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    width="620"> </video>*/}
        {/* <video controls
    src="20190819_153002.mp4"
    // src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    // poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    width="620"></video> */}
      {/* <video controls autoPlay={true} src="20190819_153002.mp4" type="video/mp4"></video>

      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
        <video src="/images/Berov_am.mp4" width="750" height="500" controls> </video>
     
      </div>
    </div>
  );
}