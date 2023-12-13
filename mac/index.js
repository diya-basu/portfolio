let icons = document.querySelectorAll(".ico");
let length = icons.length;

icons.forEach((item, index) => {
  item.addEventListener("mouseover", (e) => {
    focus(e.target, index);
  });
  item.addEventListener("mouseleave", (e) => {
    icons.forEach((item) => {
      item.style.transform = "scale(1)  translateY(0px)";
    });
  });
});

const focus = (elem, index) => {
  let previous = index - 1;
  let previous1 = index - 2;
  let next = index + 1;
  let next2 = index + 2;

  if (previous == -1) {
    console.log("first element");
    elem.style.transform = "scale(1.5)  translateY(-10px)";
  } else if (next == icons.length) {
    elem.style.transform = "scale(1.5)  translateY(-10px)";
    console.log("last element");
  } else {
    elem.style.transform = "scale(1.5)  translateY(-10px)";
    icons[previous].style.transform = "scale(1.2) translateY(-6px)";
    icons[previous1].style.transform = "scale(1.1)";
    icons[next].style.transform = "scale(1.2) translateY(-6px)";
    icons[next2].style.transform = "scale(1.1)";
  }
};
document.addEventListener('DOMContentLoaded', function () {
  var folderIcon = document.getElementById('folderIcon');
  var folderWindow = document.getElementById('folderWindow');
  var closeBtn = document.getElementById('closeBtn');
  var minimizeBtn = document.getElementById('minimizeBtn');
  var zoomBtn = document.getElementById('zoomBtn');
 

 // Function to toggle window visibility
 function toggleWindow() {
  if (folderWindow.style.display === 'none') {
    // Restore the window
    folderWindow.style.display = 'flex'; // Use flex to maintain the layout
  } else {
    // Minimize the window
    folderWindow.style.display = 'none';
  }
}

  // Event listeners
  folderIcon.addEventListener('click', toggleWindow);
  closeBtn.addEventListener('click', toggleWindow);
  minimizeBtn.addEventListener('click', function () {
    folderWindow.style.display = 'none';
  });
  zoomBtn.addEventListener('click', function () {
    folderWindow.style.width = parseInt(folderWindow.style.width) * 1.1 + 'px';
    folderWindow.style.height = parseInt(folderWindow.style.height) * 1.1 + 'px';
  });
  const sectionContent = {
    aboutSection: "<p id='about-me'>Heyy there! I am Diya 👋 <br>I'm a Creative developer, content writer currently pursuing a degree in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning. Set to graduate from college in July 2025, I’m excited to deploy my skill set in the real world and have an active hand in the rapidly changing technology of today. Owing to my love for doomsday tech films: My projects under development range from working with AI-ML frameworks and Large language models to creating immersive websites with storytelling techniques.<br>I am an avid internet observer, and like to gather inspiration from anything and everything I can find on the internet. When I am not stuck on a bug on line 42(of 400) I like to spend my time reading and returning back to my childhood of fine arts. <br> Head on over to the sections on the left to find out more.<br> Thank you for visiting!:) </p>",
    skillsSection: "<br><p>(Hover on icons for proficiency level)</p><br>"+
    "<br><br>"+"<p id='skills-container'>"+
    "<i class='devicon-python-plain' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>"+
    "<i class='devicon-c-plain' style='font-size:48px;' title = 'Proficiency: 4/5'></i>"+
    "<i class='devicon-java-plain' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>"+    
    "<i class='devicon-cplusplus-plain' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>"+ 
    "<i class='devicon-html5-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+
    "<i class='devicon-css3-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+
    "<i class='devicon-javascript-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+
    "<i class='devicon-threejs-original' style='font-size:48px;' title = 'Proficiency: 3.5/5'></i>"+
    "<i class='devicon-react-original' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+ 
    "<i class='devicon-blender-original' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+
    "<i class='devicon-tensorflow-original' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+
    "<i class='devicon-matlab-plain' style='font-size:48px;' title = 'Proficiency: 4/5'></i>"+
    "<i class='devicon-flutter-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+      
    "<i class='devicon-dart-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+   
    "<i class='devicon-swift-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+
    "<i class='devicon-codepen-plain' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>"+
    "<i class='devicon-opencv-plain' style='font-size:48px;' title = 'Proficiency: 4/5'></i>"+ 
    "<i class='devicon-mysql-plain-wordmark' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>"+     
    "<i class='devicon-vscode-plain' style='font-size:48px;' title = 'Proficiency: 4/5'></i>"+
    "<i class='devicon-flask-plain' style='font-size:48px;' title = 'Proficiency: 3.5/5'></i>"+ 
    "<i class='devicon-webflow-original' style='font-size:48px;' title = 'Proficiency: 3/5'></i>"+ 
  "</p> ",
    projectsSection: `<h3 style="padding-top: 5vh">AI-ML</h3>
    
     
    <div class='projects'> 
    <span class = 'project-name'> • Langchain Document Chatbot</span><br>  
    The chatbot was built using NLP frameworks and AI API technologies: there are currently two versions: OpenAI and Huggingface’s dollybv2 model powering the bot. This allows users to interact with the information contained in their documents: supports pdf, text, word documents and even images.
    <a href="https://github.com/diya-basu/Langchain-Document-chatbot" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • ALICE</span><br>  
    A.L.I.C.E - A language interface connector environment.A virtual assistant based in Python, which is will only be activated and deactivated using voice commands. This assistant derives its operational bases from AI and NLP techniques to perform tasks orated by the users.
    <a href="https://github.com/diya-basu/ALICE" target="_top">
       (source code)
    </a>
    </div>

    <div class='projects'>
    
    <span class = 'project-name'> • Stock Prediction App:streamlit</span><br>  
    Streamlit app built in python using Deep learning framework(built from scratch) to predict the prices of popular stocks in the upcoming years.
    <a href="https://github.com/diya-basu/Stock-Prediction-App-Streamlit" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    
    <span class = 'project-name'> • Song Recommendation App:Streamlit</span><br>  
    Built using streamlit in python and the Spotipy module, the app recommends a list of songs based on the last song you listened to.
    <a href="https://github.com/diya-basu/Song-Recommendation-App-Streamlit" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • Age and Gender Detection:OpenCV</span><br>  
    Using OpenCV in python this deep learning model can tell the gender and age of any person from their photos.
    <a href="https://github.com/diya-basu/Age-and-gender-detection-using-OpenCV" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • Extract text from images: EasyOCR</span><br>  
    Utilizes the EasyOCR module in python this tool helps in extracting text from images by mapping text to individual characters.
    <a href="https://github.com/diya-basu/Extract-text-from-images-EasyOCR-" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • GDP analysis of countries</span><br>  
    This Jupyter Notebook analyses the GDP of all the countries from the infamous "countries of the world" dataset and applies ML frameworks to analyse and predict future GDPs of the countries. 
    <a href="https://github.com/diya-basu/GDP-analysis-of-countries" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • ML Loan Prediction problem</span><br>  
    Jupyter Notebook to classify if a person is eligible for a loan or not based on feature analysis and classification techniques like Naive Bayes, Decision trees, Random forest classification, and Logistic Regression. (Analytics Vidhya contest score: 6.57)
    <a href="https://github.com/diya-basu/ML-Loan-prediction-problem" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • Facial-Recognition using OpenCV</span><br>  
    The bot is trained on a folder of images called known_images, and can accurately identify people from that folder in real-time.
    <a href="https://github.com/diya-basu/Facial-Recognition-using-OPENCV-python" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • Gradient Descent</span><br>  
    Jupyter Notebook to visualise the gradient descent algorithm in machine learning by varying parameters.
    <a href="https://github.com/diya-basu/Gradient-Descent" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • Movie Recommendation System</span><br>  
    OTT platform's TOP PICKS for YOU clone. Using Cosine similarity the given tool returns a list of ten movies you should watch based off of the last movie that you liked.
    <a href="https://github.com/diya-basu/Movie-Recommendation" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> • Sequential DL model</span><br>  
    Google-Colab notebook to visualise the working of a simple sequential Deep Learning model.
    <a href="https://github.com/diya-basu/Sequential-Deep-Learning-model" target="_top">
       (source code)
    </a>
    </div>

    <h3 style="padding-top: 5vh">Web Development</h3> 
    <div class='projects'> 
 
    <span class = 'project-name'> • Youtube Transcripter and Summarizer</span><br>  
    With its back end API developed on Python, and it’s front end coded on Javascript and HTML5, functions as a chrome extension. With the use of CORS unblocker, it is very easy to upload the program files as extensions and use them for processing of data and retrieving summaries of YouTube videos. Alternatively, this can also be deployed as an HTML web page and used to derive the summary of a YouTube video.
    <a href="https://github.com/diya-basu/YouTube-Transcript-Summarizer" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> •Portfolio:Diya's desk tour</span><br>  
    Built using Threejs in React-three Fiber, my portfolio is comprised of two parts: a 2D OS style website and a 3D overlay model. This framework was created with the intention of showcasing my coding skills and also to create an immersive experience for those visiting my website.
    </div>

    <div class='projects'> 
    <span class = 'project-name'> •Miniroom game</span><br>  
    Built on Spline and deployed using react, this game allows the user to move around a room and also to customize the rooms colours.
    </div>

    <div class='projects'> 
    <span class = 'project-name'> • Bunny on a Platform game</span><br>  
    Built on Spline and deployed using react, this game allows the user to move around a bunny on its home island while makng sure bunny doesn't fall off the platform.
    </div> 
    
    <div class='projects'> 
    <span class = 'project-name'> • Aviator game</span><br>  
    Recreating the infamous Aviator game to understand and implement the basics of creating an interactive three js scene.(Under Development)
    </div> 

    <div class='projects'> 
    <span class = 'project-name'> • Three js sphere</span><br>  
    Built using Threejs this sphere is a melting ball of texture which is reactive to sounds. (Under Development)
    </div> 

    <div class='projects'> 
    <span class = 'project-name'> • ATMOS clone</span><br>  
    Built using Threejs in React-Three-fiber, this is a recreation the infamous AWWARD-winning website ATMOS. (Under Development)
    </div> 

    <div class='projects'> 
    <span class = 'project-name'> • My Room</span><br>  
    Built using Threejs, this is a focus web-application armed with organic room sounds. Allows users to modulate the level of background noise and set timers or focus periods for working.(Under Development)
    </div> 

    <h3 style="padding-top: 5vh">Webscrapers</h3> 
    <div class='projects'> 
    <span class = 'project-name'> • Amazon Price Tracker</span><br>  
    This project developed on python aims to derive data from Amazon website of the product that the user wants to track the price of. It utilises the SMTP module in python to send emails to the user when the price of the item falls below the limit set by the user.
    <a href="https://github.com/diya-basu/Amazon-Price-Tracker" target="_top">
       (source code)
    </a>
    </div>
    
    <div class='projects'> 
    <span class = 'project-name'> •Spotify Playlist</span><br>  
    Scrapes data from the BillBoard HOT 100 website of the top songs on a given date, and turns it into a Spotify playlist. Built using BeautifulSoup and Spotipy module in python.
    <a href="https://github.com/diya-basu/Spotify-Playlist" target="_top">
       (source code)
    </a>
    </div>

    <div class='projects'> 
    <span class = 'project-name'> • Movie Webscraper</span><br>  
    Scraping data from Empire's greatest movies of all time and displaying it in a text file. The project aims to develop a more synthetic way of deriving data from websites for processing and analysis purposes to provide a much more easier way of data collection which can be further utilised to train machine learning models
    <a href="https://github.com/diya-basu/Movie-Webscraper" target="_top">
       (source code)
    </a>
    </div>

    <div class='projects'> 
    <span class = 'project-name'> • Job Automator</span><br>  
    Using Selenium and Linkedin's auto fill tool for job Applications, this tool automates the entire process of job application with the click of a single button.(Under Development)
    </div>
    `,
    
    workSection: "<div class='work-experience'>" +
    "<span class = 'work-name'>AI-ML Developer</span><br>" +
    "<strong>Sify Technologies</strong><br>" +
    "<span class='designation-time'>August 2023-October 2023</span><br>" +
    "• Researched and implemented large language models: both OpenAI and HuggingFace models, to create a personal document chatbot.<br>" +
    "• Tool is equipped with conversational abilities and chat history so it can remember feedback and provide better results with each iteration of questioning.<br>" +
    "• Used simple front end tools like streamlit and flask to create an interactive UI for the tool. Backend was built completely on Python.<br>" +
    "• Built with ML frameworks, the chatbot can also produce a query analysis report for review purposes.<br>" +
    "• The chatbot was built using NLP frameworks and AI API technologies: there are currently two versions: OpenAI and Huggingface’s dollybv2 model powering the bot.<br>" +
"</div>" +
"<div class='work-experience'>" +
"<span class = 'work-name'>Research Intern</span><br>" +
"<strong>VIT-Chennai School of Cyber Physical Systems</strong><br>" +
    "<span class='designation-time'>August 2023-October 2023</span><br>" +
    "• Applied for a Patent in a wearable IoT medical device for Dysarthria patients.<br>" +
    "• The device is made to convert slurred speech into clear intelligible language in real-time.<br>" +
    "• It is also equipped with stroke prediction capabilities and dashboard analytics to monitor the patient’s level of dysarthria." +
"</div>"+
"<div class='work-experience'>" +
"<span class = 'work-name'>Technical Support</span><br>" +
"<strong>Storycentre.org</strong><br>" +
    "<span class='designation-time'>September 2022-March 2023</span><br>" +
    "• Worked in Technical support team for Storycentre.org, a non-profit organization based in North America.<br>" +
    "• Assisted in their 'Rainbow stories' project as technical support in editing the stories and publishing them on their website.<br>" +
    "• Worked exclusively with frontend website and video and text editors to make verbal stories manufactured in the workshops come to life.<br>" +
"</div>" +
"<div class='work-experience'>" +
"<span class = 'work-name'>Teacher</span><br>" +
"<strong>Mahadevi Birla World Academy</strong><br>" +
    "<span class='designation-time'>June 2021-August 2021</span><br>" +
    "• Worked as a teaching intern for a period of three weeks teaching English and computer science to middle school students.<br>" +
    "• Taught basic computer science frameworks and taught the programming language LOGO.<br>" +
    "• Taught the original text of Alice In Wonderland by Lewis Carol and organized essay competitions on said topics.<br>" +
"</div>",
    contactSection: "<div id='contact'>" +
    "<form action=''><table><tr><td><input type='text'class='box' placeholder='First Name'></td><td><input type='text'class='box' placeholder='Last Name'></td></tr><tr><td><input type='email' class='box' placeholder='Your E-mail'></td><td><input type='text'class='box' placeholder='Subject'></td></tr><tr><td colspan='2'><textarea name='' id='' cols='41' rows='10' class='box message' placeholder='Type your message'></textarea></td></tr><tr><td colspan = '2'><input type='submit' value='Send Message' class='btn'></td></tr></table></form>" + "</div>"
};

const sectionHeading = {
  aboutSection: "About Me",
  skillsSection: "My Skills",
  projectsSection: "My Projects",
  workSection: "Work Experience",
  contactSection: "Contact Me"+"<br><br><br><div id='contact-icon'>"+"<a href='https://github.com/diya-basu' target='_top'><i class='devicon-github-original' ></i></a>"+"<a href = 'https://www.linkedin.com/in/diyabasu73/' target='_top'><i class='devicon-linkedin-plain' ></i></a>"+"<a href='https://codepen.io/Diya-Basu' target='_top'><i class='devicon-codepen-plain' ></i></a>"+"<a href = 'mailto: diya.basu73@gmail.com'><i class='devicon-google-plain' target='_top'></i></a>"+"</div>"
};
  // Sidebar click events
  var sections = document.querySelectorAll('.section');
  sections.forEach(function (section) {
      section.addEventListener('click', function () {
          var sectionId = section.id;
          var contentDiv = document.getElementById('content');
          contentDiv.innerHTML = "<span id='header'><h3>"+sectionHeading[sectionId]+"</h3></span>"+sectionContent[sectionId];
      });
  });

  // Make the window draggable
  var titlebar = document.querySelector('.titlebar');
  var isDragging = false;
  var offset = { x: 0, y: 0 };

  titlebar.addEventListener('mousedown', function (e) {
    isDragging = true;
    offset = {
      x: folderWindow.offsetLeft - e.clientX,
      y: folderWindow.offsetTop - e.clientY,
    };
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    folderWindow.style.left = e.clientX + offset.x + 'px';
    folderWindow.style.top = e.clientY + offset.y + 'px';
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });
});


//function to display the realtime date and time. 

function menutime() {
  var time = new Date(),
      daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      day = daysOfWeek[time.getDay()],
      date = time.getDate(),
      month = months[time.getMonth()],
      hours = time.getHours(),
      minutes = time.getMinutes(),
      ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, make it 12

  document.querySelectorAll('.menutime')[0].innerHTML = `${day} ${date} ${month} ${harold(hours)}:${harold(minutes)}${ampm}`;

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn;
    }
    return standIn;
  }
}

setInterval(menutime, 1000);
