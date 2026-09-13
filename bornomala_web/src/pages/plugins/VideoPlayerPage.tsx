import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';

export const VideoPlayerPage: React.FC = () => {
  return (
    <div className="page-wrapper-module">
      <PageHeader title="Video Player" category="Plugins" />

      <div className="module-content-body">
<div className="row">

<div className="col-12 col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Basic MP4 Video Player</h4>
</div>
<div className="card-body">
<video className="plyr w-100" controls id="player1" playsInline poster="../../../media.w3.org/2010/05/sintel/poster.png" style={{ ['--plyr-color-main' as any]: '#1ac266' }}>
<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>

<div className="col-12 col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">autoPlay (muted), Loop Video Player</h4>
</div>
<div className="card-body">
<video autoPlay className="plyr w-100" controls id="player3" loop muted playsInline poster="../../../media.w3.org/2010/05/sintel/poster.png" style={{ ['--plyr-color-main' as any]: '#1c84c6' }}>
<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>

<div className="col-12 col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">YouTube Video Player</h4>
</div>
<div className="card-body">

<div className="plyr w-100" data-plyr-embed-id="bTqVqk7FSmY" data-plyr-provider="youtube" id="yt1" style={{ ['--plyr-color-main' as any]: '#f8ac59' }}></div>
</div>
</div>
</div>

<div className="col-12 col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Vimeo Video Player</h4>
</div>
<div className="card-body">
<div className="plyr w-100" data-plyr-embed-id="76979871" data-plyr-provider="vimeo" id="vimeo1" style={{ ['--plyr-color-main' as any]: '#ed5565' }}></div>
</div>
</div>
</div>
<div className="col-xl-6">
<div className="card">
<div className="card-header">
<h4 className="card-title">Audio Player</h4>
</div>
<div className="card-body">
<audio className="w-100" controls id="player-audio" style={{ ['--plyr-color-main' as any]: '#7b70ef' }}>
<source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3" type="audio/mp3"/>
<source src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg" type="audio/ogg"/>
</audio>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
};
