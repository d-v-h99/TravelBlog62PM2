import React from 'react';
import './Single.css';
import { Link } from 'react-router-dom';
import edit from './edit.png';
import dele from './delete.png';
import Menu from './Menu';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const Single = () => {
  return (
    <div>
      <Navbar/>
      <div className="app">
        <div className="home">
          <div className="posts">
            <div className="single">
              <div className="content">
                <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5NDQtYmItMTYtam9iNTk4LmpwZw.jpg" />
                <div className="user">
                  <img src="https://images.rawpixel.com/image_600/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzM2Ni1tai03NzAzLWZvbi1qai5qcGc.jpg" />
                  <div className="info">
                    <span>John</span>
                    <p>Posted 2 days ago</p>
                  </div>
                  <div className="edit">
                    <Link to={`/blog/write`}>
                      <img src={edit} />
                    </Link>
                    <img src={dele} />
                  </div>
                </div>
                <h1>Lorem isum ta ha ke lllllllllllaaaaaaaaaaaa</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  aliquet ipsum arcu, ut vestibulum metus consequat ac. Proin
                  lorem ligula, egestas sit amet felis in, ultrices aliquet
                  ante. Nunc venenatis, libero ut porttitor congue, turpis nibh
                  viverra mi, non tristique tortor elit et eros. Maecenas
                  efficitur massa sem, sit amet euismod diam finibus a. Maecenas
                  dapibus bibendum metus, vel faucibus ante sagittis fermentum.
                  Vestibulum interdum risus sed diam volutpat, id ultricies
                  lorem sodales. Duis fringilla, lacus vitae porta gravida,
                  magna tellus lobortis velit, vel mattis nisl leo id dui.
                  Praesent sit amet congue elit. Cras interdum laoreet enim
                  vitae viverra. Curabitur vestibulum purus facilisis lacinia
                  tincidunt. Vestibulum id libero non lorem placerat tristique
                  ut id enim. Nunc at volutpat mi, eu bibendum dolor. Interdum
                  et malesuada fames ac ante ipsum primis in faucibus. Sed
                  tempus in metus sed fringilla. Sed pellentesque semper
                  aliquam. Phasellus mattis lectus non finibus feugiat. Nunc et
                  sapien cursus, consectetur enim aliquam, molestie ipsum. Sed
                  fermentum tellus eget pulvinar sodales. Nullam fringilla quam
                  sed lacus lacinia, vel venenatis justo venenatis. Pellentesque
                  vestibulum elementum turpis eu accumsan. Proin porta lorem
                  lorem, ac porta massa vulputate eu. Maecenas bibendum massa at
                  faucibus blandit. Etiam at tortor mi. Aliquam feugiat auctor
                  pellentesque. Donec molestie elementum justo, ac elementum
                  quam eleifend sed. Nulla vel elit diam. Cras hendrerit
                  facilisis tortor vitae sollicitudin. Vivamus consequat gravida
                  ligula, ac pretium risus ullamcorper vel. In hac habitasse
                  platea dictumst. Donec eu est in dui iaculis malesuada in
                  vitae nulla. Nunc diam felis, lacinia in ligula ut,
                  condimentum congue ipsum. Proin consequat tellus non tortor
                  porta, quis efficitur ex molestie. Proin quis neque vitae
                  felis feugiat rutrum. Curabitur vitae bibendum sapien. Aliquam
                  nibh felis, euismod eget sem eu, congue vulputate neque. Etiam
                  nec sem a libero consectetur pellentesque. Pellentesque
                  lobortis dui eu elit malesuada tincidunt. Integer sit amet
                  vestibulum justo, eget fringilla massa. Nam accumsan
                  vestibulum sem non fermentum. Pellentesque at tortor in nunc
                  laoreet ultricies. Mauris bibendum pretium pulvinar. Phasellus
                  nec facilisis ante. Donec pharetra ultrices urna in maximus.
                  Donec et pretium quam.
                </p>
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Single;
