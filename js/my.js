let header = `<header id="site_header" class="header">
<div class="header-content clearfix">
      
  <!-- Text Logo -->
  <div class="text-logo">
    <a href="index.html">
      <div class="logo-symbol">A</div>
      <div class="logo-text">Andika <span>Pratama</span></div>
    </a>
  </div>
  <!-- /Text Logo -->

  <!-- Navigation -->
  <div class="site-nav mobile-menu-hide">
    <ul class="leven-classic-menu site-main-menu">

      <li class="menu-item">
        <a href="javascript:void(0)" onclick="ClickedHeader('beranda')">Beranda</a>
      </li>

      <li class="menu-item">
        <a href="javascript:void(0)" onclick="ClickedHeader('resume')">Resume</a>
      </li>

      <li class="menu-item">
        <a href="javascript:void(0)" onclick="ClickedHeader('portfolio')">Portfolio</a>
      </li>
    </ul>
  </div>

  <!-- Mobile Menu Toggle -->
  <a class="menu-toggle mobile-visible">
    <i class="fa fa-bars"></i>
  </a>
  <!-- Mobile Menu Toggle -->
</div>
</header>`;

let HomePageContent = `<div id="main-content" class="single-page-content">
<div id="primary" class="content-area">    
  <div id="content" class="page-content site-content single-post" role="main">
    <!-- Home Page Top Part -->
    <div class="row">
      <div class=" col-xs-12 col-sm-12">
        <div class="home-content">
          <div class="row flex-v-align">
            
            <div class="col-sm-12 col-md-5 col-lg-5">
              <div class="home-photo">
                <div class="hp-inner" style="background-image: url(./img/main_photo.jpg);">
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-7 col-lg-7">
              <div class="home-text hp-left">
                <div class="owl-carousel text-rotation">                                    
                  <div class="item">
                    <h4>Junior Web Developer</h4>
                  </div>

                  <div class="item">
                    <h4>IT STAFF</h4>
                  </div>
                </div>
                  
                <h1>Andika Pratama</h1>
                <p>Perkenalkan nama saya Andika Pratama biasa dipanggil Dika Lulusan S1 Sarjana Komputer dari Universitas Mpu Tantular. Berpengalaman 2+ tahun dalam Bidang IT Sebagai STAFF IT & Web Development.</p>
                     
                <div class="home-buttons">
                  <a href="CV_ANDIKA_PRATAMA.pdf" target="_blank" class="btn btn-primary" download>Download CV</a>
                  <a href="https://wa.me/6281324112505" target="_self" class="btn btn-secondary">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Page Top Part -->

    <!-- Services -->
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <div class="p-50"></div>

        <div class="block-title">
          <h2>What I Do</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">

        <div class="info-block-w-icon">
          <div class="ci-icon">
            <i class="linecons linecons-display"></i>
          </div>

          <div class="ci-text">
            <h4>Implementor</h4>
            <p>Melakukan Persentasi website ke pelanggan.</p>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6">
        <div class="info-list-w-icon">
          <div class="info-block-w-icon">
            <div class="ci-icon">
              <i class="linecons linecons-display"></i>
            </div>

            <div class="ci-text">
              <h4>Web Development</h4>
              <p>Membuat Aplikasi Internal Peruhaan sesuai dengan kebutuhan & perintah atasan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

let ResumePageContent = `<div id="main-content" class="single-page-content">
<div id="primary" class="content-area">

  <div class="page-title">
    <h1>Resume</h1>
    <div class="page-subtitle">
        <h4> Pengalaman 2+ Tahun</h4>
    </div>
  </div>

  <div id="content" class="page-content site-content single-post" role="main">
    <div class="row">

      <div class=" col-xs-12 col-sm-6 ">
        <div class="block-title">
          <h2>Pendidikan</h2>
        </div>

        <div id="timeline_1" class="timeline clearfix">
          <div class="timeline-item clearfix">
            <h5 class="item-period ">2015 - 2019</h5>
            <span class="item-company">Universitas Mpu Tantular</span>
            <h4 class="item-title">Teknik Informatika</h4>
            <p>Saya berkuliah di Universitas Mpu Tantular Jakarta fakultas Teknik Informatika, mulai berkuliah pada tahun 2015 dan telah dinyatakan lulus pada tahun 2019, Dengan IPK 3.15. Skripsi saya berjudul Perancangan Sistem Informasi Berbasis Web.</p>
          </div>
        </div>

          <div class="block-title">
            <h2>Keahlian</h2>
          </div>


          <div id="skills_2" class="skills-info skills-first-style">
            <!-- Skill 5 -->
            <div class="clearfix">
              <h4>HTML / CSS</h4>
              <div class="skill-value">50%</div>
            </div>
            <div id="skill_5" data-value="50" class="skill-container">
              <div class="skill-percentage"></div>
            </div>
            <!-- /Skill 5 -->

            <!-- Skill 6 -->
            <div class="clearfix">
              <h4>PHP</h4>
              <div class="skill-value">55%</div>
            </div>
            <div id="skill_6" data-value="55" class="skill-container">
              <div class="skill-percentage"></div>
            </div>
            <!-- /Skill 6 -->

            <!-- Skill 7 -->
            <div class="clearfix">
              <h4>JavaScript</h4>
              <div class="skill-value">50%</div>
            </div>
            <div id="skill_7" data-value="50" class="skill-container">
              <div class="skill-percentage"></div>
            </div>
            <!-- /Skill 7 -->

            <!-- Skill 8 -->
            <div class="clearfix">
              <h4>Mysql / SQL Server</h4>
              <div class="skill-value">45%</div>
            </div>
            <div id="skill_8" data-value="45" class="skill-container">
              <div class="skill-percentage"></div>
            </div>
            <!-- /Skill 8 -->
          </div>
      </div>

      <div class=" col-xs-12 col-sm-6 ">
        <div class="block-title">
          <h2>Pengalaman</h2>
        </div>

        <div id="timeline_2" class="timeline clearfix">
          <div class="timeline-item clearfix">
            <h5 class="item-period current">2019 - 2020</h5>
            <span class="item-company">Cv. Mitra Buana Solusindo</span>
            <h4 class="item-title">Implementasi / Implementor</h4>
            <ul>
              <li>Melakukan Set-up website untuk pelanggan yang baru.</li>
              <li>Melakukan penambahan dan pengurangan pada website sesuai dengan laporan dari pelanggan.</li>
              <li>Melakukan Persentasi website ke pelanggan.</li>
              <li>Membuat laporan harian terkait apa yang di kerjakan</li>
            </ul>
          </div>

          <div class="timeline-item clearfix">
            <h5 class="item-period ">2020 - 2022</h5>
            <span class="item-company">PT. Bimasakti Cahaya Abadi</span>
            <h4 class="item-title">IT STAFF</h4>
            <ul>
              <li>Membuat aplikasi sesuai dengan permintaan karyawan / atasan.</li>
              <li>Melakukan Persentasi & Training terkait aplikasi yang dibuat untuk keperluan internal kepada karyawan terkait.</li>
              <li>Melakukan penanganan pertama jika ada permasalahan terkait dengan internet & perangkat IT yang digunakan.</li>
              <li>Membuat laporan harian terkait apa yang di kerjakan.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

let PortfolioPageContent = ` <div id="main-content" class="single-page-content">
<div id="primary" class="content-area">

  <div class="page-title">
    <h1>Portfolio</h1>
    <div class="page-subtitle">
        <h4> My Works</h4>
    </div>
  </div>

  <div id="content" class="page-content site-content single-post" role="main">

    <div class="row">
      <div class=" col-xs-12 col-sm-12 ">
        <!-- Portfolio Content -->
        <div id="portfolio_content_q" class="portfolio-content">      
          <!-- Portfolio Grid -->
          <div class="portfolio-grid two-columns shuffle">

            <!-- Portfolio Item 1 -->
            <figure class="item standard">
              <div class="portfolio-item-img">
                <img src="./img/portfolio/1.png" alt="Full Project 2" title="" />
                <a href="https://soa.co.id/" target="_blank"></a>
              </div>

              <i class="far fa-file-alt"></i>
              <h4 class="name">Company Profile</h4>
              <span class="category">SOA GROUP</span>
            </figure>
            <!-- /Portfolio Item 1 -->

            <!-- Portfolio Item 1 -->
            <figure class="item standard">
              <div class="portfolio-item-img">
                <img src="./img/portfolio/2.png" alt="Full Project 2" title="" />
                <a href="https://saktijasasinergi.com/" target="_blank"></a>
              </div>

              <i class="far fa-file-alt"></i>
              <h4 class="name">Company Profile</h4>
              <span class="category">SAKTI JASA SINERGI</span>
            </figure>
            <!-- /Portfolio Item 1 -->

            <!-- Portfolio Item 1 -->
            <figure class="item standard">
              <div class="portfolio-item-img">
                <img src="./img/portfolio/3.png" alt="Full Project 2" title="" />
                <a href="https://oketani.co.id/" target="_blank"></a>
              </div>

              <i class="far fa-file-alt"></i>
              <h4 class="name">Company Profile</h4>
              <span class="category">DATA KREASINDO</span>
            </figure>
            <!-- /Portfolio Item 1 -->

            
          </div>
          <!-- /Portfolio Content -->
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;


var ClickedHeader = (param) => {
    if (param == 'beranda') {
        $('#main').html(HomePageContent);
    }else if (param == 'resume'){
        $('#main').html(ResumePageContent);
    }else if (param == 'portfolio') {
        $('#main').html(PortfolioPageContent);
    }
}



$(document).ready(function () {
    $('.header').html(header);
    ClickedHeader('beranda');
})