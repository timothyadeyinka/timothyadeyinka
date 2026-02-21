document.getElementById("wrapper").innerHTML = ` <!-- Header -->
      <header id="header-home" class="header-home">
        <div class="container">
          <nav id="main-nav">
            <span><a class="current logo" href="index.html">TK</a></span>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="about.html#about-b">Skills</a></li>
              <li><a href="work.html">Projects</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          <div class="header-content">
            <h1>Hello, I'm Timothy Kay, A <span class="gradient-text">web developer</span></h1>
            <p id="intro" class="lead"></p>
            <p class="socials">
              <span><a title="twitter" href="https://x.com/timothy_korede" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-twitter"></i>
                </a></span>
              <span> <a title="github" href="https://github.com/timoteaKay" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i>
                </a></span>
              <span>
                <a title="linkedIn" href="https://www.linkedin.com/in/timothy-triumph-41710a380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"></i>
                </a>
              </span>
            </p>
            <a href="contact.html" class="btn btn-main wave-text">Contact Me</a>
          </div>
        </div>
      </header>
    
      <!-- Section A: Specialize -->
      <div id="home-a" class="text-center py-2">
        <div class="container">
          <div class="retro">
            <span class="stars">
              <i class="fas fa-regular fa-star fa-6x"></i>
              <i class="mid-star fas fa-regular fa-star fa-6x"></i>
              <i class="fas fa-regular fa-star fa-6x"></i>
            </span>
            <h2 class="section-title sparkle-text">I Specialize In</h2>
            <div class="bottom-line"></div>
            <p class="lead">Web Development, UI/UX Design, Graphic Design, and Digital Marketing.</p>
            <p>
              I work to create engaging and user-friendly interfaces for businesses and individuals. My goal is to
              help you create a successful and enjoyable online experience for your customers.
              I'm here to help you create amazing websites and applications that will not only enhance your business's
              presence but also make a positive impact on the world.
            </p>
          </div>
          <div class="specials">
            <!-- V-ERROR: The following container elements (div) were span elements
            and the ul were also part of the good guys that produce an error of about 8 during validation -->
            <div class="box py-2">
              <i class="fas fa-file-alt fa-2x swirl"></i>
              <h3 class="gradient-text">Conception</h3>
              <ul>
                <li>I help you brainstorm, design, and plan your project's structure, features, and goals.</li>
                <li> I create the initial designs and mockups for your website or application.</li>
                <li> I help you test and refine your designs and mockups to ensure they meet your requirements.</li>
                <li>I help you identify your target audience, understand their needs, and create a compelling and engaging
                  website or application.</li>
              </ul>
            </div>
            <div class="box py-2">
              <i class="fas fa-desktop fa-2x wiggle"></i>
              <h3 class="gradient-text">UI/UX</h3>
              <ul>
                <li>I help you create a user-friendly and intuitive interface for your website or application.</li>
                <li>
                  I help you analyze user behavior, gather feedback, and make data-driven decisions to improve your
                  website
                  or application's user experience.
                </li>
              </ul>
            </div>
            <div class="box py-2">
              <i class="fas fa-wand-magic-sparkles fa-2x gradient-text"></i>
              <h3 class="gradient-text">Graphic Design</h3>
              <ul>
                <li>I help you create visuals, such as logos, icons, and branding materials, for your website or
                  application.</li>
                <li>
                  I help you create wireframe, mockups, and prototypes for your website or application to help you test
                  and refine your designs and mockups.
                </li>
              </ul>
            </div>
            <div class="box py-2">
              <i class="fas fa-thumbs-up fa-2x sparkle-text"></i>
              <h3 class="gradient-text">Interaction</h3>
              <ul>
                <li>
                  I help you create interactive elements, such as buttons, forms, and modals, for your website or
                  application.
                </li>
                <li>I help you test your design for web interactions that suits user-experience.</li>
                <li>
                  I help you optimize your website or application's performance, including speed, loading times, and
                  user experience.
                </li>
              </ul>
            </div>
          </div>
    
        </div>
        <div class="add-ons">
          <div class="description code">
            <i class="fas fa-code fa-3x wiggle"></i>
            <h3 class="parallax-text">Code Development</h3>
            <p id="code"></p>
          </div>
          <div class="description web">
            <i class="fa-solid fa-gears fa-3x swirl"></i>
            <h3 class="shake-text">Web Development</h3>
            <p id="web"></p>
          </div>
          <div class="description API">
            <i class="fa-brands fa-slack fa-3x swirl"></i>
            <h3 class="wiggle">API Development</h3>
            <p id="API"></p>
          </div>
          <div class="description data">
            <i class="fas fa-database fa-3x wiggle"></i>
            <h3 class="parallax-text">Database Management</h3>
            <p id="data"></p>
          </div>
        </div>
      </div>
    
      <!-- Section B: Stats -->
      <div id="home-b" class="text-center py-2">
        <h2 class="section-title sparkle-text">Some of My Work</h2>
        <div class="bottom-line"></div>
        <div>
          <div class="stats">
            <div>
              <ul class="wave-text">
                <li><i class="fas fa-users fa-3x"></i></li>
                <li class="stats-title">Clients</li>
                <li class="stats-number">100</li>
              </ul>
            </div>
            <div>
              <ul class="wave-text">
                <li><i class="fas fa-award fa-3x"></i></li>
                <li class="stats-title">Awards</li>
                <li class="stats-number">5</li>
              </ul>
            </div>
            <div>
              <ul class="wave-text">
                <li><i class="fas fa-hourglass-start fa-3x"></i></li>
                <li class="stats-title">Hours Worked</li>
                <li class="stats-number">6000</li>
              </ul>
            </div>
            <div>
              <ul class="wave-text">
                <li><i class="fas fa-code-branch fa-3x"></i></li>
                <li class="stats-title">Projects Completed</li>
                <li class="stats-number">10</li>
              </ul>
            </div>
          </div>
          <div class="showcase">
            <div>
              <div class="work-sample gap">
                <h3 class="gradient-text">Royal Returns</h3>
                <p>
                  Royal Returns is a custom financial solution company that allows businesses to streamline their
                  inventory
                  management and sales processes. The company helps businesses track financial expenses, manage capital,
                  and
                  generate revenue real-time.
                  <br><br>
                  I worked on the development of the frontend of the Royal Returns website, as well as the
                  integration with the accounting software. I also helped design and implement the user interface and
                  mobile app.
                </p>
    
                <div class="images">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="work-sample">
                <h3 class="gradient-text">Bourbon Bliss</h3>
                <p>
                  Bourbon Bliss is a custom lifestyle and wellness brand that offers a variety of products and services to
                  help individuals and businesses achieve their goals. The company helps businesses create a more
                  sustainable
                  and enjoyable work environment by providing a supportive and inclusive workforce.
                  <br><br>
                  I worked on the development of the backend and frontend of the Bourbon Bliss website, as well as the
                  integration with the customer management software. I also helped design and implement the user interface
                  and
                  mobile app.
                </p>
    
                <div class="images2">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Section C: Process -->
      <div id="home-c" class="text-center py-2">
        <div class="container">
          <h2 class="section-title sparkle-text">My Creative Process</h2>
          <div class="bottom-line"></div>
          <div class="expository box">
            <p class="lead">
              My creative process is based on a combination of art, technology, and business skills. I believe that
              creating a successful and enjoyable online experience for your customers involves a thoughtful and
              innovative approach.
              <br><br>
              I start by brainstorming, designing, and planning the project's structure, features, and goals. I then
              create the initial designs and mockups for your website or application. I help you test and refine your
              designs and mockups to ensure they meet your requirements. I also help you identify your target audience,
              understand their needs, and create a compelling and engaging website or application.
            </p>
            <p class="lead">
              After the initial designs and
              mockups, I work closely with you to develop a user-friendly and intuitive interface for your website or
              application. I help you analyze user behavior, gather feedback, and make data-driven decisions to improve
              your website or application's user experience.
              Once I have a solid foundation of the website or application, I work on implementing interactive elements,
              such as buttons, forms, and modals. I help you test your design for web interactions that suits
              user-experience.
              <br><br>
              Finally, I help you optimize your website or application's performance, including speed, loading times, and
              user experience. I also collaborate with you to ensure that your website or application meets your business
              goals and aligns with your brand's values.
            </p>
          </div>
        </div>
        <div class="swap">
          <div class="process-step">
            <div class="step">
              <div class="step-number">1</div>
              <div>Brainstorming</div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div>Designing</div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div>Planning</div>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <div>Mockups</div>
            </div>
            <div class="step">
              <div class="step-number">5</div>
              <div>User Interface</div>
            </div>
            <div class="step">
              <div class="step-number">6</div>
              <div>User Experience</div>
            </div>
          </div>
          <div class="process">
            <div class="content1 content active">
              <i class="fas fa-file-alt fa-4x process-icon my-2"></i>
              <h3>Discuss The Project</h3>
              <p>
                Discuss your project's goals, target audience, and desired user experience. This will help you
                understand your project's objectives and make informed decisions.
              </p>
            </div>
            <div class="content2 content">
              <i class="fas fa-desktop fa-4x process-icon my-2"></i>
              <h3>Brainstorming & Concept</h3>
              <p>
                Brainstorm and create concepts for your website or application. These concepts should be
                unique, innovative, and visually appealing.
              </p>
            </div>
            <div class="content3 content">
              <i class="fas fa-mobile-alt fa-4x process-icon my-2"></i>
              <h3>Mobile Apps</h3>
              <p>
                Developing cross-platform mobile applications.
                for your website or application.
              </p>
            </div>
            <div class="content2 content">
              <i class="fas fa-object-ungroup fa-4x process-icon my-2"></i>
              <h3>UI/UX Planning</h3>
              <p>
                Plan the user interface (UI) and user experience (UX) for your website or application. This will help you
                understand your user's needs, preferences, and expectations.
              </p>
            </div>
            <div class="content3 content">
              <i class="fas fa-thumbs-up fa-4x process-icon my-2"></i>
              <h3>Interaction</h3>
              <p>
                Implement interactive elements, such as buttons, forms, and modals, for your website or application.
              </p>
            </div>
            <div class="content1 content">
              <i class="fas fa-code fa-4x process-icon my-2"></i>
              <h3>Web Development</h3>
              <p>
                Creating responsive and interactive websites.
              </p>
            </div>
            <div class="content2 content">
              <i class="fas fa-paint-brush fa-4x process-icon my-2"></i>
              <h3>UI/UX Design</h3>
              <p>
                Crafting beautiful and intuitive user interfaces.
              </p>
            </div>
          </div>
        </div>
        <!-- REVIEW: -->
        <!--
        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-button">
              <i class="fas fa-code-branch fa-2x"></i>&nbsp;&nbsp;
              <span>Development</span>
            </button>
            <div class="accordion-content">
              <ul>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Integration with Accounting Software</li>
                <li>Mobile App Development</li>
              </ul>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-button">
              <i class="fas fa-user-friends fa-2x"></i>&nbsp;&nbsp;
              <span>User Experience</span>
            </button>
            <div class="accordion-content">
              <ul>
                <li>User Behavior Analysis</li>
                <li>Feedback Gathering</li>
                <li>Data-driven Decision Making</li>
                <li>User Interface Design</li>
              </ul>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-button">
              <i class="fas fa-database fa-2x"></i>&nbsp;&nbsp;
              <span>Database Management</span>
            </button>
            <div class="accordion-content">
              <ul>
                <li>Financial Expense Tracking</li>
                <li>Capital Management</li>
                <li>Revenue Generation</li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    
      <!-- Footer -->
      <footer id="main-footer">
      </footer>`;
