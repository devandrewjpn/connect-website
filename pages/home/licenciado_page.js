import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import React, { useState, useEffect } from 'react';
import { GalleryItemVideo } from "../../components/gallery_item_video";
import { GalleryItemImage } from "../../components/home-page/gallery_item_image";

const LicenciadoPage = () => {

  const items = [
    {
      id:1,
      type: 'video',
      link: '/gallery/reels01.mp4'
    },
    {
      id:2,
      type: 'video',
      link: '/gallery/reels02.mp4'
    },
    {
      id:3,
      type: 'image',
      link: '/gallery/post08.png'
    },
  ]

  const [mounted,setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null;

  return (
    <>
      <Seo pageTitle="Início" />
      <DefaulHeader />
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    Conteúdos para licenciados
                  </h2>
                  <p>Nos siga nas redes sociais para acompanhar nossos lançamentos!</p>
                </div>
              </div>
            </div>
            <div className="gallery_wrapp">
              {items.map(item => {
                if(item.type === 'video') {
                  return <GalleryItemVideo enablePlayers key={item.id} video={item.link} />
                } else {
                  return <GalleryItemImage key={item.id} image={item.link} />
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LicenciadoPage;
