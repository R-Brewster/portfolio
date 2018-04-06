$(document).ready(initialize);

function initialize() {
    //Add click handlers
    $("#scroll_up_glyph").on('click', scrollUp);
    $("#scroll_down_glyph").on('click', scrollDown);
    $(".topic_tile").on('click', modalData);
    $(".nav_section").on('click', closeNavBar);
    $(".navbar-brand").on('click', closeNavBar);
    $("section").on('click', closeNavBar);
    $(".skill").on('click', () => {window.open('./assets/docs/rebecca_brewster_resume.pdf')})
    $(".navbar-toggle").on('click', () => {
        if ($("body").css('overflow-y') === 'scroll') {
            $("body").css('overflow-y', 'hidden')
        }
        else if ($("body").css('overflow-y') === 'hidden') {
            $("body").css('overflow-y', 'scroll')
        }
    })

    $("#pokemonDDRProject").on('click', () => {window.open('http://rebeccabrewster.com/apps/POKEMON-SPEED-BATTLE')});
    $("#pokemonGithub").on('click',  () => {window.open('https://github.com/collinwong53/POKEMON-SPEED-BATTLE')});
    $("#clueMemoryMatchProject").on('click',  () => {window.open('http://rebeccabrewster.com/apps/CLUE-MEMORY-MATCH')});
    $("#clueGithub").on('click',  () => {window.open('https://github.com/R-Brewster/CLUE-MEMORY-MATCH')});
    $("#helloOperatorProject").on('click',  () => {window.open('http://hello-operator.net')})
    $("#helloOperatorGithub").on('click',  () => {window.open('https://github.com/michaeljlin/hello-operator')});
}

function scrollUp() {
    $("#development_text")[0].scrollTop -= 100;
}

function scrollDown() {
    $("#development_text")[0].scrollTop += 100;
}

function modalData(event) {

        let topic = '';

        //If the glyphicon was clicked 
        if($(`#${event.target.id}`).hasClass('glyphicon')) {
            topic = $(`#${event.target.id}`).parent().attr('data-whatever')
        }
        //If the text below the glpyhicon was clicked
        else if(event.target.localName === 'h3') {
            topic =  $(`#${event.target.id}`).parent().parent().attr('data-whatever')
        }
        else{
            topic = $(event.target).data('whatever');
        }

        $("#about_modal_title").text(topic);
        $("#about_modal").modal('show');
        modalText(topic);
}

function modalText(topic) {
    var modalText = [
        {
            topic:'Development',
            text: 'If you were to have told me in college that I would eventually be on a career path for web development, I would probably not have believed you. Despite having been born into a family of computer engineers, programming did not seem like a very attainable career. Which is why I had decided to go to school for Ecology and Evolutionary Biology instead. Okay, not very attainable either, but my younger self did not know anything about the horrors of Organic Chemistry. \n A programming career did not seriously enter my mind as something attainable until I was working at a geo-informational software company and learned of a web development school in Irvine,CA. The school offered a full-immersion course that could unlock a career in web development, assuming that we were up to the work. I will admit, the part of my psyche that had not yet quite recovered from sleepless nights of trying to shove quantum mechanics or cellular biology into my brain trembled at the prospect of such as intensive course. But the larger part of me - the part that cannot resist wanting to know more and enjoys logic puzzles - wanted to give this school a try. I count that decision as one of the best I\'ve ever made. \n I loved learning Javascript and how to make dynamic applications. I have found a career I truly enjoy,and I cannot wait to see where it takes me!'},
        {
            topic:'Background',
            text: 'I have been fortunate enough to have lived in California my whole life. I was born in the foothills of San Diego County, a place full of oak trees and creeks, and plenty of wildlife for a curious child to explore. My family includes parents who have both had careers as computer engineers and a twin brother, who was dragged along on many of the aforementioned backyard wilderness adventures.'},
        {
            topic:'Education',
            text: 'I attended UC Merced to earn my Bachelors, the newest of the UC system and the one with an exciting pioneering energy I could not resist. My degreee ended up being a B.S. in Biology with an emphasis in ecology and evolutionary biology. \n My more recent educational experience was attending Learning Fuze, a web development school in Irvine. I was a part of their full-immersion course where we were taught not only how to code in Javascript with methodologies such as OOP and MVC, but also in an agile structured environment with such technologies as Github. Several of my projects are featured below.'},
        {
            topic: 'Employment',
            text: 'My first job was a very unique one, I was a summer Park Ranger Intern in Yosemite National Park. I led tours, staffed visitor centers, and conducted campfire talks. I was able to really develop my communication skills, which have proven invaluable since. \n My student job for the majority of college was as a marketing intern for the admissions department. This was my chance to learn new technologies as I dabbled in video editing, publication creation, and marketing campaigns. \n Upon graduating from college, I sort of continued my student marketing position as a college admissions recruiter, traveling to various schools throughout Los Angeles. The position was a good opportunity to learn about CRM systems, particularly Salesforce, and to see a variety of marketing plans in action. \n My most recent work experience was with Esri, a company that specializes in making GIS software. I was in their events and marketing department, working for their tradeshow team. The majority of my time was spent preparing for the large annual conference, or helping with internal tasks such as purchase requests. It was this position that ultimately set me on the path to becoming a developer. I ended up talking to several of the software developers at the company, and could not help but think that programming - actually making the software of a company - and not just supporting it - sounded pretty intriguing.'},
        {
            topic: 'Hobbies',
            text: 'Outside of the workplace I generally spend my time either making things or exploring. I love learning old lace making or sewing techniques - something about designing stitch patterns and seeing them come alive is just so fascinating. But I eventually want to get outside, so I really enjoy hiking and exploring the wilderness. All of the photos on this site are ones I\'ve taken on various hikes. Identifying native plant species and birds is also a favorite pastime, so I\'ll go ahead and apologize in advance if I ever interrupt you because you pass by an interesting flower.'},
    ];

    var modalTextSectionIndex = modalText.findIndex(function(section) {
        return section.topic === topic
    });

    var modalTextSection = modalText[modalTextSectionIndex].text;

    $('#about_modal_body').text(modalTextSection);
}

function closeNavBar() {
    $(".navbar-collapse").collapse('hide');
    $("body").css('overflow-y', 'scroll')
}
