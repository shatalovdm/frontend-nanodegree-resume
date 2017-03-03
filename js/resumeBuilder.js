/*
This is empty on purpose! Your code to build the resume will go here.
*/

var work = {
    jobs: [
        {
           title: "Course Online Technician",
           employer: "DePaul University",
           dates: "10/15 - present",
           location: "Chicago, IL",
           description: "Perform thorough maintenance of Course Online teaching facilities to ensure high quality of video recordings, " + 
           "Troubleshoot hardware/software related issues, " + 
           "Provide prompt and detailed telephone help desk support for students, staff and faculty"
       }
    ],
    display: function(){
        this.jobs.forEach( function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);

        });
    }
};
var education = {
    schools: [
        {
           name: "DePaul University",
           location: "Chicago, IL",
           degree: "Master of Science",
           dates: "09/15 - present",
           url: "http://www.depaul.edu/Pages/default.aspx",
           majors: ["Computer Science"]
       },
       {
           name: "MGIMO University",
           location: "Moscow, Russia",
           degree: "Bachelor of Science",
           dates: "09/11 - 7/15",
           url: "http://english.mgimo.ru/",
           majors: ["Economics"]
       }
    ],
    onlineCourses: [
       {
           title: "Front-End Web Developer Nanodegree",
           school: "Udacity",
           dates: "01/17 - present",
           url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
       }
    ],
    display: function(){
        education.schools.forEach( function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            formattedName = formattedName.replace("#", school.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);

            school.majors.forEach( function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
        });
        education.onlineCourses.forEach( function(onlineCourse) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            formattedTitle = formattedTitle.replace("#", onlineCourse.url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var formattedURL = HTMLonlineURL.replace("%data%", onlineCourse.url);

            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedURL);
        });
    }
};
var projects = {
    projects: [
        {
            title: "Food tracker",
            dates: "4/16-6/16",
            description: "Project powered by web2py",
            images: []
        },
        {
            title: "Data Visualization",
            dates: "2/16-4/16",
            description: "My first steps in Data Science",
            images: []
        }
    ],
    display: function(){
        this.projects.forEach( function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            
            project.images.forEach( function(img) {
                var formattedImage = HTMLprojectImage.replace("%data%", img);
                $(".project-entry:last").append(formattedImage);
            });

        });
    }
};

var bio = {
    name: "Dmitry Shatalov",
    role: "Web Developer",
    welcomeMessage: "Front-end is an art",
    contacts: {
        mobile: "3122066406",
        email: "innoshatalov@gmail.com",
        github: "shatalovdm",
        twitter: "@dmitryshatalov",
        location: "Chicago, IL"
    },
    skills: ["JS", "JQuery", "Ruby", "Java"],
    biopic: "images/fry.jpg",
    display: function(){
        // Header
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedPic);
        $("#header").append(formattedMessage);
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach( function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });

        // Contact information
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);    
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
