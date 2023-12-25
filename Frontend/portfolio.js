var pageContent = new Array()
pageContent['home'] = "<p id='topic'>Bio</p>"
pageContent['home'] += "<div id='content'>"
pageContent['home'] += "Hello, i am Olusola Ayomide Victor, a passionate backend developer with a keen interest in crafting innovative solutions. <br>My journey in the world of technology has been driven by a desire to create seamless and efficient digital experiences. "
pageContent['home'] += "Specializing in backend development, i thrive on turning complex ideas into reality and ensuring the smooth functioning of applications.<br>With a solid foundation in Django for API's, i've had a priviledge of contributing to diverse projects,"
pageContent['home'] += "including a startup microservice based e-commerce platform called BabyDucts. My collaborative approach and commitment to excellence have been instrumental and delivering high-quality solutions"
pageContent['home'] += "<br>Outside the realm of code, you'll find me exploring the latest trends in backend devlopment, contributing to tech community through insightful articles, and continuously find opportunities to expand my skill set."
pageContent['home'] += "</div>"
pageContent['home'] += "<p id='topic'>Introduction</p>"
pageContent['home'] += "<div id='content'>"
pageContent['home'] += "Welcome to my digital space. I'm Olusola Ayomide Victor, a backend developer on a mission to build technological solutions that make a meaningful impact."
pageContent['home'] += "Whether it is architecting microservices platforms or diving into the intricacies of backend logic, I thrive in the dynamic landscape of web development."
pageContent['home'] += "<br>In my portfolio, you will discover a snapshot of my journey, featuring projects like Babyducts that showcase my commitment to creating robust and user-friendly applications. "
pageContent['home'] += "I invite you to explore my skills, to see how they align with the ever growing demands of the digital world."       
pageContent['home'] += "<br><span id='link'>Let's connect, collaborate, and bring innovative ideas to life.</span>"  
pageContent['home'] += "</div>"        
            
            
pageContent['skill&education'] = "<p id='topic'>Skill</p>"  
pageContent['skill&education'] += "<div id='content'>"
pageContent['skill&education'] += "<ul id='mainList'>"
pageContent['skill&education'] += "<li>Programming Languages <ul id='subList'> <li>Python</li> <li>JavaScript</li> </ul> </li>"
pageContent['skill&education'] += "<li>Framework <ul id='subList'> <li>Django</li> </ul> </li>"
pageContent['skill&education'] += "<li>Backend Technologies <ul id='subList'> <li>Microservice Arcitecture</li> <li>Containerization</li> <li>RESTful APIs</li> <li>Celery(Background Worker)</li> <li>API Documentation(SwaggerUI & RedocUI)</li> </ul> </li>"          
pageContent['skill&education'] += "<li>Database Management <ul id='subList'> <li>MySQL</li> <li>PostgreSQL</li> </ul> </li>"
pageContent['skill&education'] += "<li>Soft Skills <ul id='subList'> <li>Team Collaboration</li> <li>Communication</li> <li>Problem Solving</li> </ul> </li>"
pageContent['skill&education'] += "<li>Problem Solving <ul id='subList'> <li>Algorithm Design</li> <li>Data Structure</li> </ul> </li>"
pageContent['skill&education'] += "<li>Version Control <ul id='subList'> <li>Git</li> </ul> </li>" 
pageContent['skill&education'] += "<li>Tools <ul id='subList'> <li>Docker</li> <li>Postman</li> </ul> </li>"
pageContent['skill&education'] += "<li>Messaging <ul id='subList'> <li>RabbitMQ (Message Broker)</li> <li>Redis (Message Broker)</li> </ul> </li>"            
pageContent['skill&education'] += "</ul>"     
pageContent['skill&education'] += "<p id='topic'>Education</p>"
pageContent['skill&education'] += "<div id='content' class='education'>"
pageContent['skill&education'] += "<span id='school'>Bachelor of Eng. in Computer Engineering</span>Federal University Oye-Ekiti (FUOYE), Oye-Ekiti, Ekiti State, Nigeria"
pageContent['skill&education'] += "<span id='school'>Year of Entry</span> 2021"
pageContent['skill&education'] += "<span id='school'>Year of Graduation</span> 2026"
pageContent['skill&education'] += "<span id='school'>Status</span> still studying, not yet a graduate"
pageContent['skill&education'] += "</div> "
           

pageContent['experience&project'] = "<p id='topic'>BabyDucts Ecommerce Platform</p>"
pageContent['experience&project'] += "<div id='content'>"
pageContent['experience&project'] += "<ul id='mainList'>"
pageContent['experience&project'] += "<li> Overview <ul id='subList'> <li>Babyducts is a microservice-based ecommerce platform tailored for buying and selling baby products. The platform is designed to facilitate seamless transactions between sellers and buyers in the realm "
pageContent['experience&project'] += "of baby-related merchandise. </li> </ul> </li>"
pageContent['experience&project'] += "<li>Role <ul id='subList'>"
pageContent['experience&project'] += "<li>As a key member of the development team, my responsibilities includes:</li>"
pageContent['experience&project'] += "<li>1. Collaborating with team members to design and implement microservices architecture</li>"
pageContent['experience&project'] += "<li>2. Contributing to the development of user account management functionalities.</li>"
pageContent['experience&project'] += "<li>3. Ensuring secure and efficient handling of transactions between sellers and buyers </li> </ul> </li>"
pageContent['experience&project'] += "<li>Technology Used <ul id='subList'>"
pageContent['experience&project'] += "<li>Microservice Architecture</li> <li>SwaggerUI & RedocUI</li> <li>Background Worker (Celery)</li> <li>Redis (Message Broker)</li> <li>PostgreSQL</li> </ul> </li>"
pageContent['experience&project'] += "<li>Status and Future Plans <ul id='subList'>"
pageContent['experience&project'] += "<li>As of now, BabyDucts is in development stage. The team is actively working towards lauching. Stay tuned for updates on this exciting project.</li> </ul> </li>"
pageContent['experience&project'] += "</ul>"
pageContent['experience&project'] += "</div>"


pageContent['blog'] = "<p id='topic'>Blog/Article</p>"
pageContent['blog'] += "<div id='content'>"
pageContent['blog'] += "Explore my in-depth articles and technical insights on my Hasnode profile. Here are few highlights."
pageContent['blog'] += "<ul id='mainList'>"
pageContent['blog'] += "<li>"
pageContent['blog'] += "1. Django: Creating Custom User Model"
pageContent['blog'] += "<ul id='subList'> <li>This blog teaches how to override Django default functionality. In many scenarios where Django default user model will not satisfy the project's requirement, the need to override the default behaviour will arise. This blog teaches the best approach to solve this problem. Click on <a id='link' href='https://victorolusola.hashnode.dev/django-creating-custom-user-model' target='blank'>link</a> to read. Do ensure you subscribe to my newsletter. </li> </ul>"
pageContent['blog'] += "</li>"
pageContent['blog'] += "<li>"
pageContent['blog'] += "2. Transitioning User Model"
pageContent['blog'] += "<ul id='subList'> <li>This blog teaches how to apply Custom User model when database has been created. It is highly recommended to decide, whether to use Django default User model or override it before running the first/initial migration. The question now is \"what if the project's requirement require us to override the default user model in the middle of production?\". Perhaps more user details is now needed, how do you go about this?. This blog provides the solution with ease. Click on <a id='link' href='https://victorolusola.hashnode.dev/transitioning-user-model' target='blank'>link</a> to read. <br>Do ensure you subscribe to my newsletter. </li> </ul>"
pageContent['blog'] += "</li>"
pageContent['blog'] += "</ul>"
pageContent['blog'] += "</div>"


pageContent['contact'] = "<p id='topic'>Contact</p>"
pageContent['contact'] += "<div id='content'>"
pageContent['contact'] += "<ul id='mainList'>"
pageContent['contact'] += "<li>Email <ul id='subList'> <li> <a href='mailto:ayomideolusola5002@gmail.com' target='_blank'>ayomideolusola5002@gmail.com</a> </li> </ul> </li>"
pageContent['contact'] += "<li>LinkedIn <ul id='subList'> <li> <a href='https://www.linkedin.com/in/victor-olusola-a59493276' target='_blank'>https://www.linkedin.com/in/victor-olusola-a59493276</a> </li> </ul> </li>"
pageContent['contact'] += "<li>GitHub <ul id='subList'> <li> <a href='https://github.com/VictorAO-django' target='_blank'>https://github.com/VictorAO</a> </li> </ul> </li>"
pageContent['contact'] += "<li>Hasnode <ul id='subList'> <li> <a href='https://victorolusola.hashnode.dev' target='_blank'>https://victorolusola.hashnode.dev</a> </li> </ul> </li>"
pageContent['contact'] += "<li>Phone <ul id='subList'> <li> <a href='tel:+2347041943218' target='_blank'>+2347041943218</a> </li> </ul> </li>"
pageContent['contact'] += "<li>WhatsApp <ul id='subList'> <li> <a href='https://wa.me/message/SZTQ2QSERWKEM1' target='_blank'>https://wa.me/message/SZTQ2QSERWKEM1</a> </li> </ul> </li>"
pageContent['contact'] += "</ul>"
pageContent['contact'] += "</div>"


function indicate(prev,to){
    var prev = document.getElementById(prev);
    var to = document.getElementById(to);
    //modify prev
    prev.style.backgroundColor = 'transparent';
    prev.style.color = '#fff';
    prev.className = ""

    //modify to
    to.style.backgroundColor = '#fff';
    to.style.color = '#121212';
    to.className = 'prev'
}

function toggleColor(){
    var center = document.getElementById('center');
    center.style.backgroundColor = "#88EDFF";

    setTimeout(function(){
        center.style.backgroundColor = '#fff'
    }, 300);
}

function swapContent(to){
    var center = document.getElementById('center')
    center.innerHTML = pageContent[to]
}

function navigate(to){
    var prev = document.getElementsByClassName('prev')[0]
    toggleColor();
    indicate(prev.id, to);
    swapContent(to);
}


document.addEventListener("DOMContentLoaded",function(){
    indicate('home', 'home')
})

function displayWidth(){
    alert(window.innerWidth)
}