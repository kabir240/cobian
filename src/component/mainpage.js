import React, { Component } from 'react';

class MainPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="submenu">
            <span className="ribbon"></span>
            <div className="container">
                <ul className="nav navbar-nav navbar-right">
                    <li className="sub-link"><span className="fa fa-envelope"></span> info@yourdomain.com </li>
                    <li className="sub-link"><span className="fa fa-phone"></span> +91-9007905382 </li>
                    <li className="link"><span className="fa fa-lock"></span><a>Register</a> </li>
                    <li className="link-btn"><a className="btn btn-primary">Login</a> </li>
                </ul>
            </div>
        </div>    
        <div className="mainmenu">
            <div className="container">            
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myMenu">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="index.html">
                    <img src="images/logo.png" className="logo" alt=""></img>  
                  </a>
                </div>

                <div className="collapse navbar-collapse" id="myMenu">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
            </div>
        </div>    
    </nav>
    <div className="clearfix"></div>
    <section className="home bg-animate">
		<div className="home-container">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center">
						<h1 className="title-one">Build your landing page</h1>
						<h4 className="title-two">One landing page for many purpose</h4>
						<a className="btn btn-primary">Get It Now</a>
					</div>
				</div>
			</div>
		</div>
		<div className="street"></div>
    </section>
    <div className="clearfix"></div>
    <section id="about">
        <div className="container">
            
            <div className="row">
                <div className="col-md-10 col-md-offset-1 title-section">
                    <h4 className="title"><span>Who we are</span> Premium landing page only $15</h4>
                    <div className="line"><i className="icon icon-24 icon-profle"></i></div>
                </div>
            </div>
           
            <div className="row wrap-feature-one">
                <div className="col-md-3 col-sm-6 feature-one">
                    <i className="icon icon-64 icon-magicwand"></i>
                    <h5 className="title">Magic HTML5</h5>
                    <p>
                        Hinc errem volutpat per in, te hinc essent mea. Ei pro corrumpit, elit ullum scripserit eum ad.
                    </p>
                </div>
                <div className="col-md-3 col-sm-6 feature-one">
                    <i className="icon icon-64 icon-tools"></i>
                    <h5 className="title">Easy To Use</h5>
                    <p>
                        Hinc errem volutpat per in, te hinc essent mea. Ei pro corrumpit, elit ullum scripserit eum ad.
                    </p>
                </div>
                <div className="col-md-3 col-sm-6 feature-one">
                    <i className="icon icon-64 icon-easel"></i>
                    <h5 className="title">Flat Style</h5>
                    <p>
                        Hinc errem volutpat per in, te hinc essent mea. Ei pro corrumpit, elit ullum scripserit eum ad.
                    </p>
                </div>
                <div className="col-md-3 col-sm-6 feature-one">
                    <i className="icon icon-64 icon-browser"></i>
                    <h5 className="title">Cross browser</h5>
                    <p>
                        Hinc errem volutpat per in, te hinc essent mea. Ei pro corrumpit, elit ullum scripserit eum ad.
                    </p>
                </div>
            </div>
           
        </div>
    </section>
    <div className="clearfix"></div>
    <section id="services" className="gray">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-md-push-5 img-desc">
                    <img src="images/description.png" className="img-responsive" alt=""></img>
                </div>
                <div className="col-md-5 col-md-pull-7 content-desc">
                    <h4>Small description your product</h4>
                    <p>
                        Facer velit mel ei, harum feugiat delicatissimi eum ne, ei nominati erroribus temporibus sit. Quo ne aperiri detraxit suscipiantur, just perfecto ut mea. Quo paulo facete mentitum no, has ex alterum repudiandae. Ipsum essent appareat cu vix, dolor mandamus cum
                        te. Melius copiosae duo ei, duo eros omnis at.
                    </p>
                    <ul className="list-checked">
                        <li>Facer velit mel ei, harum feugiat</li>
                        <li>Delicatissimi eum ne, ei nominati</li>
                        <li>Erroribus temporibus sit</li>
                        <li>Facete mentitum no has ex alterum</li>
                    </ul>
                    <div className="text-left">
                        <a className="btn btn-default">Live Demo</a>
                        <a className="btn btn-primary">Get It Now</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <div className="clearfix"></div>
    <section id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1 title-section">
                    <h4 className="title"><span>Our Features</span> The reason why choose us</h4>
                    <div className="line"><i className="icon icon-24 icon-trophy"></i></div>
                </div>
            </div>
            
            <div className="row wrap-feature-two">
                <div className="col-md-4">
                    <ul className="feature-two left">
                        <li>
                            <i className="icon icon-64 icon-tablet"></i>
                            <h5>Responsive</h5>
                            <p>
                                Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.
                            </p>
                        </li>
                        <li>
                            <i className="icon icon-64 icon-clipboard"></i>
                            <h5>Documentation</h5>
                            <p>
                                Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.
                            </p>
                        </li>
                        <li>
                            <i className="icon icon-64 icon-hourglass"></i>
                            <h5>24/7 Support</h5>
                            <p>
                                Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <img src="images/man.png" className="img-responsive img-feature-two" alt=""></img>
                </div>
                <div className="col-md-4">

                    <ul className="feature-two right">
                        <li>
                            <i className="icon icon-64 icon-rocket"></i>
                            <h5>Flat Design</h5>
                            <p>
                                Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.
                            </p>
                        </li>
                        <li>
                            <i className="icon icon-64 icon-gamecontroller"></i>
                            <h5>Easy to use</h5>
                            <p>
                                Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.
                            </p>
                        </li>
                        <li>
                            <i className="icon icon-64 icon-interstate"></i>
                            <h5>Plug & play</h5>
                            <p>
                                Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    </section>
    <div className="clearfix"></div>
    <section id="pricing" className="gray">
        <div className="container">
            
            <div className="row">
                <div className="col-md-10 col-md-offset-1 title-section">
                    <h4 className="title"><span>Pricing Table</span> Choose download package</h4>
                    <div className="line"><i className="icon icon-24 icon-clipboard"></i></div>
                </div>
            </div>
            
            <div className="row wrap-price">
                <div className="col-md-3">
                   
                    <div className="table-price info">
                        <div className="title-price">
                            <h4>Basic</h4>
                        </div>
                        <div className="price">
                            <h2><span>$</span>12<small className="point">.99</small></h2>
                        </div>
                        <ul className="list-feature">
                            <li className="current"><strong>Compress</strong> file</li>
                            <li><strong>Photo</strong> not include</li>
                            <li className="current"><strong>PSD</strong> Included</li>
                            <li><strong>No</strong> Update</li>
                            <li className="current"><strong>No</strong> Support</li>
                        </ul>
                        <div className="footer-price">
                            <a className="btn btn-info">Get It Now</a>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="table-price success">
                        <div className="title-price">
                            <h4>Premium</h4>
                        </div>
                        <div className="price">
                            <h2><span>$</span>14<small className="point">.99</small></h2>
                        </div>
                        <ul className="list-feature">
                            <li className="current"><strong>Compress</strong> file</li>
                            <li><strong>Photo</strong> include</li>
                            <li className="current"><strong>PSD</strong> Included</li>
                            <li><strong>No</strong> Update</li>
                            <li className="current"><strong>No</strong> Support</li>
                        </ul>
                        <div className="footer-price">
                            <a className="btn btn-success">Get It Now</a>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="table-price danger">
                        <div className="title-price">
                            <h4>Business</h4>
                        </div>
                        <div className="price">
                            <h2><span>$</span>19<small className="point">.99</small></h2>
                        </div>
                        <ul className="list-feature">
                            <li className="current"><strong>Uncompress</strong> file</li>
                            <li><strong>Photo</strong> include</li>
                            <li className="current"><strong>PSD</strong> Included</li>
                            <li><strong>File</strong> Update</li>
                            <li className="current"><strong>No</strong> Support</li>
                        </ul>
                        <div className="footer-price">
                            <a className="btn btn-danger">Get It Now</a>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="table-price warning">
                        <div className="title-price">
                            <h4>Developer</h4>
                        </div>
                        <div className="price">
                            <h2><span>$</span>24<small className="point">.99</small></h2>
                        </div>
                        <ul className="list-feature">
                            <li className="current"><strong>Uncompress</strong> file</li>
                            <li><strong>Photo</strong> include</li>
                            <li className="current"><strong>PSD</strong> Included</li>
                            <li><strong>File</strong> Update</li>
                            <li className="current"><strong>24/7</strong> Support</li>
                        </ul>
                        <div className="footer-price">
                            <a className="btn btn-warning">Get It Now</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <div className="clearfix"></div>
     <div className="dark">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    
                    <div className="row">
                        <div className="col-md-4 col-sm-4 feature-three">
                            <div className="img-feature">
                                <span className="count">1</span>
                                <i className="icon icon-64 icon-download"></i>
                            </div>
                            <h5>Download</h5>
                            <p>Ad nostrum consetetur scribentur</p>
                        </div>
                        <div className="col-md-4 col-sm-4 feature-three">
                            <div className="img-feature">
                                <span className="count">2</span>
                                <i className="icon icon-64 icon-tools"></i>
                            </div>    
                            <h5>Instal App</h5>
                            <p>Ad nostrum consetetur scribentur</p>
                        </div>
                        <div className="col-md-4 col-sm-4 feature-three">
                            <div className="img-feature">
                                <span className="count">3</span>
                                <i className="icon icon-64 icon-tablet"></i>
                            </div>    
                            <h5>Ready To Use</h5>
                            <p>Ad nostrum consetetur scribentur</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="clearfix"></div>
     <section>
        <div className="container">
            
            <div className="row">
                <div className="col-md-10 col-md-offset-1 title-section">
                    <h4 className="title"><span>Gallery</span> App image screenshot</h4>
                    <div className="line"><i className="icon icon-24 icon-image"></i></div>
                </div>
            </div>
            
            <ul className="filter-items">
                <li data-filter="" className="active">All</li>
                <li data-filter="photo">Photo</li>
                <li data-filter="app">App</li>
                <li data-filter="design">Design</li>
                <li data-filter="graphic">Graphic</li>
            </ul>
            
            <div className="row">
                <div id="gallery" className="masonry  gallery">
                    <div className="grid-sizer col-md-3 col-sm-4 col-xs-12"></div>
                    <div data-filter="graphic" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img01.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img01.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="photo" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img02.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img02.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="app" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img03.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img03.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="design" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img04.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img04.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="app" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img05.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img05.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="photo" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img06.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img06.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="graphic" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img07.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img07.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="app" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img08.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img08.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="design" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img09.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img09.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="graphic" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img10.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img10.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="design" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img11.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img11.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                    <div data-filter="photo" className="grid-item col-md-3 col-sm-4 col-xs-12">
                        <div className="wrap-gallery">
                            <div className="img-wrapper">
                                <div href="images/img12.jpg" className="hover zoom"  data-pretty="prettyPhoto"></div>
                                <img src="images/img12.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="title-gallery">
                                <h5><a>Greaci appetere</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="clearfix"></div>
    <section id="blog" className="gray">
        <div className="container">
            
            <div className="row">
                <div className="col-md-10 col-md-offset-1 title-section">
                    <h4 className="title"><span>Last Article</span> Latest article from blog</h4>
                    <div className="line"><i className="icon icon-24 icon-compose"></i></div>
                </div>
            </div>
            
			
            <div className="row">
                <div id="post" className="masonry wrap-post">
                    <div className="grid-sizer col-md-6 col-sm-12 col-xs-12"></div>
                    <div className="grid-item col-md-6 col-sm-12 col-xs-12">
                        <div className="row post">
                            <div className="col-md-6 col-sm-6 img-post">
                                <img src="images/1.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="col-md-6 col-sm-6 content-post">
                                <h5><a>Omnium habemus det racto an vim</a></h5>
                                <ul className="meta-post">
                                    <li><a><span className="fa fa-calendar"></span> 06/10/2015</a></li>
                                    <li><a><span className="fa fa-thumb-tack"></span> App</a></li>
                                    <li><a><span className="fa fa-comment-o"></span> 3</a></li>
                                </ul>
                                <p>
                                    Habeo vidisse posidonium ex mei. Modo viderer vituperata in has.
                                </p>
                                <a href="singlepost.html" className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item col-md-6 col-sm-12 col-xs-12">
                        
                        <div className="row post current">
                            <div className="col-md-6 col-sm-6 img-post">
                                <img src="images/2.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="col-md-6 col-sm-6 content-post">
                                <h5><a>Mei ad iudico appetere ecusabo</a></h5>
                                <ul className="meta-post">
                                    <li><a><span className="fa fa-calendar"></span> 06/10/2015</a></li>
                                    <li><a><span className="fa fa-thumb-tack"></span> App</a></li>
                                    <li><a><span className="fa fa-comment-o"></span> 3</a></li>
                                </ul>
                                <p>
                                    Habeo vidisse posidonium ex mei. Modo viderer vituperata in has.
                                </p>
                                <a href="singlepost.html" className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item col-md-6 col-sm-12 col-xs-12">
                        
                        <div className="row post">
                            <div className="col-md-6 col-sm-6 col-md-push-6 img-post">
                                <img src="images/3.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="col-md-6 col-sm-6 col-md-pull-6 content-post">
                                <h5><a>Civibus inciderint ei vim assum</a></h5>
                                <ul className="meta-post">
                                    <li><a><span className="fa fa-calendar"></span> 06/10/2015</a></li>
                                    <li><a><span className="fa fa-thumb-tack"></span> App</a></li>
                                    <li><a><span className="fa fa-comment-o"></span> 3</a></li>
                                </ul>
                                <p>
                                    Habeo vidisse posidonium ex mei. Modo viderer vituperata in has.
                                </p>
                                <a href="singlepost.html" className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                       
                    </div>
                    <div className="grid-item col-md-6 col-sm-12 col-xs-12">
                        
                        <div className="row post current">
                            <div className="col-md-6 col-sm-6 col-md-push-6 img-post">
                                <img src="images/4.jpg" className="img-responsive" alt=""></img>
                            </div>
                            <div className="col-md-6 col-sm-6 col-md-pull-6 content-post">
                                <h5><a>At nonumy aeterno nam esse</a></h5>
                                <ul className="meta-post">
                                    <li><a><span className="fa fa-calendar"></span> 06/10/2015</a></li>
                                    <li><a><span className="fa fa-thumb-tack"></span> App</a></li>
                                    <li><a><span className="fa fa-comment-o"></span> 3</a></li>
                                </ul>
                                <p>
                                    Habeo vidisse posidonium ex mei. Modo viderer vituperata in has.
                                </p>
                                <a href="singlepost.html" className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
			
        </div>
    </section>
    
    
    <div className="clearfix"></div>
    
    
    <div className="cta-area">
        <div className="bg-primary pattern parallax"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    
                    <div className="ct-action">
                        <h4 className="title-one">Get premium accsess now !</h4>
                        <h4 className="title-two">Sometimes you need a call to action area</h4>
                        <a className="btn btn-warning">Register Now</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
   
    
    <div className="clearfix"></div>
    
    
    <footer> 
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 footer-item">
                        <img src="images/logo-footer.png" className="logo-footer" alt=""></img>
                        
                        <ul className="social-network">
                            <li><a><span className="fa fa-facebook"></span></a></li>
                            <li><a><span className="fa fa-twitter"></span></a></li>
                            <li><a><span className="fa fa-linkedin"></span></a></li>
                            <li><a><span className="fa fa-dribbble"></span></a></li>
                            <li><a><span className="fa fa-instagram"></span></a></li>
                        </ul>
                        
                    </div>
                    <div className="col-md-3 footer-item">
                        <div className="row">
                            <div className="col-md-5 col-sm-6 col-xs-6">
                                
                                <ul className="footer-link">
                                    <li><a>Travel</a></li>
                                    <li><a>Explorers</a></li>
                                    <li><a>Nature</a></li>
                                    <li><a>Science</a></li>
                                    <li><a>Advices</a></li>
                                </ul>
                                
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                               
                                <ul className="footer-link">
                                    <li><a>About</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>Term Of Service</a></li>
                                    <li><a>Privacy Policy</a></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 footer-item">
                        
                        <h5 className="title-footer">Subscribe Now</h5>
                        <p>Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.</p>
                        <div className="input-group left">
                            <input type="text" className="form-control form-subscribe" placeholder="Enter Your Email"></input>
                            <span className="input-group-btn">
                            <button className="btn btn-primary" type="button"><span className="fa fa-envelope"></span></button>
                            </span>
                        </div>
                        
                    </div>
                    <div className="col-md-3 footer-item">
                        
                        <h5 className="title-footer">Twitter Feed</h5>
                        <div id="tweecool"></div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="sub-footer">
            Designed By <a>Suman</a>
        </div>
    </footer>
    </div>
    );
  }
}

export default MainPage;
